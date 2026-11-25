<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;
use App\Mail\OrderShipped;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;



class OrderController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/orders/index', [
            'orders' => Order::query()
                ->latest()
                ->get(),
        ]);
    }

    public function show(Order $order): Response
    {
        return Inertia::render('admin/orders/show', [
            'order' => $order,
        ]);
    }

    /**
     * Legacy payment-status endpoint.
     *
     * Payment statuses must be updated by the payment
     * integration, not manually by administrators.
     */
    public function updateStatus(Request $request, Order $order)
    {
        abort(403, 'Payment status is managed by Mollie.');
    }

    /**
     * Update the progress of fulfilling a paid order.
     */


    public function updateFulfillment(Request $request, Order $order)
    {
        $validated = $request->validate([
            'fulfillment_status' => [
                'required',
                Rule::in([
                    'unfulfilled',
                    'processing',
                    'shipped',
                    'completed',
                ]),
            ],

            'shipping_carrier' => [
                'nullable',
                'string',
                'max:100',
            ],

            'tracking_number' => [
                'nullable',
                'string',
                'max:255',
            ],

            'tracking_url' => [
                'nullable',
                'url:https',
                'max:2048',
            ],
        ]);

        $newStatus = $validated['fulfillment_status'];

        $shouldSendEmail = DB::transaction(function () use (
            $order,
            $validated,
            $newStatus
        ) {
            $lockedOrder = Order::query()
                ->whereKey($order->id)
                ->lockForUpdate()
                ->firstOrFail();

            if ($lockedOrder->status !== 'paid') {
                throw ValidationException::withMessages([
                    'fulfillment_status' =>
                        'Only paid orders can be fulfilled.',
                ]);
            }

            // Prevent accidental backwards status changes.
            $statusOrder = [
                'unfulfilled' => 0,
                'processing' => 1,
                'shipped' => 2,
                'completed' => 3,
            ];

            $currentStatus = $lockedOrder->fulfillment_status
                ?? 'unfulfilled';

            if ($statusOrder[$newStatus] < $statusOrder[$currentStatus]) {
                throw ValidationException::withMessages([
                    'fulfillment_status' =>
                        'Fulfillment cannot be moved backwards.',
                ]);
            }

            if (
                $newStatus === 'completed'
                && !in_array($currentStatus, ['shipped', 'completed'], true)
            ) {
                throw ValidationException::withMessages([
                    'fulfillment_status' =>
                        'The order must be shipped before it can be completed.',
                ]);
            }

            // Save tracking information when provided.
            foreach ([
                         'shipping_carrier',
                         'tracking_number',
                         'tracking_url',
                     ] as $field) {
                if (array_key_exists($field, $validated)) {
                    $lockedOrder->{$field} = $validated[$field];
                }
            }

            $lockedOrder->fulfillment_status = $newStatus;

            // Record the first shipment date.
            if (
                $newStatus === 'shipped'
                && !$lockedOrder->shipped_at
            ) {
                $lockedOrder->shipped_at = now();
            }

            // Record the confirmed delivery date.
            if (
                $newStatus === 'completed'
                && !$lockedOrder->delivered_at
            ) {
                $lockedOrder->delivered_at = now();
            }

            // Claim the shipping email before sending it.
            $shouldSend =
                $newStatus === 'shipped'
                && $lockedOrder->shipping_email_status === 'pending'
                && $lockedOrder->shipping_email_sent_at === null;

            if ($shouldSend) {
                $lockedOrder->shipping_email_status = 'sending';
            }

            $lockedOrder->save();

            return $shouldSend;
        });

        if (!$shouldSendEmail) {
            return back()->with(
                'success',
                'Fulfillment and tracking information updated successfully.'
            );
        }

        // Send the email outside the database transaction.
        try {
            $order->refresh();

            Mail::to($order->email)->send(
                new OrderShipped($order)
            );

            $order->update([
                'shipping_email_status' => 'sent',
                'shipping_email_sent_at' => now(),
            ]);
        } catch (\Throwable $exception) {
            Log::error('Shipping email delivery uncertain or failed', [
                'order_id' => $order->id,
                'error' => $exception->getMessage(),
            ]);

            return back()->with(
                'warning',
                'The order and tracking information were saved, '
                .'but email delivery could not be confirmed. '
                .'Check Resend before retrying.'
            );
        }

        return back()->with(
            'success',
            'Order marked as shipped and confirmation email sent.'
        );
    }

}
