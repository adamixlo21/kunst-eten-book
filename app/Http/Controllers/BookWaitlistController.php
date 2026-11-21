<?php

namespace App\Http\Controllers;

use App\Mail\BookWaitlistConfirmation;
use App\Models\BookWaitlist;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class BookWaitlistController extends Controller
{
    /**
     * Register an email address for the book waitlist.
     */
    public function store(Request $request): RedirectResponse
    {
        // Honeypot: silently reject automated submissions.
        if ($request->filled('website')) {
            return back()->with(
                'success',
                "You're on the list!"
            );
        }

        $validated = $request->validate([
            'email' => ['required', 'email', 'max:255'],
            'consent' => ['required', 'accepted'],
            'website' => ['nullable', 'string', 'max:0'],
        ]);

        $email = Str::lower(trim($validated['email']));

        $subscriber = BookWaitlist::firstOrCreate(
            ['email' => $email],
            [
                'consented_at' => now(),
                'unsubscribe_token' => Str::random(48),
            ]
        );

        $shouldSendConfirmation = $subscriber->wasRecentlyCreated;

        // Restore a previously unsubscribed subscriber only
        // when they explicitly sign up and consent again.
        if ($subscriber->unsubscribed_at !== null) {
            $subscriber->update([
                'unsubscribed_at' => null,
                'consented_at' => now(),
                'notified_at' => null,
            ]);

            $shouldSendConfirmation = true;
        }

        // Ensure existing subscribers also have an
        // unsubscribe token.
        if (!$subscriber->unsubscribe_token) {
            $subscriber->update([
                'unsubscribe_token' => Str::random(48),
            ]);
        }

        // Send confirmation only for new or reactivated signups.
        if ($shouldSendConfirmation) {
            try {
                Mail::to($subscriber->email)->send(
                    new BookWaitlistConfirmation($subscriber)
                );
            } catch (Throwable $exception) {
                Log::error('Waitlist confirmation failed', [
                    'subscriber_id' => $subscriber->id,
                    'error' => $exception->getMessage(),
                ]);
            }
        }

        return back()->with(
            'success',
            "You're on the list!"
        );
    }

    /**
     * Display the unsubscribe confirmation page.
     *
     * Opening an email link does not immediately
     * unsubscribe the visitor.
     */
    public function unsubscribe(string $token): Response
    {
        $subscriber = BookWaitlist::where(
            'unsubscribe_token',
            $token
        )->firstOrFail();

        return Inertia::render('waitlist-unsubscribe', [
            'token' => $token,
            'unsubscribed' => $subscriber->unsubscribed_at !== null,
        ]);
    }

    /**
     * Confirm an unsubscribe request.
     */
    public function confirmUnsubscribe(string $token): RedirectResponse
    {
        $subscriber = BookWaitlist::where(
            'unsubscribe_token',
            $token
        )->firstOrFail();

        if ($subscriber->unsubscribed_at === null) {
            $subscriber->update([
                'unsubscribed_at' => now(),
            ]);
        }

        return redirect()->route(
            'book-waitlist.unsubscribe',
            ['token' => $token]
        );
    }
}
