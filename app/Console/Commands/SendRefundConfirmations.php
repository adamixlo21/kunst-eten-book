<?php

namespace App\Console\Commands;

use App\Models\Refund;
use App\Services\RefundNotificationService;
use Illuminate\Console\Command;

class SendRefundConfirmations extends Command
{
    protected $signature = 'refunds:send-confirmations';

    protected $description =
        'Send confirmation emails for completed refunds';

    public function handle(
        RefundNotificationService $service
    ): int {
        $sent = 0;

        Refund::query()
            ->where('status', 'refunded')
            ->whereNotNull('refunded_at')
            ->whereNull('confirmation_email_sent_at')
            ->where('confirmation_email_status', 'pending')
            ->with(['order', 'withdrawal'])
            ->chunkById(100, function ($refunds) use (
                $service,
                &$sent
            ) {
                foreach ($refunds as $refund) {
                    if ($service->sendConfirmation($refund)) {
                        $sent++;

                        $this->info(
                            "Confirmation sent for refund #{$refund->id}"
                        );
                    }
                }
            });

        $this->info("Refund confirmation emails sent: {$sent}");

        return self::SUCCESS;
    }
}
