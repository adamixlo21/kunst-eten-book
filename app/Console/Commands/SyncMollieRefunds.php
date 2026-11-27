<?php

namespace App\Console\Commands;

use App\Models\Refund;
use App\Services\RefundSynchronizationService;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Throwable;

class SyncMollieRefunds extends Command
{
    protected $signature = 'refunds:sync';

    protected $description =
        'Synchronize unfinished refund statuses with Mollie';

    public function handle(
        RefundSynchronizationService $service
    ): int {
        $checked = 0;
        $updated = 0;
        $completed = 0;
        $unresolved = 0;
        $failed = 0;

        $this->info('Checking unfinished Mollie refunds...');

        Refund::query()
            ->whereNotNull('withdrawal_id')
            ->whereIn('status', [
                'submitting',
                'uncertain',
                'queued',
                'pending',
                'processing',
            ])
            ->with(['order', 'withdrawal'])
            ->chunkById(100, function ($refunds) use (
                $service,
                &$checked,
                &$updated,
                &$completed,
                &$unresolved,
                &$failed
            ) {
                foreach ($refunds as $refund) {
                    $checked++;

                    try {
                        $previousStatus = $refund->status;

                        $found = $service->synchronize($refund);

                        if (!$found) {
                            $unresolved++;

                            $this->warn(
                                "Refund #{$refund->id}: "
                                . 'No matching Mollie refund found.'
                            );

                            Log::warning(
                                'Mollie refund requires review',
                                [
                                    'refund_id' => $refund->id,
                                    'order_id' => $refund->order_id,
                                    'status' => $refund->status,
                                ]
                            );

                            continue;
                        }

                        $refund->refresh();

                        if ($refund->status !== $previousStatus) {
                            $updated++;

                            $this->info(
                                "Refund #{$refund->id}: "
                                . "{$previousStatus} -> {$refund->status}"
                            );

                            if ($refund->status === 'refunded') {
                                $completed++;
                            }
                        } else {
                            $this->line(
                                "Refund #{$refund->id}: "
                                . "{$refund->status} (unchanged)"
                            );
                        }

                    } catch (Throwable $exception) {
                        $failed++;

                        Log::error(
                            'Automatic refund synchronization failed',
                            [
                                'refund_id' => $refund->id,
                                'order_id' => $refund->order_id,
                                'error' => $exception->getMessage(),
                            ]
                        );

                        $this->error(
                            "Refund #{$refund->id}: Synchronization failed."
                        );
                    }
                }
            });

        $this->newLine();

        $this->table(
            ['Result', 'Total'],
            [
                ['Checked', $checked],
                ['Updated', $updated],
                ['Completed', $completed],
                ['Unresolved', $unresolved],
                ['Errors', $failed],
            ]
        );

        $this->info('Refund synchronization finished.');

        return ($failed > 0 || $unresolved > 0)
            ? self::FAILURE
            : self::SUCCESS;
    }
}
