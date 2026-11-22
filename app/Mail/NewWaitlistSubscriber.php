<?php

namespace App\Mail;

use App\Models\BookWaitlist;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewWaitlistSubscriber extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public BookWaitlist $subscriber
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Book Waitlist Signup | The Taste of Inspiration'
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.waitlist.admin-notification'
        );
    }
}
