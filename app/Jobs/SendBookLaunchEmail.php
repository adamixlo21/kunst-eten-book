<?php

namespace App\Jobs;

use App\Mail\BookLaunchAnnouncement;
use App\Models\BookWaitlist;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Throwable;

class SendBookLaunchEmail implements ShouldQueue
{
    use Queueable;

    public int $tries = 3;

    public array $backoff = [60, 300, 900];

    public function __construct(
        public int $subscriberId,
        public string $subjectLine,
        public string $bodyText,
    ) {}

    public function handle(): void
    {
        $subscriber = BookWaitlist::find($this->subscriberId);

        if (!$subscriber) {
            return;
        }

        // Never email someone who has unsubscribed.
        if ($subscriber->unsubscribed_at !== null) {
            $subscriber->update([
                'notification_queued_at' => null,
            ]);

            return;
        }

        // Prevent another send after successful notification.
        if ($subscriber->notified_at !== null) {
            return;
        }

        if (!$subscriber->unsubscribe_token) {
            $subscriber->update([
                'unsubscribe_token' => Str::random(48),
            ]);
        }

        $unsubscribeUrl = route(
            'book-waitlist.unsubscribe',
            ['token' => $subscriber->unsubscribe_token]
        );

        Mail::to($subscriber->email)->send(
            new BookLaunchAnnouncement(
                $this->subjectLine,
                $this->bodyText,
                $unsubscribeUrl,
            )
        );

        $subscriber->update([
            'notified_at' => now(),
            'notification_queued_at' => null,
        ]);
    }

    public function failed(?Throwable $exception): void
    {
        BookWaitlist::whereKey($this->subscriberId)
            ->whereNull('notified_at')
            ->update([
                'notification_queued_at' => null,
            ]);
    }
}
