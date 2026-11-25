<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Withdrawal received</title>
</head>

<body style="margin:0;padding:0;background:#f7f3ec;color:#25221f;font-family:Arial,sans-serif;">

<table role="presentation" width="100%" cellspacing="0" cellpadding="0">
    <tr>
        <td align="center" style="padding:32px 16px;">

            <table role="presentation"
                   width="100%"
                   cellspacing="0"
                   cellpadding="0"
                   style="max-width:560px;background:#ffffff;">

                <tr>
                    <td align="center"
                        style="padding:35px;background:#eee7dc;">

                        <p style="font-size:10px;letter-spacing:2px;color:#8a6a48;">
                            FOOD · ART · INSPIRATION
                        </p>

                        <h1 style="font-family:Georgia,serif;font-size:27px;font-weight:normal;">
                            The Taste of Inspiration
                        </h1>

                    </td>
                </tr>

                <tr>
                    <td style="padding:35px;">

                        <h2 style="font-family:Georgia,serif;font-size:28px;font-weight:normal;">
                            Withdrawal received.
                        </h2>

                        <p style="font-size:14px;line-height:1.8;color:#62584c;">
                            Hello {{ $withdrawal->name }},
                        </p>

                        <p style="font-size:14px;line-height:1.8;color:#62584c;">
                            This email confirms that we have received
                            your notice of withdrawal.
                        </p>

                        <table role="presentation"
                               width="100%"
                               cellspacing="0"
                               cellpadding="0"
                               style="background:#f7f3ec;">
                            <tr>
                                <td style="padding:24px;font-size:14px;line-height:1.8;">

                                    <strong>Withdrawal reference:</strong><br>
                                    {{ $withdrawal->reference }}

                                    <br><br>

                                    <strong>Order reference:</strong><br>
                                    {{ $withdrawal->order_number }}

                                    <br><br>

                                    <strong>Submitted:</strong><br>
                                    {{ $withdrawal->submitted_at->timezone('Europe/Amsterdam')->format('d F Y, H:i T') }}

                                    @if ($withdrawal->reason)
                                        <br><br>
                                        <strong>Additional information:</strong><br>
                                        {{ $withdrawal->reason }}
                                    @endif

                                </td>
                            </tr>
                        </table>

                        <p style="margin:25px 0;font-size:14px;line-height:1.8;color:#62584c;">
                            Please keep this confirmation for your
                            records. We will provide further information
                            regarding your return and refund where applicable.
                        </p>

                        <a href="{{ route('orders.index') }}"
                           style="display:inline-block;background:#70512f;color:#ffffff;padding:15px 25px;text-decoration:none;">
                            View my orders
                        </a>

                        <p style="margin-top:30px;font-size:13px;line-height:1.8;color:#62584c;">
                            Kind regards,<br>
                            The Taste of Inspiration
                        </p>

                    </td>
                </tr>
            </table>

        </td>
    </tr>
</table>

</body>
</html>
