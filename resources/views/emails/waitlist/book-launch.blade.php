
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <title>{{ $subjectLine }}</title>
</head>

<body style="margin:0;padding:0;background:#f3eee6;color:#25221f;font-family:Arial,Helvetica,sans-serif;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
       style="width:100%;background:#f3eee6;">
    <tr>
        <td align="center" style="padding:36px 12px;">

            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                   style="width:100%;max-width:600px;background:#faf8f4;">

                <tr>
                    <td style="height:4px;background:#8a6a48;font-size:0;">
                        &nbsp;
                    </td>
                </tr>

                <!-- Header -->
                <tr>
                    <td align="center" style="padding:38px 24px 30px;">
                        <p style="margin:0;font-size:12px;font-weight:bold;letter-spacing:2px;color:#8a6a48;">
                            THE TASTE OF INSPIRATION
                        </p>

                        <p style="margin:12px 0 0;font-size:10px;letter-spacing:2px;color:#958879;">
                            A STORY OF ART &amp; GASTRONOMY
                        </p>
                    </td>
                </tr>

                <tr>
                    <td style="padding:0 32px;">
                        <div style="height:1px;background:#e1d6c9;"></div>
                    </td>
                </tr>

                <!-- Announcement -->
                <tr>
                    <td align="center" style="padding:48px 28px 52px;">

                        <p style="margin:0 0 22px;font-size:10px;font-weight:bold;letter-spacing:2px;color:#8a6a48;">
                            A MESSAGE FROM US
                        </p>

                        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:38px;line-height:1.25;font-weight:normal;color:#25221f;">
                            {{ $subjectLine }}
                        </h1>

                        <div style="width:48px;height:1px;background:#8a6a48;margin:30px auto;"></div>

                        <!-- Admin-written announcement -->
                        <div style="font-size:15px;line-height:1.9;color:#746b61;text-align:left;overflow-wrap:break-word;">
                            {!! nl2br(e($bodyText)) !!}
                        </div>

                        <table role="presentation" cellpadding="0" cellspacing="0" border="0"
                               style="margin:36px auto 0;">
                            <tr>
                                <td align="center" bgcolor="#25221f">
                                    <a href="{{ url('/#book') }}"
                                       style="display:inline-block;padding:18px 30px;background:#25221f;color:#ffffff;text-decoration:none;font-size:11px;font-weight:bold;letter-spacing:1px;">
                                        DISCOVER THE BOOK
                                    </a>
                                </td>
                            </tr>
                        </table>

                        <!-- Signature -->
                        <p style="margin:38px 0 0;font-family:Georgia,serif;font-size:18px;font-style:italic;line-height:1.6;color:#8a6a48;">
                            With inspiration,<br>
                            Nour &amp; Patrick
                        </p>

                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                               style="width:100%;margin-top:36px;border-top:1px solid #e1d6c9;">
                            <tr>
                                <td align="center" style="padding:30px 10px 0;">
                                    <p style="margin:0;font-family:Georgia,serif;font-size:21px;font-style:italic;line-height:1.5;color:#8a6a48;">
                                        Five paintings.<br>
                                        Five dishes.<br>
                                        One book.
                                    </p>
                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td align="center" style="padding:30px 24px;background:#ebe2d6;">
                        <p style="margin:0;font-size:11px;font-weight:bold;letter-spacing:1.5px;color:#8a6a48;">
                            THE TASTE OF INSPIRATION
                        </p>

                        @if ($unsubscribeUrl)
                            <p style="margin:18px 0 0;font-size:12px;line-height:1.8;color:#746b61;">
                                You received this email because you
                                subscribed to our book launch updates.
                            </p>

                            <p style="margin:14px 0 0;font-size:12px;">
                                <a href="{{ $unsubscribeUrl }}"
                                   style="color:#715438;text-decoration:underline;">
                                    Unsubscribe from book updates
                                </a>
                            </p>
                        @else
                            <p style="margin:18px 0 0;font-size:12px;color:#746b61;">
                                Test email — no waitlist subscribers were notified.
                            </p>
                        @endif

                        <p style="margin:20px 0 0;font-size:11px;">
                            <a href="{{ route('privacy-policy') }}"
                               style="color:#746b61;text-decoration:underline;">
                                Privacy Policy
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
