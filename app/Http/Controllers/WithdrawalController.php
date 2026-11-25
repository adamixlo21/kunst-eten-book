<?php

namespace App\Http\Controllers;

use App\Mail\WithdrawalConfirmation;
use App\Models\Order;
use App\Models\Withdrawal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Throwable;

class WithdrawalController extends Controller
{
    public function index(Request $request)
    {
        $order = null;

        $email = $request->session()->get(
            'order_access_email'
        );

        $expiresAt = (int) $request->session()->get(
            'order_access_expires_at',
            0
        );

        $orderId = $request->query('order');

        if (
            $email
            && $expiresAt > now()->timestamp
            && is_string($orderId)
            && ctype_digit($orderId)
        ) {
            $order = Order::query()
                ->whereKey($orderId)
                ->whereRaw('LOWER(email) = ?', [$email])
                ->first([
                    'id',
                    'name',
                    'email',
                ]);
        }

        return Inertia::render('withdrawal/index', [
            'order' => $order,
        ])
            ->toResponse($request)
            ->header('Cache-Control', 'no-store, private');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'order_number' => [
                'required',
                'string',
                'max:100',
            ],
            'name' => [
                'required',
                'string',
                'max:255',
            ],
            'email' => [
                'required',
                'email',
                'max:255',
            ],
            'reason' => [
                'nullable',
                'string',
                'max:2000',
            ],
            'confirmed' => [
                'required',
                'accepted',
            ],
        ]);

        $email = Str::lower(trim($validated['email']));

        $orderNumber = ltrim(
            trim($validated['order_number']),
            '#'
        );

        $order = null;

        if (ctype_digit($orderNumber)) {
            $order = Order::query()
                ->whereKey($orderNumber)
                ->whereRaw('LOWER(email) = ?', [$email])
                ->first();
        }

        $withdrawal = Withdrawal::create([
            'order_id' => $order?->id,

            'reference' => 'WD-'.Str::upper(
                    Str::random(12)
                ),

            'order_number' => $validated['order_number'],
            'name' => $validated['name'],
            'email' => $email,

            'quantity' => $order?->quantity,

            'reason' => $validated['reason'] ?? null,

            'status' => 'submitted',
            'submitted_at' => now(),
        ]);

        // The notice is saved even if email delivery fails.
        try {
            Mail::to($withdrawal->email)->send(
                new WithdrawalConfirmation($withdrawal)
            );

            $withdrawal->update([
                'confirmation_email_sent_at' => now(),
            ]);
        } catch (Throwable $exception) {
            report($exception);
        }

        return redirect()
            ->route('withdrawal.confirmation')
            ->with('withdrawal_reference', $withdrawal->reference);
    }

    public function confirmation(Request $request)
    {
        $reference = $request->session()->get(
            'withdrawal_reference'
        );

        if (!$reference) {
            return redirect()->route('withdrawal.index');
        }

        return Inertia::render('withdrawal/confirmation', [
            'reference' => $reference,
        ])
            ->toResponse($request)
            ->header('Cache-Control', 'no-store, private');
    }

    public function form()
    {
        return Inertia::render('withdrawal/form');
    }
}
