<?php

namespace App\Http\Controllers;

use App\Mail\BookWaitlistConfirmation;
use App\Models\BookWaitlist;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

use App\Mail\NewWaitlistSubscriber;


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

        // Limit signups to 10 attempts per minute per IP.
        $key = 'book-waitlist:' . sha1($request->ip() ?? 'unknown');

        if (RateLimiter::tooManyAttempts($key, 10)) {
            $seconds = RateLimiter::availableIn($key);
            $minutes = max(1, (int) ceil($seconds / 60));

            throw ValidationException::withMessages([
                'email' => "You've reached the signup limit for now. Please try again in {$minutes} minute(s).",
            ]);
        }

        RateLimiter::hit($key, 60);

        // Validate the signup.
        $validated = $request->validate([
            'email' => ['required', 'email', 'max:255'],
            'consent' => ['required', 'accepted'],
            'website' => ['nullable', 'string', 'max:0'],
        ]);

        $email = Str::lower(trim($validated['email']));

        // Create a subscriber only if the email doesn't exist.
        $subscriber = BookWaitlist::firstOrCreate(
            ['email' => $email],
            [
                'consented_at' => now(),
                'unsubscribe_token' => Str::random(48),
            ]
        );

        $shouldSendConfirmation = $subscriber->wasRecentlyCreated;

        // Reactivate someone who explicitly joins again.
        if ($subscriber->unsubscribed_at !== null) {
            $subscriber->update([
                'unsubscribed_at' => null,
                'consented_at' => now(),
                'notified_at' => null,
                'notification_queued_at' => null,
            ]);

            $shouldSendConfirmation = true;
        }

        // Existing subscribers might not have a token.
        if (!$subscriber->unsubscribe_token) {
            $subscriber->update([
                'unsubscribe_token' => Str::random(48),
            ]);
        }

        // Send confirmation for new or reactivated subscribers.

        if ($shouldSendConfirmation) {

            // 1. Confirmation email to the subscriber.
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

            // 2. Notification email to the website owner.
            try {
                $adminEmail = config('mail.waitlist_notification_email');

                if ($adminEmail) {
                    Mail::to($adminEmail)->send(
                        new NewWaitlistSubscriber($subscriber)
                    );
                }
            } catch (Throwable $exception) {
                Log::error('Admin waitlist notification failed', [
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
