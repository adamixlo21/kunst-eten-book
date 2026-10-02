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
                'amount' => 'Bidding for this artwork is currently closed.',
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
            'name.required' => 'Please enter your name.',
            'email.required' => 'Please enter your email address.',
            'email.email' => 'Please enter a valid email address.',
            'amount.required' => 'Please enter your offer amount.',
            'amount.numeric' => 'Please enter a valid amount.',
            'amount.min' => 'Your offer must be at least €' .
                number_format(
                    (float) $painting->starting_price,
                    0,
                    '.',
                    ','
                ) .
                '.',
        ]);

        $painting->bids()->create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'amount' => $validated['amount'],
        ]);

        return back()->with(
            'success',
            'Your private offer has been received.'
        );
    }
}
