<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use App\Models\Order;
use Illuminate\Http\Request;
use Mollie\Laravel\Facades\Mollie;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
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

        $payment = Mollie::api()->payments->create([
            'amount' => [
                'currency' => 'EUR',
                'value' => number_format($total, 2, '.', ''),
            ],

            'description' => 'Kunst Eten bestelling #' . $order->id,

            'redirectUrl' => route('payment.return', [
                'order' => $order->id,
            ]),


            'metadata' => [
                'order_id' => $order->id,
            ],
        ]);
        if (app()->environment('production')) {
            $payment['webhookUrl'] = route('mollie.webhook');
        }
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
                ->with('error', 'Geen betaling gevonden.');
        }

        $payment = Mollie::api()->payments->get(
            $order->mollie_payment_id
        );

        if ($payment->isPaid()) {
            $order->update([
                'status' => 'paid',
            ]);

            return redirect()->route('checkout.success', [
                'order' => $order->id,
            ]);
        }

        return redirect()
            ->route('checkout.success')
            ->with('error', 'De betaling is nog niet voltooid.');
    }

    public function webhook(Request $request)
    {
        $paymentId = $request->input('id');

        if (!$paymentId) {
            return response()->noContent();
        }

        $payment = Mollie::api()->payments->get($paymentId);

        $order = Order::where(
            'mollie_payment_id',
            $payment->id
        )->first();

        if (!$order) {
            return response()->noContent();
        }

        if ($payment->isPaid()) {
            $order->update([
                'status' => 'paid',
            ]);
        }

        return response()->noContent();
    }
}
