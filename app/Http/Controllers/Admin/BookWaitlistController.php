<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Jobs\SendBookLaunchEmail;
use App\Mail\BookLaunchAnnouncement;
use App\Models\BookWaitlist;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class BookWaitlistController extends Controller
{
    public function index(Request $request): Response
    {
        $subscribers = BookWaitlist::query()
            ->when(
                $request->query('search'),
                fn ($query) => $query->where(
                    'email',
                    'like',
                    '%' . $request->query('search') . '%'
                )
            )
            ->latest()
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('admin/book-waitlist', [
            'subscribers' => $subscribers,

            'stats' => [
                'total' => BookWaitlist::count(),

                'active' => BookWaitlist::whereNull(
                    'unsubscribed_at'
                )->count(),

                'notified' => BookWaitlist::whereNotNull(
                    'notified_at'
                )->count(),

                'unsubscribed' => BookWaitlist::whereNotNull(
                    'unsubscribed_at'
                )->count(),
            ],

            'filters' => $request->only('search'),
        ]);
    }

    private function validateMessage(Request $request): array
    {
        return $request->validate([
            'subject' => ['required', 'string', 'max:200'],
            'message' => ['required', 'string', 'max:5000'],
        ]);
    }

    /**
     * Send a test only to the logged-in admin.
     */
    public function sendTest(Request $request): RedirectResponse
    {
        $data = $this->validateMessage($request);

        try {
            Mail::to($request->user()->email)->send(
                new BookLaunchAnnouncement(
                    $data['subject'],
                    $data['message'],
                    null,
                )
            );
        } catch (Throwable $exception) {
            Log::error('Waitlist test email failed', [
                'error' => $exception->getMessage(),
            ]);

            return back()->withErrors([
                'email' => 'The test email could not be sent.',
            ]);
        }

        return back()->with(
            'success',
            'Test email submitted successfully.'
        );
    }

    /**
     * Queue one subscriber's launch email.
     */
    public function sendOne(
        Request $request,
        BookWaitlist $subscriber
    ): RedirectResponse {
        $data = $this->validateMessage($request);

        if (
            $subscriber->unsubscribed_at !== null ||
            $subscriber->notified_at !== null
        ) {
            return back()->withErrors([
                'email' => 'This subscriber is not eligible.',
            ]);
        }

        $claimed = BookWaitlist::whereKey($subscriber->id)
            ->whereNull('unsubscribed_at')
            ->whereNull('notified_at')
            ->whereNull('notification_queued_at')
            ->update([
                'notification_queued_at' => now(),
            ]);

        if (!$claimed) {
            return back()->withErrors([
                'email' => 'This email is already queued.',
            ]);
        }

        try {
            SendBookLaunchEmail::dispatch(
                $subscriber->id,
                $data['subject'],
                $data['message'],
            );
        } catch (Throwable $exception) {
            $subscriber->update([
                'notification_queued_at' => null,
            ]);

            Log::error('Failed to queue subscriber email', [
                'subscriber_id' => $subscriber->id,
                'error' => $exception->getMessage(),
            ]);

            return back()->withErrors([
                'email' => 'Could not queue the email.',
            ]);
        }

        return back()->with(
            'success',
            'Subscriber email queued.'
        );
    }

    /**
     * Queue emails for every eligible subscriber.
     */
    public function sendAll(Request $request): RedirectResponse
    {
        $data = $this->validateMessage($request);

        $queued = 0;

        BookWaitlist::query()
            ->whereNull('unsubscribed_at')
            ->whereNull('notified_at')
            ->whereNull('notification_queued_at')
            ->orderBy('id')
            ->chunkById(100, function ($subscribers) use (
                $data,
                &$queued
            ) {
                foreach ($subscribers as $subscriber) {
                    $claimed = BookWaitlist::whereKey($subscriber->id)
                        ->whereNull('unsubscribed_at')
                        ->whereNull('notified_at')
                        ->whereNull('notification_queued_at')
                        ->update([
                            'notification_queued_at' => now(),
                        ]);

                    if (!$claimed) {
                        continue;
                    }

                    try {
                        SendBookLaunchEmail::dispatch(
                            $subscriber->id,
                            $data['subject'],
                            $data['message'],
                        );

                        $queued++;
                    } catch (Throwable $exception) {
                        BookWaitlist::whereKey($subscriber->id)
                            ->whereNull('notified_at')
                            ->update([
                                'notification_queued_at' => null,
                            ]);

                        Log::error('Failed to queue launch email', [
                            'subscriber_id' => $subscriber->id,
                            'error' => $exception->getMessage(),
                        ]);
                    }
                }
            });

        return back()->with(
            'success',
            "{$queued} launch emails queued."
        );
    }
}
