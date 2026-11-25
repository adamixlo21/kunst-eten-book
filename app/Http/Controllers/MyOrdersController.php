<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MyOrdersController extends Controller
{
    public function index(Request $request)
    {
        $email = $this->verifiedEmail($request);

        if (!$email) {
            return Inertia::render('orders/access')
                ->toResponse($request)
                ->header('Cache-Control', 'no-store, private');
        }

        $orders = Order::query()
            ->whereRaw('LOWER(email) = ?', [$email])
            ->whereNotNull('mollie_payment_id')
            ->latest()
            ->get([
                'id',
                'quantity',
                'total_price',
                'status',
                'fulfillment_status',
                'created_at',
            ]);

        return Inertia::render('orders/index', [
            'email' => $email,
            'orders' => $orders,
        ])
            ->toResponse($request)
            ->header('Cache-Control', 'no-store, private');
    }

    public function show(Request $request, string $order)
    {
        $email = $this->verifiedEmail($request);

        if (!$email) {
            return redirect()
                ->route('orders.index')
                ->with('error', 'Please request a new access link.');
        }

        $customerOrder = Order::query()
            ->whereKey($order)
            ->whereRaw('LOWER(email) = ?', [$email])
            ->whereNotNull('mollie_payment_id')
            ->firstOrFail([
                'id',
                'name',
                'email',
                'address',
                'postal_code',
                'city',
                'quantity',
                'total_price',
                'status',
                'fulfillment_status',
                'shipping_carrier',
                'tracking_number',
                'tracking_url',
                'shipped_at',
                'delivered_at',
                'created_at',
            ]);

        return Inertia::render('orders/show', [
            'order' => $customerOrder,
        ])
            ->toResponse($request)
            ->header('Cache-Control', 'no-store, private');
    }

    private function verifiedEmail(Request $request): ?string
    {
        $email = $request->session()->get('order_access_email');

        $expiresAt = (int) $request->session()->get(
            'order_access_expires_at',
            0
        );

        if (!$email || $expiresAt <= now()->timestamp) {
            $request->session()->forget([
                'order_access_email',
                'order_access_expires_at',
            ]);

            return null;
        }

        return $email;
    }
}
