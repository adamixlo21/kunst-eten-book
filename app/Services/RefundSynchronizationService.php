<?php

namespace App\Services;

use App\Models\Order;
use App\Models\Refund;
use App\Models\Withdrawal;
use Illuminate\Support\Facades\DB;
use RuntimeException;

class RefundSynchronizationService
{
    public function __construct(
        private readonly MollieRefundService $mollie
    ) {
    }

    /**
     * Retrieve and synchronize an existing Mollie refund.
     */
    public function synchronize(Refund $refund): bool
    {
        $remoteRefund = $this->mollie->findRefund($refund);

        if (!$remoteRefund) {
            return false;
        }

        $this->applyRemoteRefund($refund, $remoteRefund);

        return true;
    }

    /**
     * Apply verified Mollie refund information.
     */
    public function applyRemoteRefund(
        Refund $refund,
               $remoteRefund
    ): void {
        $order = $refund->order;

        $remoteStatus = $remoteRefund->status instanceof \BackedEnum
            ? $remoteRefund->status->value
            : $remoteRefund->status;

        $remoteMode = $remoteRefund->mode instanceof \BackedEnum
            ? $remoteRefund->mode->value
            : $remoteRefund->mode;

        // Verify the refund belongs to the original payment.
        if (
            !$order
            || $remoteRefund->paymentId !== $order->mollie_payment_id
            || $remoteRefund->amount->currency !== $refund->currency
            || $remoteRefund->amount->value !== $refund->amount
            || $remoteMode !== 'test'
        ) {
            throw new RuntimeException(
                'Mollie refund information does not match.'
            );
        }

        $allowedStatuses = [
            'queued',
            'pending',
            'processing',
            'refunded',
            'failed',
            'canceled',
        ];

        if (!in_array($remoteStatus, $allowedStatuses, true)) {
            throw new RuntimeException(
                'Unknown Mollie refund status.'
            );
        }

        DB::transaction(function () use (
            $refund,
            $remoteRefund,
            $remoteStatus
        ) {
            $lockedOrder = Order::query()
                ->whereKey($refund->order_id)
                ->lockForUpdate()
                ->firstOrFail();

            $notice = Withdrawal::query()
                ->whereKey($refund->withdrawal_id)
                ->lockForUpdate()
                ->firstOrFail();

            $lockedRefund = Refund::query()
                ->whereKey($refund->id)
                ->lockForUpdate()
                ->firstOrFail();

            // Verify relationships.
            if (
                (int) $notice->order_id !== (int) $lockedOrder->id
                || (int) $lockedRefund->order_id !== (int) $lockedOrder->id
                || (int) $lockedRefund->withdrawal_id !== (int) $notice->id
                || $remoteRefund->paymentId !== $lockedOrder->mollie_payment_id
                || $remoteRefund->amount->currency !== $lockedRefund->currency
                || $remoteRefund->amount->value !== $lockedRefund->amount
            ) {
                throw new RuntimeException(
                    'Refund relationships do not match.'
                );
            }

            // Verify Mollie refund ID or the original reference.
            if ($lockedRefund->mollie_refund_id) {
                if (
                    $lockedRefund->mollie_refund_id
                    !== $remoteRefund->id
                ) {
                    throw new RuntimeException(
                        'The Mollie refund ID does not match.'
                    );
                }
            } else {
                $metadata = (array) ($remoteRefund->metadata ?? []);

                if (
                    ($metadata['refund_reference'] ?? null)
                    !== $lockedRefund->reference
                ) {
                    throw new RuntimeException(
                        'The refund reference does not match.'
                    );
                }
            }

            // Do not overwrite terminal refund statuses.
            if (in_array(
                $lockedRefund->status,
                ['refunded', 'failed', 'canceled'],
                true
            )) {
                return;
            }

            $lockedRefund->mollie_refund_id = $remoteRefund->id;
            $lockedRefund->status = $remoteStatus;

            // Mollie has confirmed the refund.
            if ($remoteStatus === 'refunded') {
                $lockedRefund->refunded_at ??= now();

                $notice->update([
                    'status' => 'closed',
                    'closed_at' => $notice->closed_at ?? now(),
                ]);
            }

            $lockedRefund->save();
        });
    }
}
