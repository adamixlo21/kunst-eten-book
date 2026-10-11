
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Private Offer</title>
</head>

<body style="margin:0; padding:0; background-color:#f7f3ec; font-family:Arial, Helvetica, sans-serif; color:#25221f;">

<!-- BACKGROUND -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0"
       width="100%"
       style="background-color:#f7f3ec;">

    <tr>
        <td align="center" style="padding:40px 16px;">

            <!-- EMAIL CONTAINER -->
            <table role="presentation"
                   cellpadding="0"
                   cellspacing="0"
                   border="0"
                   width="100%"
                   style="max-width:600px; background-color:#eee7dc;">

                <!-- BRAND -->
                <tr>
                    <td align="center" style="padding:45px 25px 35px;">

                        <p style="
                                margin:0 0 14px;
                                font-size:10px;
                                letter-spacing:3px;
                                color:#8a6a48;
                                text-transform:uppercase;
                            ">
                            FOOD · ART · INSPIRATION
                        </p>

                        <h1 style="
                                margin:0;
                                font-family:Georgia, 'Times New Roman', serif;
                                font-size:32px;
                                font-weight:normal;
                                line-height:1.2;
                                color:#25221f;
                            ">
                            The Taste<br>
                            <span style="font-style:italic; color:#8a6a48;">
                                    of Inspiration.
                                </span>
                        </h1>

                    </td>
                </tr>

                <!-- CONTENT -->
                <tr>
                    <td style="padding:0 30px 40px;">

                        <table role="presentation"
                               width="100%"
                               cellpadding="0"
                               cellspacing="0"
                               border="0"
                               style="background-color:#f7f3ec;">

                            <tr>
                                <td style="padding:40px 28px;">

                                    <!-- LABEL -->
                                    <p style="
                                            margin:0 0 16px;
                                            font-size:10px;
                                            letter-spacing:2px;
                                            text-transform:uppercase;
                                            color:#8a6a48;
                                        ">
                                        PRIVATE ARTWORK OFFER
                                    </p>

                                    <!-- HEADING -->
                                    <h2 style="
                                            margin:0 0 24px;
                                            font-family:Georgia, 'Times New Roman', serif;
                                            font-weight:normal;
                                            font-size:35px;
                                            line-height:1.15;
                                            color:#25221f;
                                        ">
                                        Thank you for<br>
                                        <span style="font-style:italic; color:#8a6a48;">
                                                your offer.
                                            </span>
                                    </h2>

                                    <!-- MESSAGE -->
                                    <p style="
                                            margin:0 0 18px;
                                            font-size:14px;
                                            line-height:1.9;
                                            color:#62584c;
                                        ">
                                        Dear {{ $bid->name }},
                                    </p>

                                    <p style="
                                            margin:0 0 28px;
                                            font-size:14px;
                                            line-height:1.9;
                                            color:#62584c;
                                        ">
                                        We are pleased to confirm that your
                                        private offer has been received.
                                        Thank you for your interest in
                                        one of our original artworks.
                                    </p>

                                    <!-- OFFER DETAILS -->
                                    <table role="presentation"
                                           cellpadding="0"
                                           cellspacing="0"
                                           border="0"
                                           width="100%"
                                           style="border-top:1px solid #d7c8b6; border-bottom:1px solid #d7c8b6;">

                                        <tr>
                                            <td style="padding:20px 0 12px;">
                                                <p style="
                                                        margin:0 0 8px;
                                                        font-size:10px;
                                                        letter-spacing:2px;
                                                        text-transform:uppercase;
                                                        color:#8a6a48;
                                                    ">
                                                    ARTWORK
                                                </p>

                                                <p style="
                                                        margin:0;
                                                        font-family:Georgia, serif;
                                                        font-size:23px;
                                                        color:#25221f;
                                                    ">
                                                    {{ $painting->title }}
                                                </p>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding:12px 0 22px;">
                                                <p style="
                                                        margin:0 0 8px;
                                                        font-size:10px;
                                                        letter-spacing:2px;
                                                        text-transform:uppercase;
                                                        color:#8a6a48;
                                                    ">
                                                    YOUR PRIVATE OFFER
                                                </p>

                                                <p style="
                                                        margin:0;
                                                        font-family:Georgia, serif;
                                                        font-size:30px;
                                                        color:#8a6a48;
                                                    ">
                                                    {{ $amount }}
                                                </p>
                                            </td>
                                        </tr>

                                    </table>

                                    <!-- NEXT STEPS -->
                                    <h3 style="
                                            margin:30px 0 12px;
                                            font-family:Georgia, serif;
                                            font-size:22px;
                                            font-weight:normal;
                                            color:#25221f;
                                        ">
                                        What happens next?
                                    </h3>

                                    <p style="
                                            margin:0 0 20px;
                                            font-size:14px;
                                            line-height:1.9;
                                            color:#62584c;
                                        ">
                                        Your offer will be reviewed privately.
                                        If there are further steps, we will
                                        contact you using the details you provided.
                                    </p>

                                    <p style="
                                            margin:0;
                                            font-size:12px;
                                            line-height:1.8;
                                            color:#8a6a48;
                                        ">
                                        Please note: receiving your offer
                                        does not mean it has been accepted.
                                    </p>

                                    <!-- SIGNATURE -->
                                    <p style="
                                            margin:32px 0 0;
                                            font-size:13px;
                                            line-height:1.9;
                                            color:#62584c;
                                        ">
                                        Warm regards,<br>
                                        <span style="
                                                font-family:Georgia, serif;
                                                font-size:20px;
                                                font-style:italic;
                                                color:#8a6a48;
                                            ">
                                                The Taste of Inspiration
                                            </span>
                                    </p>

                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                    <td align="center" style="padding:0 25px 35px;">

                        <p style="
                                margin:0 0 10px;
                                font-size:10px;
                                letter-spacing:2px;
                                color:#8a6a48;
                            ">
                            FOOD · ART · INSPIRATION
                        </p>

                        <p style="
                                margin:0;
                                font-size:11px;
                                line-height:1.8;
                                color:#746b61;
                            ">
                            © {{ date('Y') }} The Taste of Inspiration.<br>
                            This is an automated confirmation email.
                        </p>

                    </td>
                </tr>

            </table>
        </td>
    </tr>
</table>

</body>
</html>
