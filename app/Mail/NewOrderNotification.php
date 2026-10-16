<?php

namespace App\Mail;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewOrderNotification extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public Order $order
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Paid Order #' . $this->order->id
            . ' | The Taste of Inspiration',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.orders.admin-notification',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
