<?php

namespace App\Http\Controllers;

use App\Models\Painting;
use Illuminate\Http\Request;

class BidController extends Controller
{
    public function store(Request $request, Painting $painting)
    {
        if (! $painting->bidding_open) {
            return back()->withErrors([
                'amount' => 'Bieden op dit kunstwerk is gesloten.',
            ]);
        }

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
            'amount' => [
                'required',
                'numeric',
                'min:' . $painting->starting_price,
            ],
        ], [
            'name.required' => 'Vul je naam in.',
            'email.required' => 'Vul je e-mailadres in.',
            'email.email' => 'Vul een geldig e-mailadres in.',
            'amount.required' => 'Vul een bedrag in.',
            'amount.numeric' => 'Vul een geldig bedrag in.',
            'amount.min' => 'Je bod moet minimaal €' .
                number_format((float) $painting->starting_price, 0, ',', '.') .
                ' zijn.',
        ]);

        $painting->bids()->create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'amount' => $validated['amount'],
        ]);

        return back()->with(
            'success',
            'Je privébod is ontvangen.'
        );
    }
}
