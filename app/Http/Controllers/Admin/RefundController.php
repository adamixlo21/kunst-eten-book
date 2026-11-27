<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Refund;
use App\Models\Withdrawal;
use App\Services\MollieRefundService;
use App\Services\RefundSynchronizationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Throwable;

class RefundController extends Controller
{
    /**
     * Create a full refund for a verified withdrawal.
     */
    public function store(
        Request $request,
        Withdrawal $withdrawal,
        MollieRefundService $service,
        RefundSynchronizationService $synchronization
    ) {
        // Validate administrator confirmation.
        try {
            Validator::make($request->all(), [
                'confirmed' => ['required', 'accepted'],
            ])->validate();

        } catch (ValidationException $exception) {
            throw $exception->redirectTo(
                route('admin.withdrawals.show', $withdrawal)
            );
        }

        // Check the associated order.
        if (!$withdrawal->order_id) {
            throw ValidationException::withMessages([
                'refund' => 'No associated order was found.',
            ])->redirectTo(
                route('admin.withdrawals.show', $withdrawal)
            );
        }

        $order = Order::findOrFail($withdrawal->order_id);

        // Validate the original Mollie payment.
        try {
            $service->validatePayment($order);

        } catch (Throwable $exception) {
            report($exception);

            throw ValidationException::withMessages([
                'refund' =>
                    'The original payment could not be validated. Check Mollie and confirm that test mode is enabled.',
            ])->redirectTo(
                route('admin.withdrawals.show', $withdrawal)
            );
        }

        // Reserve the refund locally before contacting Mollie.
        try {
            $refund = DB::transaction(function () use (
                $withdrawal,
                $order
            ) {
                $lockedOrder = Order::query()
                    ->whereKey($order->id)
                    ->lockForUpdate()
                    ->firstOrFail();

                $notice = Withdrawal::query()
                    ->whereKey($withdrawal->id)
                    ->lockForUpdate()
                    ->firstOrFail();

                // Validate withdrawal.
                if (
                    (int) $notice->order_id !== (int) $lockedOrder->id
                    || !$notice->verified_at
                    || $notice->status !== 'refund_pending'
                ) {
                    throw ValidationException::withMessages([
                        'refund' =>
                            'The withdrawal is not ready for a refund.',
                    ]);
                }

                // Validate order payment.
                if (
                    $lockedOrder->status !== 'paid'
                    || !$lockedOrder->mollie_payment_id
                    || $lockedOrder->total_price <= 0
                ) {
                    throw ValidationException::withMessages([
                        'refund' =>
                            'The order does not have a valid payment.',
                    ]);
                }

                // Only full-order refunds are currently supported.
                if (
                    (int) $notice->quantity
                    !== (int) $lockedOrder->quantity
                ) {
                    throw ValidationException::withMessages([
                        'refund' =>
                            'Only full-order refunds are currently supported.',
                    ]);
                }

                // Determine whether the product must be returned.
                $requiresReturn =
                    $lockedOrder->shipped_at !== null
                    || in_array(
                        $lockedOrder->fulfillment_status,
                        ['shipped', 'completed'],
                        true
                    );

                if (
                    $requiresReturn
                    && !$notice->return_received_at
                    && !$notice->return_evidence_received_at
                ) {
                    throw ValidationException::withMessages([
                        'refund' =>
                            'Register the return or sufficient evidence first.',
                    ]);
                }

                // Prevent duplicate refunds.
                $existingRefund = Refund::query()
                    ->where('order_id', $lockedOrder->id)
                    ->whereNotIn('status', [
                        'failed',
                        'canceled',
                    ])
                    ->exists();

                if ($existingRefund) {
                    throw ValidationException::withMessages([
                        'refund' =>
                            'A refund already exists for this order.',
                    ]);
                }

                // Create the local refund record.
                return Refund::create([
                    'order_id' => $lockedOrder->id,
                    'withdrawal_id' => $notice->id,
                    'reference' => (string) Str::uuid(),
                    'amount' => $lockedOrder->total_price,
                    'currency' => 'EUR',
                    'status' => 'submitting',
                    'description' =>
                        'Withdrawal refund - Order #' . $lockedOrder->id,
                ]);
            });

        } catch (ValidationException $exception) {
            throw $exception->redirectTo(
                route('admin.withdrawals.show', $withdrawal)
            );
        }

        // Submit the refund to Mollie.
        try {
            $remoteRefund = $service->createRefund($refund);

            // Use the shared synchronization service.
            $synchronization->applyRemoteRefund(
                $refund,
                $remoteRefund
            );

        } catch (Throwable $exception) {
            // The request may already have reached Mollie.
            // Never automatically submit another refund.
            Refund::query()
                ->whereKey($refund->id)
                ->where('status', 'submitting')
                ->update([
                    'status' => 'uncertain',
                ]);

            Log::error('Mollie refund requires reconciliation', [
                'refund_id' => $refund->id,
                'order_id' => $refund->order_id,
                'error' => $exception->getMessage(),
            ]);

            return redirect()
                ->route('admin.withdrawals.show', $withdrawal)
                ->with(
                    'error',
                    'The refund result is uncertain. Check the Mollie dashboard and synchronize the refund before attempting another refund.'
                );
        }

        return redirect()
            ->route('admin.withdrawals.show', $withdrawal)
            ->with(
                'success',
                'Refund submitted successfully. Current status: '
                . $refund->fresh()->status
            );
    }

    /**
     * Manually synchronize an existing refund with Mollie.
     */
    public function synchronize(
        Withdrawal $withdrawal,
        Refund $refund,
        RefundSynchronizationService $synchronization
    ) {
        // Ensure the refund belongs to the withdrawal and order.
        abort_unless(
            (int) $refund->withdrawal_id === (int) $withdrawal->id
            && (int) $refund->order_id === (int) $withdrawal->order_id,
            404
        );

        try {
            // Retrieve and synchronize the existing refund.
            $found = $synchronization->synchronize($refund);

            if (!$found) {
                return redirect()
                    ->route('admin.withdrawals.show', $withdrawal)
                    ->with(
                        'error',
                        'No matching Mollie refund was found. Review the Mollie dashboard. Do not retry an uncertain refund.'
                    );
            }

        } catch (Throwable $exception) {
            report($exception);

            return redirect()
                ->route('admin.withdrawals.show', $withdrawal)
                ->with(
                    'error',
                    'The refund status could not be synchronized.'
                );
        }

        return redirect()
            ->route('admin.withdrawals.show', $withdrawal)
            ->with(
                'success',
                'Refund status synchronized. Current status: '
                . $refund->fresh()->status
            );
    }
}
