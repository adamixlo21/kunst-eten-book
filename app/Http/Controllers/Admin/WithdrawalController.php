<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Withdrawal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class WithdrawalController extends Controller
{
    public function index(Request $request): Response
    {
        $filters = $request->validate([
            'search' => ['nullable', 'string', 'max:255'],
            'status' => [
                'nullable',
                Rule::in([
                    'submitted',
                    'awaiting_return',
                    'return_received',
                    'refund_pending',
                    'closed',
                ]),
            ],
        ]);

        $search = $filters['search'] ?? '';
        $status = $filters['status'] ?? '';

        $withdrawals = Withdrawal::query()
            ->with('order:id,name,email,status,total_price')
            ->when($search !== '', function ($query) use ($search) {
                $query->where(function ($query) use ($search) {
                    $query
                        ->where('reference', 'like', "%{$search}%")
                        ->orWhere('order_number', 'like', "%{$search}%")
                        ->orWhere('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%");
                });
            })
            ->when($status !== '', function ($query) use ($status) {
                $query->where('status', $status);
            })
            ->latest('submitted_at')
            ->paginate(15)
            ->withQueryString();

        $stats = Withdrawal::query()
            ->selectRaw('status, COUNT(*) as total')
            ->groupBy('status')
            ->pluck('total', 'status');

        return Inertia::render('admin/withdrawals/index', [
            'withdrawals' => $withdrawals,
            'filters' => [
                'search' => $search,
                'status' => $status,
            ],
            'stats' => $stats,
        ]);
    }

    public function show(Withdrawal $withdrawal): Response
    {
        $withdrawal->load(['order', 'refunds']);

        return Inertia::render('admin/withdrawals/show', [
            'withdrawal' => $withdrawal,
        ]);
    }

    public function linkOrder(
        Request $request,
        Withdrawal $withdrawal
    ) {
        $validated = $request->validate([
            'order_id' => ['required', 'integer', 'exists:orders,id'],
        ]);

        DB::transaction(function () use ($withdrawal, $validated) {
            $order = Order::query()
                ->whereKey($validated['order_id'])
                ->lockForUpdate()
                ->firstOrFail();

            $notice = Withdrawal::query()
                ->whereKey($withdrawal->id)
                ->lockForUpdate()
                ->firstOrFail();

            if (
                $notice->verified_at
                || $notice->status !== 'submitted'
                || $notice->refunds()->exists()
            ) {
                throw ValidationException::withMessages([
                    'order_id' => 'This withdrawal cannot be reassigned.',
                ]);
            }

            $notice->update([
                'order_id' => $order->id,
                'quantity' => $order->quantity,
            ]);
        });

        return back()->with('success', 'Order linked successfully.');
    }

    public function verify(
        Request $request,
        Withdrawal $withdrawal
    ) {
        $request->validate([
            'confirmed' => ['required', 'accepted'],
        ]);

        $orderId = $withdrawal->order_id;

        if (!$orderId) {
            throw ValidationException::withMessages([
                'confirmed' => 'Link an order before verification.',
            ]);
        }

        DB::transaction(function () use ($request, $withdrawal, $orderId) {
            $order = Order::query()
                ->whereKey($orderId)
                ->lockForUpdate()
                ->firstOrFail();

            $notice = Withdrawal::query()
                ->whereKey($withdrawal->id)
                ->lockForUpdate()
                ->firstOrFail();

            if ($notice->verified_at) {
                return;
            }

            if (
                (int) $notice->order_id !== (int) $order->id
                || $notice->status !== 'submitted'
            ) {
                throw ValidationException::withMessages([
                    'confirmed' => 'Review the associated order again.',
                ]);
            }

            $duplicate = Withdrawal::query()
                ->where('order_id', $order->id)
                ->where('id', '!=', $notice->id)
                ->whereNotNull('verified_at')
                ->exists();

            if ($duplicate) {
                throw ValidationException::withMessages([
                    'confirmed' => 'Another verified withdrawal exists for this order. Review the original notice.',
                ]);
            }

            $notice->update([
                'verified_at' => now(),
                'verified_by' => $request->user()->id,
            ]);
        });

        return back()->with('success', 'Withdrawal verified.');
    }

    public function updateStatus(
        Request $request,
        Withdrawal $withdrawal
    ) {
        $validated = $request->validate([
            'status' => [
                'required',
                Rule::in([
                    'awaiting_return',
                    'return_received',
                    'refund_pending',
                ]),
            ],
        ]);

        $orderId = $withdrawal->order_id;

        if (!$orderId) {
            throw ValidationException::withMessages([
                'status' => 'An associated order is required.',
            ]);
        }

        DB::transaction(function () use ($withdrawal, $validated, $orderId) {
            $order = Order::query()
                ->whereKey($orderId)
                ->lockForUpdate()
                ->firstOrFail();

            $notice = Withdrawal::query()
                ->whereKey($withdrawal->id)
                ->lockForUpdate()
                ->firstOrFail();

            if (
                !$notice->verified_at
                || (int) $notice->order_id !== (int) $order->id
            ) {
                throw ValidationException::withMessages([
                    'status' => 'Verify the associated order first.',
                ]);
            }

            $newStatus = $validated['status'];

            if ($notice->status === $newStatus) {
                return;
            }

            $transitions = [
                'submitted' => [
                    'awaiting_return',
                    'return_received',
                    'refund_pending',
                ],
                'awaiting_return' => [
                    'return_received',
                    'refund_pending',
                ],
                'return_received' => ['refund_pending'],
                'refund_pending' => [],
                'closed' => [],
            ];

            if (!in_array(
                $newStatus,
                $transitions[$notice->status] ?? [],
                true
            )) {
                throw ValidationException::withMessages([
                    'status' => 'This status change is not allowed.',
                ]);
            }

            if ($newStatus === 'return_received') {
                $notice->return_received_at ??= now();
            }

            if ($newStatus === 'refund_pending') {
                if ($order->status !== 'paid') {
                    throw ValidationException::withMessages([
                        'status' => 'The order must have a confirmed payment.',
                    ]);
                }

                $requiresReturn = $order->shipped_at !== null
                    || in_array(
                        $order->fulfillment_status,
                        ['shipped', 'completed'],
                        true
                    );

                if (
                    $requiresReturn
                    && !$notice->return_received_at
                    && !$notice->return_evidence_received_at
                ) {
                    throw ValidationException::withMessages([
                        'status' => 'Register the return or evidence of return first.',
                    ]);
                }
            }

            $notice->status = $newStatus;
            $notice->save();
        });

        return back()->with('success', 'Withdrawal status updated.');
    }

    public function registerEvidence(
        Request $request,
        Withdrawal $withdrawal
    ) {
        $validated = $request->validate([
            'evidence_notes' => ['required', 'string', 'max:2000'],
        ]);

        DB::transaction(function () use ($withdrawal, $validated) {
            $notice = Withdrawal::query()
                ->whereKey($withdrawal->id)
                ->lockForUpdate()
                ->firstOrFail();

            if (!$notice->verified_at || $notice->status === 'closed') {
                throw ValidationException::withMessages([
                    'evidence_notes' => 'This withdrawal cannot be updated.',
                ]);
            }

            $notice->return_evidence_received_at ??= now();

            $notes = trim(
                ($notice->admin_notes ?? '')
                . "\n\nReturn evidence: "
                . $validated['evidence_notes']
            );

            if (mb_strlen($notes) > 10000) {
                throw ValidationException::withMessages([
                    'evidence_notes' => 'Internal notes limit exceeded.',
                ]);
            }

            $notice->admin_notes = $notes;
            $notice->save();
        });

        return back()->with('success', 'Return evidence recorded.');
    }

    public function updateNotes(
        Request $request,
        Withdrawal $withdrawal
    ) {
        $validated = $request->validate([
            'admin_notes' => ['nullable', 'string', 'max:10000'],
        ]);

        $withdrawal->update([
            'admin_notes' => $validated['admin_notes'] ?? null,
        ]);

        return back()->with('success', 'Internal notes saved.');
    }
}
