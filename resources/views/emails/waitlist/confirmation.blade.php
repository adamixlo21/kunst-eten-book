
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <title>Welcome to The Taste of Inspiration</title>
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

                <!-- Brand -->
                <tr>
                    <td align="center" style="padding:38px 24px 30px;">
                        <p style="margin:0;font-size:12px;font-weight:bold;letter-spacing:2px;color:#8a6a48;">
                            THE TASTE OF INSPIRATION
                        </p>

                        <p style="margin:12px 0 0;font-size:10px;letter-spacing:2px;color:#958879;">
                            ART &bull; FOOD &bull; INSPIRATION
                        </p>
                    </td>
                </tr>

                <tr>
                    <td style="padding:0 32px;">
                        <div style="height:1px;background:#e1d6c9;"></div>
                    </td>
                </tr>

                <!-- Content -->
                <tr>
                    <td align="center" style="padding:48px 28px 52px;">

                        <p style="margin:0 0 20px;font-size:10px;font-weight:bold;letter-spacing:2px;color:#8a6a48;">
                            WAITLIST CONFIRMED
                        </p>

                        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:44px;line-height:1.2;font-weight:normal;color:#25221f;">
                            You're on<br>
                            <span style="color:#8a6a48;font-style:italic;">
                                the list.
                            </span>
                        </h1>

                        <p style="margin:28px 0 0;font-size:15px;line-height:1.8;color:#746b61;">
                            Thank you for joining the waitlist for
                            <strong style="color:#25221f;">
                                The Taste of Inspiration.
                            </strong>
                        </p>

                        <p style="margin:18px 0 0;font-size:15px;line-height:1.8;color:#746b61;">
                            We're creating a book where original
                            paintings and culinary creations come together
                            to tell one shared story.
                        </p>

                        <!-- Feature -->
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                               style="width:100%;margin-top:34px;background:#f0e8dd;">
                            <tr>
                                <td align="center" style="padding:28px 15px;">
                                    <p style="margin:0 0 14px;font-size:10px;letter-spacing:2px;color:#8a6a48;">
                                        THE BOOK
                                    </p>

                                    <p style="margin:0;font-family:Georgia,serif;font-style:italic;font-size:24px;line-height:1.5;color:#8a6a48;">
                                        Five paintings.<br>
                                        Five dishes.<br>
                                        One book.
                                    </p>
                                </td>
                            </tr>
                        </table>

                        <h2 style="margin:36px 0 12px;font-family:Georgia,serif;font-size:25px;font-weight:normal;color:#25221f;">
                            What happens next?
                        </h2>

                        <p style="margin:0;font-size:14px;line-height:1.9;color:#746b61;">
                            When the book is ready, you'll receive
                            an email with the news and a link
                            to discover it.
                        </p>

                        <table role="presentation" cellpadding="0" cellspacing="0" border="0"
                               style="margin:32px auto 0;">
                            <tr>
                                <td align="center" bgcolor="#25221f">
                                    <a href="{{ url('/#story') }}"
                                       style="display:inline-block;padding:17px 28px;background:#25221f;color:#ffffff;text-decoration:none;font-size:11px;font-weight:bold;letter-spacing:1px;">
                                        DISCOVER OUR STORY
                                    </a>
                                </td>
                            </tr>
                        </table>

                        <p style="margin:32px 0 0;font-family:Georgia,serif;font-style:italic;font-size:18px;color:#8a6a48;">
                            With inspiration,<br>
                            Nour &amp; Patrick
                        </p>
                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td align="center" style="padding:30px 24px;background:#ebe2d6;">
                        <p style="margin:0;font-size:11px;font-weight:bold;letter-spacing:1.5px;color:#8a6a48;">
                            THE TASTE OF INSPIRATION
                        </p>

                        <p style="margin:18px 0 0;font-size:12px;line-height:1.8;color:#746b61;">
                            You're receiving this message because you
                            signed up for our book waitlist.
                        </p>

                        <p style="margin:14px 0 0;font-size:12px;">
                            <a href="{{ route('book-waitlist.unsubscribe', ['token' => $subscriber->unsubscribe_token]) }}"
                               style="color:#715438;text-decoration:underline;">
                                Unsubscribe from book updates
                            </a>
                        </p>

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
