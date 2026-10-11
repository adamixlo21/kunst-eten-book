
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Private Artwork Offer</title>
</head>

<body style="
    margin:0;
    padding:0;
    background-color:#f7f3ec;
    font-family:Arial,Helvetica,sans-serif;
    color:#25221f;
">

<!-- EMAIL BACKGROUND -->
<table
    role="presentation"
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="background-color:#f7f3ec;"
>
    <tr>
        <td align="center" style="padding:40px 16px;">

            <!-- MAIN CONTAINER -->
            <table
                role="presentation"
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="max-width:600px;background-color:#ffffff;"
            >

                <!-- DARK HEADER -->
                <tr>
                    <td
                        align="center"
                        style="
                                background-color:#25221f;
                                padding:42px 28px;
                            "
                    >
                        <p style="
                                margin:0 0 14px;
                                font-size:10px;
                                letter-spacing:3px;
                                color:#c4a580;
                                text-transform:uppercase;
                            ">
                            FOOD · ART · INSPIRATION
                        </p>

                        <h1 style="
                                margin:0;
                                font-family:Georgia,serif;
                                font-size:32px;
                                line-height:1.2;
                                font-weight:normal;
                                color:#f7f3ec;
                            ">
                            The Taste<br>

                            <span style="
                                    font-style:italic;
                                    color:#c4a580;
                                ">
                                    of Inspiration.
                                </span>
                        </h1>
                    </td>
                </tr>

                <!-- MAIN CONTENT -->
                <tr>
                    <td style="padding:42px 32px;">

                        <p style="
                                margin:0 0 15px;
                                font-size:10px;
                                text-transform:uppercase;
                                letter-spacing:2px;
                                color:#8a6a48;
                            ">
                            NEW PRIVATE OFFER
                        </p>

                        <h2 style="
                                margin:0 0 20px;
                                font-family:Georgia,serif;
                                font-size:35px;
                                line-height:1.15;
                                font-weight:normal;
                                color:#25221f;
                            ">
                            Someone loves<br>

                            <span style="
                                    font-style:italic;
                                    color:#8a6a48;
                                ">
                                    your artwork.
                                </span>
                        </h2>

                        <p style="
                                margin:0 0 30px;
                                font-size:14px;
                                line-height:1.9;
                                color:#62584c;
                            ">
                            A new private offer has been submitted
                            through The Taste of Inspiration website.
                            Here are the details.
                        </p>

                        <!-- OFFER CARD -->
                        <table
                            role="presentation"
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            style="background-color:#eee7dc;"
                        >
                            <tr>
                                <td style="padding:28px;">

                                    <p style="
                                            margin:0 0 8px;
                                            font-size:10px;
                                            letter-spacing:2px;
                                            color:#8a6a48;
                                            text-transform:uppercase;
                                        ">
                                        ARTWORK
                                    </p>

                                    <h3 style="
                                            margin:0 0 25px;
                                            font-family:Georgia,serif;
                                            font-size:26px;
                                            font-weight:normal;
                                            color:#25221f;
                                        ">
                                        {{ $painting->title }}
                                    </h3>

                                    <div style="
                                            border-top:1px solid #d3c1ab;
                                            margin-bottom:22px;
                                        "></div>

                                    <p style="
                                            margin:0 0 8px;
                                            font-size:10px;
                                            letter-spacing:2px;
                                            color:#8a6a48;
                                            text-transform:uppercase;
                                        ">
                                        OFFER AMOUNT
                                    </p>

                                    <p style="
                                            margin:0;
                                            font-family:Georgia,serif;
                                            font-size:42px;
                                            line-height:1.1;
                                            color:#8a6a48;
                                        ">
                                        {{ $amount }}
                                    </p>

                                </td>
                            </tr>
                        </table>

                        <!-- CUSTOMER INFORMATION -->
                        <h3 style="
                                margin:36px 0 20px;
                                font-family:Georgia,serif;
                                font-size:24px;
                                font-weight:normal;
                                color:#25221f;
                            ">
                            Customer Details
                        </h3>

                        <table
                            role="presentation"
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            style="border-top:1px solid #ded4c6;"
                        >

                            <!-- NAME -->
                            <tr>
                                <td style="
                                        padding:16px 0;
                                        border-bottom:1px solid #ded4c6;
                                    ">
                                    <p style="
                                            margin:0 0 6px;
                                            font-size:10px;
                                            letter-spacing:2px;
                                            color:#8a6a48;
                                            text-transform:uppercase;
                                        ">
                                        NAME
                                    </p>

                                    <p style="
                                            margin:0;
                                            font-size:15px;
                                            color:#25221f;
                                        ">
                                        {{ $bid->name }}
                                    </p>
                                </td>
                            </tr>

                            <!-- EMAIL -->
                            <tr>
                                <td style="
                                        padding:16px 0;
                                        border-bottom:1px solid #ded4c6;
                                    ">
                                    <p style="
                                            margin:0 0 6px;
                                            font-size:10px;
                                            letter-spacing:2px;
                                            color:#8a6a48;
                                            text-transform:uppercase;
                                        ">
                                        EMAIL
                                    </p>

                                    <a
                                        href="mailto:{{ $bid->email }}"
                                        style="
                                                font-size:15px;
                                                color:#8a6a48;
                                                text-decoration:none;
                                                overflow-wrap:break-word;
                                            "
                                    >
                                        {{ $bid->email }}
                                    </a>
                                </td>
                            </tr>

                            <!-- PHONE -->
                            <tr>
                                <td style="
                                        padding:16px 0;
                                        border-bottom:1px solid #ded4c6;
                                    ">
                                    <p style="
                                            margin:0 0 6px;
                                            font-size:10px;
                                            letter-spacing:2px;
                                            color:#8a6a48;
                                            text-transform:uppercase;
                                        ">
                                        PHONE NUMBER
                                    </p>

                                    <p style="
                                            margin:0;
                                            font-size:15px;
                                            color:#25221f;
                                        ">
                                        {{ $bid->phone ?: 'Not provided' }}
                                    </p>
                                </td>
                            </tr>

                            <!-- DATE -->
                            <tr>
                                <td style="
                                        padding:16px 0;
                                        border-bottom:1px solid #ded4c6;
                                    ">
                                    <p style="
                                            margin:0 0 6px;
                                            font-size:10px;
                                            letter-spacing:2px;
                                            color:#8a6a48;
                                            text-transform:uppercase;
                                        ">
                                        DATE
                                    </p>

                                    <p style="
                                            margin:0;
                                            font-size:15px;
                                            color:#25221f;
                                        ">
                                        {{ $bid->created_at->format('d M Y, H:i') }}
                                    </p>
                                </td>
                            </tr>

                        </table>

                        <!-- NEXT STEPS -->
                        <div style="
                                margin-top:30px;
                                padding:22px;
                                background-color:#f7f3ec;
                                border-left:3px solid #8a6a48;
                            ">
                            <h4 style="
                                    margin:0 0 10px;
                                    font-family:Georgia,serif;
                                    font-size:20px;
                                    font-weight:normal;
                                    color:#25221f;
                                ">
                                What happens next?
                            </h4>

                            <p style="
                                    margin:0;
                                    font-size:13px;
                                    line-height:1.8;
                                    color:#62584c;
                                ">
                                Review this offer in your admin dashboard.
                                You can contact the customer directly
                                using the details above.
                            </p>
                        </div>

                    </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                    <td
                        align="center"
                        style="
                                padding:28px;
                                background-color:#eee7dc;
                            "
                    >
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
                            © {{ date('Y') }} The Taste of Inspiration.
                            <br>
                            Automated administrator notification.
                        </p>
                    </td>
                </tr>

            </table>
        </td>
    </tr>
</table>

</body>
</html>
