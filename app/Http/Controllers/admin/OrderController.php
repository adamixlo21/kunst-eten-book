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
        ]);

        $newStatus = $validated['fulfillment_status'];

        // Lock the order while checking and updating its status.
        // Do not hold the database lock while calling Resend.
        $shouldSendEmail = DB::transaction(function () use (
            $order,
            $newStatus
        ) {
            $lockedOrder = Order::query()
                ->whereKey($order->id)
                ->lockForUpdate()
                ->firstOrFail();

            if ($lockedOrder->status !== 'paid') {
                throw \Illuminate\Validation\ValidationException::withMessages([
                    'fulfillment_status' =>
                        'Only paid orders can be fulfilled.',
                ]);
            }

            $lockedOrder->fulfillment_status = $newStatus;

            $shouldSend =
                $newStatus === 'shipped'
                && $lockedOrder->shipping_email_status === 'pending'
                && $lockedOrder->shipping_email_sent_at === null;

            if ($shouldSend) {
                // Claim the email before attempting delivery.
                $lockedOrder->shipping_email_status = 'sending';
            }

            $lockedOrder->save();

            return $shouldSend;
        });

        if (!$shouldSendEmail) {
            return back()->with(
                'success',
                'Order fulfillment updated successfully.'
            );
        }

        // The sending state prevents concurrent requests
        // from claiming this email again.
        try {
            $order->refresh();

            Mail::to($order->email)->send(
                new OrderShipped($order)
            );

            $order->update([
                'shipping_email_status' => 'sent',
                'shipping_email_sent_at' => now(),
            ]);
        } catch (\Throwable $e) {
            Log::error('Shipping email delivery uncertain or failed', [
                'order_id' => $order->id,
                'error' => $e->getMessage(),
            ]);

            // Leave status as "sending" rather than automatically retry.
            // Resend might have accepted the email before the error.
            return back()->with(
                'warning',
                'The order was marked as shipped, but email delivery '
                .'could not be confirmed. Check Resend before retrying.'
            );
        }

        return back()->with(
            'success',
            'Order marked as shipped and confirmation email sent.'
        );
    }


}
