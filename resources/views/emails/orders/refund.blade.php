<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Your refund is complete</title>
</head>

<body style="margin:0;padding:0;background-color:#f7f3ec;font-family:Arial,sans-serif;color:#25221f;">

<table role="presentation" width="100%" cellspacing="0" cellpadding="0">
    <tr>
        <td align="center" style="padding:40px 16px;">

            <table role="presentation"
                   width="100%"
                   cellspacing="0"
                   cellpadding="0"
                   style="max-width:600px;background-color:#ffffff;border:1px solid #e5ddd1;">

                <!-- Header -->
                <tr>
                    <td align="center" style="padding:35px 24px;border-bottom:1px solid #e5ddd1;">

                        <p style="margin:0;font-size:12px;letter-spacing:3px;color:#70512f;">
                            THE TASTE OF INSPIRATION
                        </p>

                    </td>
                </tr>

                <!-- Content -->
                <tr>
                    <td style="padding:40px 30px;">

                        <p style="margin:0 0 15px;font-size:11px;letter-spacing:2px;color:#70512f;">
                            REFUND CONFIRMATION
                        </p>

                        <h1 style="margin:0 0 25px;font-family:Georgia,serif;font-size:34px;font-weight:normal;line-height:1.2;">
                            Your refund is complete.
                        </h1>

                        <p style="font-size:15px;line-height:1.8;">
                            Dear {{ $refund->order->name }},
                        </p>

                        <p style="font-size:15px;line-height:1.8;color:#746b61;">
                            We have successfully processed your refund.
                            The amount has been refunded through your
                            original payment method.
                        </p>

                        <!-- Refund details -->
                        <table role="presentation"
                               width="100%"
                               cellspacing="0"
                               cellpadding="0"
                               style="margin:30px 0;background-color:#f7f3ec;">

                            <tr>
                                <td style="padding:20px;">

                                    <p style="margin:0 0 10px;font-size:11px;letter-spacing:2px;color:#70512f;">
                                        REFUND AMOUNT
                                    </p>

                                    <p style="margin:0;font-family:Georgia,serif;font-size:36px;">
                                        €{{ number_format((float) $refund->amount, 2, '.', ',') }}
                                    </p>

                                </td>
                            </tr>

                            <tr>
                                <td style="padding:0 20px 20px;">

                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">

                                        <tr>
                                            <td style="padding:12px 0;border-top:1px solid #e5ddd1;font-size:14px;color:#746b61;">
                                                Order reference
                                            </td>

                                            <td align="right" style="padding:12px 0;border-top:1px solid #e5ddd1;font-size:14px;">
                                                #{{ $refund->order_id }}
                                            </td>
                                        </tr>

                                        @if($refund->withdrawal)
                                            <tr>
                                                <td style="padding:12px 0;border-top:1px solid #e5ddd1;font-size:14px;color:#746b61;">
                                                    Withdrawal reference
                                                </td>

                                                <td align="right" style="padding:12px 0;border-top:1px solid #e5ddd1;font-size:13px;">
                                                    {{ $refund->withdrawal->reference }}
                                                </td>
                                            </tr>
                                        @endif

                                        <tr>
                                            <td style="padding:12px 0;border-top:1px solid #e5ddd1;font-size:14px;color:#746b61;">
                                                Refund date
                                            </td>

                                            <td align="right" style="padding:12px 0;border-top:1px solid #e5ddd1;font-size:14px;">
                                                {{ $refund->refunded_at?->format('d M Y') }}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding:12px 0;border-top:1px solid #e5ddd1;font-size:14px;color:#746b61;">
                                                Status
                                            </td>

                                            <td align="right" style="padding:12px 0;border-top:1px solid #e5ddd1;font-size:14px;color:#426340;font-weight:bold;">
                                                Refunded
                                            </td>
                                        </tr>

                                    </table>

                                </td>
                            </tr>

                        </table>

                        <p style="font-size:14px;line-height:1.8;color:#746b61;">
                            Depending on your payment provider, it may
                            take a few business days for the refund to
                            appear in your account.
                        </p>

                        <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td align="center" style="padding:25px 0;">

                                    <a href="{{ route('orders.index') }}"
                                       style="display:inline-block;background-color:#25221f;color:#ffffff;text-decoration:none;padding:17px 35px;font-size:14px;">
                                        View My Orders
                                    </a>

                                </td>
                            </tr>
                        </table>

                        <p style="font-size:14px;line-height:1.8;color:#746b61;">
                            Thank you for your patience.
                        </p>

                        <p style="font-size:14px;line-height:1.8;">
                            Kind regards,<br>
                            The Taste of Inspiration
                        </p>

                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td align="center" style="padding:25px;background-color:#f7f3ec;border-top:1px solid #e5ddd1;">

                        <p style="margin:0;font-size:12px;color:#746b61;">
                            The Taste of Inspiration
                        </p>

                        <p style="margin:10px 0 0;font-size:12px;">
                            <a href="{{ config('app.url') }}"
                               style="color:#70512f;text-decoration:none;">
                                {{ config('app.url') }}
                            </a>
                        </p>

                    </td>
                </tr>

            </table>

        </td>
    </tr>
</table>

</body>
</html>
