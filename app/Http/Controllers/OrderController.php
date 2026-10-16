<?php

namespace App\Http\Controllers;

use App\Mail\NewOrderNotification;
use App\Mail\OrderConfirmation;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Mollie\Laravel\Facades\Mollie;
use Throwable;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
            'address' => ['required', 'string', 'max:255'],
            'postal_code' => ['required', 'string', 'max:20'],
            'city' => ['required', 'string', 'max:100'],
            'quantity' => ['required', 'integer', 'min:1'],
        ]);

        $price = 249.99;
        $total = $price * $validated['quantity'];

        $order = Order::create([
            ...$validated,
            'total_price' => $total,
            'status' => 'pending',
        ]);

        $paymentData = [
            'amount' => [
                'currency' => 'EUR',
                'value' => number_format($total, 2, '.', ''),
            ],

            'description' => 'The Taste of Inspiration - Order #' . $order->id,

            'redirectUrl' => route('payment.return', [
                'order' => $order->id,
            ]),

            'metadata' => [
                'order_id' => $order->id,
            ],
        ];

        if (app()->environment('production')) {
            $paymentData['webhookUrl'] = route('mollie.webhook');
        }

        $payment = Mollie::api()->payments->create($paymentData);

        $order->update([
            'mollie_payment_id' => $payment->id,
        ]);

        return Inertia::location($payment->getCheckoutUrl());
    }

    public function paymentReturn(Order $order)
    {
        if (!$order->mollie_payment_id) {
            return redirect()
                ->route('checkout.success')
                ->with('error', 'No payment was found.');
        }

        $payment = Mollie::api()->payments->get(
            $order->mollie_payment_id
        );

        if ($payment->isPaid()) {
            $this->processPaidOrder($order);

            return redirect()->route('checkout.success', [
                'order' => $order->id,
            ]);
        }

        return redirect()
            ->route('checkout.success')
            ->with('error', 'The payment has not yet been completed.');
    }

    public function webhook(Request $request)
    {
        $paymentId = $request->input('id');

        if (!$paymentId) {
            return response()->noContent();
        }

        // Always verify payment status directly with Mollie.
        $payment = Mollie::api()->payments->get($paymentId);

        $order = Order::where(
            'mollie_payment_id',
            $payment->id
        )->first();

        if (!$order) {
            return response()->noContent();
        }

        if ($payment->isPaid()) {
            $this->processPaidOrder($order);
        }

        return response()->noContent();
    }

    /**
     * Process a confirmed payment and send both notifications.
     */
    private function processPaidOrder(Order $order): void
    {
        DB::transaction(function () use ($order) {
            // Prevent the webhook and return request from
            // processing this order at the same time.
            $lockedOrder = Order::whereKey($order->id)
                ->lockForUpdate()
                ->firstOrFail();

            if ($lockedOrder->status !== 'paid') {
                $lockedOrder->update([
                    'status' => 'paid',
                ]);
            }

            // 1. Send confirmation to the customer.
            if (!$lockedOrder->confirmation_email_sent_at) {
                try {
                    Mail::to($lockedOrder->email)->send(
                        new OrderConfirmation($lockedOrder)
                    );

                    $lockedOrder->update([
                        'confirmation_email_sent_at' => now(),
                    ]);
                } catch (Throwable $exception) {
                    Log::error('Customer order confirmation failed', [
                        'order_id' => $lockedOrder->id,
                        'error' => $exception->getMessage(),
                    ]);
                }
            }

            // 2. Send a new order notification to the admin.
            if (!$lockedOrder->admin_notification_sent_at) {
                $adminEmail = config('mail.order_notification_email');

                if (!$adminEmail) {
                    Log::error('Order notification email not configured', [
                        'order_id' => $lockedOrder->id,
                    ]);
                } else {
                    try {
                        Mail::to($adminEmail)->send(
                            new NewOrderNotification($lockedOrder)
                        );

                        $lockedOrder->update([
                            'admin_notification_sent_at' => now(),
                        ]);
                    } catch (Throwable $exception) {
                        Log::error('Admin order notification failed', [
                            'order_id' => $lockedOrder->id,
                            'error' => $exception->getMessage(),
                        ]);
                    }
                }
            }
        });
    }
}
