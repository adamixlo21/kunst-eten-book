<?php

namespace App\Http\Controllers;

use App\Models\Painting;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Throwable;

class BidController extends Controller
{
    public function store(Request $request, Painting $painting)
    {
        // 1. Check if bidding is open
        if (! $painting->bidding_open) {
            return back()->withErrors([
                'amount' => 'Bidding for this artwork is currently closed.',
            ]);
        }

        // 2. Validate the offer
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
                ) . '.',
        ]);

        // 3. Save the bid to the database
        $bid = $painting->bids()->create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'] ?? null,
            'amount' => $validated['amount'],
        ]);

        // Format the amount
        $amount = '€' . number_format(
                (float) $bid->amount,
                2,
                '.',
                ','
            );

        // Data shared with both email templates
        $emailData = [
            'bid' => $bid,
            'painting' => $painting,
            'amount' => $amount,
        ];

        // 4. Send the admin notification
        $adminEmail = config('mail.contact_email');

        if ($adminEmail) {
            try {
                Mail::send(
                    'emails.bids.admin',
                    $emailData,
                    function (Message $message) use (
                        $adminEmail,
                        $painting
                    ) {
                        $message
                            ->to($adminEmail)
                            ->subject(
                                'New Artwork Offer - ' . $painting->title
                            );
                    }
                );

            } catch (Throwable $exception) {
                Log::error('Admin bid email failed', [
                    'bid_id' => $bid->id,
                    'error' => $exception->getMessage(),
                ]);
            }
        } else {
            Log::warning('Bid notification email not configured', [
                'bid_id' => $bid->id,
            ]);
        }

        // 5. Send the customer confirmation
        try {
            Mail::send(
                'emails.bids.customer',
                $emailData,
                function (Message $message) use (
                    $bid,
                    $painting
                ) {
                    $message
                        ->to($bid->email)
                        ->subject(
                            'Your Private Offer - ' . $painting->title
                        );
                }
            );

        } catch (Throwable $exception) {
            Log::error('Customer bid email failed', [
                'bid_id' => $bid->id,
                'error' => $exception->getMessage(),
            ]);
        }

        // 6. Return success message
        return back()->with(
            'success',
            'Your private offer has been received.'
        );
    }
}
