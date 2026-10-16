
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">

    <title>Order Confirmation | The Taste of Inspiration</title>

    <style>
        :root {
            color-scheme: light;
            supported-color-schemes: light;
        }

        body,
        table,
        td,
        p,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table {
            border-collapse: collapse;
        }

        @media only screen and (max-width: 640px) {
            .email-container {
                width: 100% !important;
            }

            .email-padding {
                padding-left: 24px !important;
                padding-right: 24px !important;
            }

            .brand-title {
                font-size: 24px !important;
                line-height: 32px !important;
            }
        }
    </style>
</head>

<body
    bgcolor="#f7f3ec"
    style="
        margin: 0;
        padding: 0;
        width: 100%;
        background-color: #f7f3ec;
        color: #292722;
        font-family: Arial, Helvetica, sans-serif;
    "
>

<table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    role="presentation"
    bgcolor="#f7f3ec"
    style="width: 100%; background-color: #f7f3ec;"
>
    <tr>
        <td
            align="center"
            style="padding: 40px 15px;"
        >

            <!-- EMAIL CONTAINER -->
            <table
                class="email-container"
                width="620"
                cellpadding="0"
                cellspacing="0"
                border="0"
                role="presentation"
                bgcolor="#ffffff"
                style="
                    width: 100%;
                    max-width: 620px;
                    background-color: #ffffff;
                    border: 1px solid #e5ddd2;
                "
            >

                <!-- HEADER -->
                <tr>
                    <td
                        align="center"
                        bgcolor="#efe8dd"
                        style="
                            padding: 42px 25px;
                            background-color: #efe8dd;
                            text-align: center;
                        "
                    >
                        <div
                            style="
                                margin-bottom: 12px;
                                color: #8a6a48;
                                font-size: 10px;
                                line-height: 16px;
                                letter-spacing: 3px;
                                text-transform: uppercase;
                            "
                        >
                            Food · Art · Inspiration
                        </div>

                        <div
                            class="brand-title"
                            style="
                                color: #292722;
                                font-family: Georgia, 'Times New Roman', serif;
                                font-size: 27px;
                                line-height: 36px;
                                letter-spacing: 1px;
                            "
                        >
                            THE TASTE OF INSPIRATION
                        </div>
                    </td>
                </tr>

                <!-- INTRODUCTION -->
                <tr>
                    <td
                        class="email-padding"
                        bgcolor="#ffffff"
                        style="
                            padding: 42px 40px 28px;
                            background-color: #ffffff;
                        "
                    >
                        <div
                            style="
                                margin-bottom: 12px;
                                color: #8a6a48;
                                font-size: 11px;
                                line-height: 16px;
                                letter-spacing: 2px;
                                text-transform: uppercase;
                            "
                        >
                            Order Confirmed
                        </div>

                        <h1
                            style="
                                margin: 0 0 20px;
                                color: #292722;
                                font-family: Georgia, 'Times New Roman', serif;
                                font-size: 30px;
                                font-weight: normal;
                                line-height: 1.3;
                            "
                        >
                            Thank you, {{ $order->name }}.
                        </h1>

                        <p
                            style="
                                margin: 0;
                                color: #625e57;
                                font-size: 15px;
                                line-height: 1.8;
                            "
                        >
                            Your payment has been successfully received.
                            We are now preparing your copy of
                            <strong>The Taste of Inspiration</strong>
                            with care.
                        </p>
                    </td>
                </tr>

                <!-- ORDER DETAILS -->
                <tr>
                    <td
                        class="email-padding"
                        style="padding: 0 40px 35px;"
                    >
                        <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            role="presentation"
                            bgcolor="#f7f3ec"
                            style="
                                width: 100%;
                                background-color: #f7f3ec;
                            "
                        >
                            <tr>
                                <td
                                    colspan="2"
                                    style="
                                        padding: 25px 25px 18px;
                                        font-family: Georgia, 'Times New Roman', serif;
                                        font-size: 20px;
                                        color: #292722;
                                    "
                                >
                                    Order #{{ $order->id }}
                                </td>
                            </tr>

                            <!-- PRODUCT -->
                            <tr>
                                <td
                                    style="
                                        padding: 8px 10px 8px 25px;
                                        color: #77716a;
                                        font-size: 13px;
                                    "
                                >
                                    Product
                                </td>

                                <td
                                    align="right"
                                    style="
                                        padding: 8px 25px 8px 10px;
                                        color: #292722;
                                        font-size: 13px;
                                        font-weight: 600;
                                    "
                                >
                                    The Taste of Inspiration
                                </td>
                            </tr>

                            <!-- QUANTITY -->
                            <tr>
                                <td
                                    style="
                                        padding: 8px 10px 20px 25px;
                                        color: #77716a;
                                        font-size: 13px;
                                    "
                                >
                                    Quantity
                                </td>

                                <td
                                    align="right"
                                    style="
                                        padding: 8px 25px 20px 10px;
                                        color: #292722;
                                        font-size: 13px;
                                    "
                                >
                                    {{ $order->quantity }}
                                    {{ $order->quantity == 1 ? 'book' : 'books' }}
                                </td>
                            </tr>

                            <!-- TOTAL -->
                            <tr>
                                <td
                                    style="
                                        padding: 20px 10px 25px 25px;
                                        border-top: 1px solid #ddd3c6;
                                        color: #292722;
                                        font-size: 14px;
                                        font-weight: bold;
                                    "
                                >
                                    Total
                                </td>

                                <td
                                    align="right"
                                    style="
                                        padding: 20px 25px 25px 10px;
                                        border-top: 1px solid #ddd3c6;
                                        color: #292722;
                                        font-size: 18px;
                                        font-weight: bold;
                                    "
                                >
                                    € {{ number_format($order->total_price, 2, ',', '.') }}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- DELIVERY ADDRESS -->
                <tr>
                    <td
                        class="email-padding"
                        style="padding: 0 40px 40px;"
                    >
                        <div
                            style="
                                margin-bottom: 14px;
                                color: #8a6a48;
                                font-size: 11px;
                                line-height: 16px;
                                letter-spacing: 2px;
                                text-transform: uppercase;
                            "
                        >
                            Delivery Address
                        </div>

                        <div
                            style="
                                color: #625e57;
                                font-size: 14px;
                                line-height: 1.8;
                            "
                        >
                            {{ $order->name }}<br>
                            {{ $order->address }}<br>
                            {{ $order->postal_code }} {{ $order->city }}
                        </div>
                    </td>
                </tr>

                <!-- MESSAGE -->
                <tr>
                    <td
                        class="email-padding"
                        align="center"
                        style="
                            padding: 0 40px 40px;
                            text-align: center;
                        "
                    >
                        <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            role="presentation"
                            bgcolor="#f7f3ec"
                            style="
                                width: 100%;
                                background-color: #f7f3ec;
                            "
                        >
                            <tr>
                                <td
                                    align="center"
                                    style="
                                        padding: 23px 20px;
                                        color: #625e57;
                                        font-size: 13px;
                                        line-height: 23px;
                                    "
                                >
                                    Thank you for being part of this
                                    creative journey where
                                    <strong>food becomes art</strong>.
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                    <td
                        align="center"
                        bgcolor="#292722"
                        style="
                            padding: 35px 25px;
                            background-color: #292722;
                            text-align: center;
                        "
                    >
                        <div
                            style="
                                margin-bottom: 12px;
                                font-family: Georgia, 'Times New Roman', serif;
                                font-size: 20px;
                                line-height: 28px;
                                color: #ffffff;
                            "
                        >
                            The Taste of Inspiration
                        </div>

                        <div
                            style="
                                color: #c9c2b8;
                                font-size: 12px;
                                line-height: 21px;
                            "
                        >
                            Where flavour becomes colour,
                            and food becomes art.
                            <br>
                            Thank you for your order.
                        </div>

                        <div
                            style="
                                margin-top: 18px;
                                color: #ad926e;
                                font-size: 10px;
                                letter-spacing: 1px;
                                text-transform: uppercase;
                            "
                        >
                            Food · Art · Inspiration
                        </div>
                    </td>
                </tr>

            </table>
        </td>
    </tr>
</table>

</body>
</html>
