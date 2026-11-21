
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>You're on the List | The Taste of Inspiration</title>
</head>

<body style="margin:0;padding:0;background-color:#f3eee6;font-family:Arial,Helvetica,sans-serif;color:#25221f;">

<table role="presentation" cellpadding="0" cellspacing="0" border="0"
       style="width:100%;background-color:#f3eee6;">
    <tr>
        <td align="center" style="padding:48px 16px;">

            <table role="presentation" cellpadding="0" cellspacing="0" border="0"
                   style="width:100%;max-width:580px;background-color:#faf8f4;">

                <!-- Top accent -->
                <tr>
                    <td style="height:4px;background-color:#8a6a48;"></td>
                </tr>

                <!-- Header -->
                <tr>
                    <td align="center" style="padding:46px 32px 20px;">
                        <p style="margin:0;color:#8a6a48;font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;">
                            The Taste of Inspiration
                        </p>

                        <p style="margin:13px 0 0;color:#9c8c79;font-size:10px;letter-spacing:2px;text-transform:uppercase;">
                            An Art & Culinary Book
                        </p>
                    </td>
                </tr>

                <!-- Divider -->
                <tr>
                    <td align="center" style="padding:12px 0 25px;">
                        <div style="width:50px;height:1px;background-color:#8a6a48;"></div>
                    </td>
                </tr>

                <!-- Main content -->
                <tr>
                    <td align="center" style="padding:0 36px 35px;">

                        <p style="margin:0 0 18px;color:#8a6a48;font-size:10px;font-weight:bold;letter-spacing:2.5px;text-transform:uppercase;">
                            Waitlist Confirmation
                        </p>

                        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:42px;font-weight:normal;line-height:1.15;letter-spacing:-1px;color:#25221f;">
                            You're on
                            <span style="display:block;color:#8a6a48;font-style:italic;">
                                the list.
                            </span>
                        </h1>

                        <p style="margin:28px 0 0;max-width:420px;color:#746b61;font-size:15px;line-height:1.9;">
                            Thank you for joining the waitlist for
                            <strong>The Taste of Inspiration.</strong>
                        </p>

                        <p style="margin:18px 0 0;max-width:420px;color:#746b61;font-size:15px;line-height:1.9;">
                            A unique book bringing together original paintings
                            and culinary creations in one shared story of
                            art, food, and inspiration.
                        </p>

                        <!-- Book concept -->
                        <table role="presentation" cellpadding="0" cellspacing="0"
                               style="width:100%;margin-top:32px;border-top:1px solid #e5d9cb;border-bottom:1px solid #e5d9cb;">
                            <tr>
                                <td align="center" style="padding:24px 8px;">
                                    <p style="margin:0;font-family:Georgia,serif;font-size:21px;line-height:1.6;color:#8a6a48;font-style:italic;">
                                        Five paintings.<br>
                                        Five dishes.<br>
                                        One book.
                                    </p>
                                </td>
                            </tr>
                        </table>

                        <h2 style="margin:30px 0 12px;font-family:Georgia,serif;font-size:23px;font-weight:normal;color:#25221f;">
                            What happens next?
                        </h2>

                        <p style="margin:0;max-width:410px;color:#746b61;font-size:14px;line-height:1.9;">
                            We'll send you an email when the book becomes
                            available. Until then, you can explore the
                            story behind the project.
                        </p>

                        <!-- CTA -->
                        <table role="presentation" cellpadding="0" cellspacing="0"
                               style="margin:32px auto 0;">
                            <tr>
                                <td align="center" style="background-color:#25221f;">
                                    <a href="{{ url('/') }}"
                                       style="display:inline-block;padding:17px 30px;color:#ffffff;text-decoration:none;font-size:11px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;">
                                        Explore the Website
                                    </a>
                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td align="center" style="padding:28px 32px 36px;background-color:#f0e9df;">

                        <p style="margin:0;font-family:Georgia,serif;font-size:17px;font-style:italic;color:#8a6a48;">
                            Where food meets art.
                        </p>

                        <p style="margin:22px 0 0;color:#8b8175;font-size:11px;line-height:1.8;">
                            You're receiving this email because you joined
                            the book launch waitlist.
                        </p>

                        <p style="margin:12px 0 0;font-size:12px;">
                            <a href="{{ route('book-waitlist.unsubscribe', ['token' => $subscriber->unsubscribe_token]) }}"
                               style="color:#8a6a48;text-decoration:underline;">
                                Unsubscribe from book updates
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
