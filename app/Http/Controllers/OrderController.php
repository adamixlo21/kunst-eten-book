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

    public const BOOK_PRICE = 249.99;
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

        $validated['email'] = mb_strtolower(
            trim($validated['email'])
        );

        $price = self::BOOK_PRICE;

        $total = $price * $validated['quantity'];

        $order = Order::create([
            ...$validated,
            'total_price' => $total,
            'status' => 'pending',
        ]);

        // Remember which orders belong to this checkout session.
        $checkoutOrders = $request->session()->get(
            'checkout_order_ids',
            []
        );

        $checkoutOrders[] = $order->id;

        $request->session()->put(
            'checkout_order_ids',
            array_values(array_unique($checkoutOrders))
        );

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

    public function paymentReturn(Request $request, Order $order)
    {
        $checkoutOrders = $request->session()->get(
            'checkout_order_ids',
            []
        );

        // Only allow access to orders created in this session.
        if (!in_array($order->id, $checkoutOrders, true)) {
            return redirect()
                ->route('orders.index')
                ->with(
                    'error',
                    'Please use your email address to securely access your order.'
                );
        }

        if (!$order->mollie_payment_id) {
            return redirect()
                ->route('checkout.success', [
                    'order' => $order->id,
                ])
                ->with('error', 'No payment was found.');
        }

        try {
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
                ->route('checkout.success', [
                    'order' => $order->id,
                ])
                ->with(
                    'error',
                    'The payment has not yet been completed.'
                );

        } catch (Throwable $exception) {
            Log::error('Payment verification failed', [
                'order_id' => $order->id,
                'error' => $exception->getMessage(),
            ]);

            return redirect()
                ->route('checkout.success', [
                    'order' => $order->id,
                ])
                ->with(
                    'error',
                    'We could not verify your payment at this time. Please check My Orders later.'
                );
        }
    }

    public function checkoutSuccess(Request $request, Order $order)
    {
        $checkoutOrders = $request->session()->get(
            'checkout_order_ids',
            []
        );

        if (!in_array($order->id, $checkoutOrders, true)) {
            return redirect()
                ->route('orders.index')
                ->with(
                    'error',
                    'Please use your email address to securely access your order.'
                );
        }

        return Inertia::render('checkout-success', [
            'order' => [
                'id' => $order->id,
                'name' => $order->name,
                'quantity' => $order->quantity,
                'total_price' => $order->total_price,
                'status' => $order->status,
            ],
        ])
            ->toResponse($request)
            ->header('Cache-Control', 'no-store, private')
            ->header('Referrer-Policy', 'no-referrer');
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
