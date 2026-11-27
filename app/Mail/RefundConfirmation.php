<?php

namespace App\Mail;

use App\Models\Refund;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class RefundConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public Refund $refund
    ) {
        $this->refund->loadMissing(['order', 'withdrawal']);
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Your refund is complete | The Taste of Inspiration',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.orders.refund',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
