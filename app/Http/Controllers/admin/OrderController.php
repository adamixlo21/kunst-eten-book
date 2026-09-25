<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/orders/index', [
            'orders' => Order::latest()->get(),
        ]);
    }

    public function show(Order $order)
    {
        return Inertia::render('admin/orders/show', [
            'order' => $order,
        ]);
    }

    public function updateStatus(Request $request, Order $order)
    {
        $validated = $request->validate([
            'status' => [
                'required',
                'in:pending,paid,processing,shipped,cancelled',
            ],
        ]);

        $order->update([
            'status' => $validated['status'],
        ]);

        return back();
    }
}
