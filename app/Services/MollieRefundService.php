<?php

namespace App\Services;

use App\Models\Order;
use App\Models\Refund;
use Mollie\Laravel\Facades\Mollie;
use RuntimeException;

class MollieRefundService
{
    /**
     * Retrieve the original Mollie payment.
     */
    public function getPayment(Order $order)
    {
        if (!$order->mollie_payment_id) {
            throw new RuntimeException(
                'No Mollie payment is associated with this order.'
            );
        }

        return Mollie::api()->payments->get(
            $order->mollie_payment_id
        );
    }

    /**
     * Verify the original payment before issuing a refund.
     */
    public function validatePayment(Order $order)
    {
        $payment = $this->getPayment($order);

        $paymentMode = $payment->mode instanceof \BackedEnum
            ? $payment->mode->value
            : $payment->mode;

        // Live refunds are disabled during development.
        if ($paymentMode !== 'test') {
            throw new RuntimeException(
                'Live refunds are disabled during development.'
            );
        }

        if (!$payment->isPaid()) {
            throw new RuntimeException(
                'The original payment has not been completed.'
            );
        }

        // Verify payment amount and currency.
        if (
            $payment->amount->currency !== 'EUR'
            || $payment->amount->value !== $order->total_price
        ) {
            throw new RuntimeException(
                'The original payment amount does not match the order.'
            );
        }

        return $payment;
    }

    /**
     * Create a full refund through Mollie.
     */
    public function createRefund(Refund $refund)
    {
        $payment = $this->validatePayment($refund->order);

        // Verify the requested refund amount.
        if (
            $refund->currency !== 'EUR'
            || $refund->amount !== $payment->amount->value
        ) {
            throw new RuntimeException(
                'The refund amount does not match the original payment.'
            );
        }

        // Reject previous active refunds.
        foreach ($payment->refunds() as $existingRefund) {
            $existingStatus =
                $existingRefund->status instanceof \BackedEnum
                    ? $existingRefund->status->value
                    : $existingRefund->status;

            if (!in_array(
                $existingStatus,
                ['failed', 'canceled'],
                true
            )) {
                throw new RuntimeException(
                    'An existing Mollie refund requires review.'
                );
            }
        }

        // Submit refund.
        return $payment->refund([
            'amount' => [
                'currency' => $refund->currency,
                'value' => $refund->amount,
            ],

            'description' => $refund->description,

            'metadata' => [
                'refund_reference' => $refund->reference,
                'order_id' => $refund->order_id,
                'withdrawal_id' => $refund->withdrawal_id,
            ],
        ]);
    }

    /**
     * Find an existing refund in Mollie.
     */
    public function findRefund(Refund $refund)
    {
        $payment = $this->getPayment($refund->order);

        foreach ($payment->refunds() as $remoteRefund) {
            $metadata = (array) ($remoteRefund->metadata ?? []);

            // Match by Mollie refund ID.
            if ($refund->mollie_refund_id) {
                if ($remoteRefund->id === $refund->mollie_refund_id) {
                    return $remoteRefund;
                }

                continue;
            }

            // Recover an uncertain refund using its unique reference.
            if (
                ($metadata['refund_reference'] ?? null)
                === $refund->reference
            ) {
                return $remoteRefund;
            }
        }

        return null;
    }
}
