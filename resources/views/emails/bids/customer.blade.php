
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Private Offer Confirmation</title>
</head>

<body style="margin:0;padding:0;background-color:#f7f3ec;font-family:Arial,Helvetica,sans-serif;color:#25221f;">

<!-- EMAIL PREVIEW TEXT -->
<div style="display:none;font-size:1px;color:#f7f3ec;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    We have received your private offer for {{ $painting->title }}.
</div>

<!-- BACKGROUND -->
<table role="presentation"
       width="100%"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="background-color:#f7f3ec;">

    <tr>
        <td align="center" style="padding:32px 16px;">

            <!-- EMAIL CONTAINER -->
            <table role="presentation"
                   width="100%"
                   cellpadding="0"
                   cellspacing="0"
                   border="0"
                   style="max-width:560px;background-color:#ffffff;">

                <!-- BRAND -->
                <tr>
                    <td align="center"
                        style="padding:32px 24px;background-color:#eee7dc;">

                        <p style="margin:0 0 12px;font-size:10px;letter-spacing:2px;color:#8a6a48;">
                            FOOD · ART · INSPIRATION
                        </p>

                        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:27px;font-weight:normal;line-height:1.25;color:#25221f;">
                            The Taste
                            <span style="font-style:italic;color:#8a6a48;">
                                    of Inspiration
                                </span>
                        </h1>
                    </td>
                </tr>

                <!-- MAIN CONTENT -->
                <tr>
                    <td style="padding:36px 28px 40px;">

                        <p style="margin:0 0 12px;font-size:10px;letter-spacing:2px;color:#8a6a48;">
                            OFFER CONFIRMATION
                        </p>

                        <h2 style="margin:0 0 24px;font-family:Georgia,'Times New Roman',serif;font-size:29px;font-weight:normal;line-height:1.25;color:#25221f;">
                            We received your offer.
                        </h2>

                        <p style="margin:0 0 16px;font-size:14px;line-height:1.8;color:#62584c;">
                            Hello {{ $bid->name }},
                        </p>

                        <p style="margin:0 0 26px;font-size:14px;line-height:1.8;color:#62584c;">
                            Thank you for your interest in The Taste of Inspiration.
                            This email confirms that we have received your private
                            offer for the artwork below.
                        </p>

                        <!-- OFFER DETAILS -->
                        <table role="presentation"
                               width="100%"
                               cellpadding="0"
                               cellspacing="0"
                               border="0"
                               style="background-color:#f7f3ec;border:1px solid #e2d9cd;">

                            <tr>
                                <td style="padding:24px;">

                                    <p style="margin:0 0 7px;font-size:10px;letter-spacing:1.5px;color:#8a6a48;">
                                        ARTWORK
                                    </p>

                                    <p style="margin:0 0 22px;font-family:Georgia,serif;font-size:22px;line-height:1.3;color:#25221f;">
                                        {{ $painting->title }}
                                    </p>

                                    <div style="height:1px;background-color:#e2d9cd;"></div>

                                    <p style="margin:22px 0 7px;font-size:10px;letter-spacing:1.5px;color:#8a6a48;">
                                        YOUR OFFER
                                    </p>

                                    <p style="margin:0;font-family:Georgia,serif;font-size:30px;color:#8a6a48;">
                                        {{ $amount }}
                                    </p>

                                </td>
                            </tr>
                        </table>

                        <!-- NEXT STEPS -->
                        <h3 style="margin:30px 0 12px;font-family:Georgia,serif;font-size:21px;font-weight:normal;color:#25221f;">
                            What happens next?
                        </h3>

                        <p style="margin:0 0 18px;font-size:14px;line-height:1.8;color:#62584c;">
                            We will review your offer privately.
                            If we wish to proceed, we will contact you
                            using the information you provided.
                        </p>

                        <p style="margin:0 0 28px;font-size:12px;line-height:1.8;color:#746b61;">
                            Please note that this confirmation only acknowledges
                            receipt of your offer. It does not mean that your
                            offer has been accepted.
                        </p>

                        <div style="height:1px;background-color:#e2d9cd;"></div>

                        <!-- SIGNATURE -->
                        <p style="margin:25px 0 0;font-size:13px;line-height:1.9;color:#62584c;">
                            Kind regards,<br>
                            <span style="font-family:Georgia,serif;font-size:18px;font-style:italic;color:#8a6a48;">
                                    The Taste of Inspiration
                                </span>
                        </p>

                    </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                    <td align="center"
                        style="padding:24px;background-color:#eee7dc;">

                        <p style="margin:0 0 8px;font-size:10px;color:#8a6a48;">
                            THE TASTE OF INSPIRATION
                        </p>

                        <p style="margin:0;font-size:11px;line-height:1.8;color:#746b61;">
                            © {{ date('Y') }} The Taste of Inspiration.<br>
                            This email was sent because you submitted
                            a private artwork offer.
                        </p>

                    </td>
                </tr>

            </table>
        </td>
    </tr>
</table>

</body>
</html>
