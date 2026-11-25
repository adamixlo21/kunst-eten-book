<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OrderAccessLink extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public string $accessUrl
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Access your orders | The Taste of Inspiration',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.order-access-link',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
