<?php

namespace App\Services;

use App\Mail\RefundConfirmation;
use App\Models\Refund;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Throwable;

class RefundNotificationService
{
    public function sendConfirmation(Refund $refund): bool
    {
        // Atomically claim the email before sending.
        $claimed = Refund::query()
            ->whereKey($refund->id)
            ->where('status', 'refunded')
            ->whereNotNull('refunded_at')
            ->whereNull('confirmation_email_sent_at')
            ->where('confirmation_email_status', 'pending')
            ->update([
                'confirmation_email_status' => 'sending',
            ]);

        if (!$claimed) {
            return false;
        }

        try {
            $refund->refresh();
            $refund->loadMissing(['order', 'withdrawal']);

            Mail::to($refund->order->email)->send(
                new RefundConfirmation($refund)
            );

            $refund->update([
                'confirmation_email_status' => 'sent',
                'confirmation_email_sent_at' => now(),
            ]);

            return true;

        } catch (Throwable $exception) {
            // Delivery may have succeeded before an error occurred.
            // Do not automatically send a potentially duplicate email.
            Refund::query()
                ->whereKey($refund->id)
                ->where('confirmation_email_status', 'sending')
                ->update([
                    'confirmation_email_status' => 'uncertain',
                ]);

            Log::error('Refund confirmation email requires review', [
                'refund_id' => $refund->id,
                'order_id' => $refund->order_id,
                'error' => $exception->getMessage(),
            ]);

            return false;
        }
    }
}
