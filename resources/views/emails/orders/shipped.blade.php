
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Order Has Shipped</title>
</head>

<body style="margin:0;padding:0;background-color:#f7f3ec;font-family:Arial,Helvetica,sans-serif;color:#25221f;">

<!-- EMAIL PREVIEW -->
<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    Good news! Your order #{{ $order->id }} has been shipped.
</div>

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

                <!-- BRAND HEADER -->
                <tr>
                    <td align="center"
                        style="padding:38px 24px;background-color:#eee7dc;">

                        <p style="margin:0 0 12px;font-size:10px;letter-spacing:2px;color:#8a6a48;">
                            FOOD · ART · INSPIRATION
                        </p>

                        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:normal;line-height:1.3;color:#25221f;">
                            The Taste
                            <span style="font-style:italic;color:#8a6a48;">
                                    of Inspiration
                                </span>
                        </h1>
                    </td>
                </tr>

                <!-- CONTENT -->
                <tr>
                    <td style="padding:38px 30px;">

                        <p style="margin:0 0 14px;font-size:10px;letter-spacing:2px;color:#8a6a48;">
                            SHIPPING CONFIRMATION
                        </p>

                        <h2 style="margin:0 0 25px;font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:normal;line-height:1.25;color:#25221f;">
                            Your order is
                            <span style="font-style:italic;color:#8a6a48;">
                                    on its way.
                                </span>
                        </h2>

                        <p style="margin:0 0 18px;font-size:14px;line-height:1.8;color:#62584c;">
                            Hello {{ $order->name }},
                        </p>

                        <p style="margin:0 0 25px;font-size:14px;line-height:1.8;color:#62584c;">
                            We're happy to let you know that your order
                            has been shipped. Your copy of
                            <strong>The Taste of Inspiration</strong>
                            is on its way to you.
                        </p>

                        <!-- ORDER SUMMARY -->
                        <table role="presentation"
                               width="100%"
                               cellpadding="0"
                               cellspacing="0"
                               border="0"
                               style="background-color:#f7f3ec;border:1px solid #e2d9cd;">
                            <tr>
                                <td style="padding:25px;">

                                    <p style="margin:0 0 18px;font-size:10px;letter-spacing:2px;color:#8a6a48;">
                                        ORDER SUMMARY
                                    </p>

                                    <p style="margin:0 0 12px;font-size:14px;color:#25221f;">
                                        <strong>Order number:</strong>
                                        #{{ $order->id }}
                                    </p>

                                    <p style="margin:0 0 12px;font-size:14px;color:#25221f;">
                                        <strong>Product:</strong>
                                        The Taste of Inspiration Book
                                    </p>

                                    <p style="margin:0 0 12px;font-size:14px;color:#25221f;">
                                        <strong>Quantity:</strong>
                                        {{ $order->quantity }}
                                    </p>

                                    <p style="margin:0;font-size:14px;color:#25221f;">
                                        <strong>Total:</strong>
                                        €{{ number_format((float) $order->total_price, 2, ',', '.') }}
                                    </p>

                                </td>
                            </tr>
                        </table>

                        <!-- DELIVERY ADDRESS -->
                        <h3 style="margin:30px 0 14px;font-family:Georgia,serif;font-size:21px;font-weight:normal;color:#25221f;">
                            Delivery Address
                        </h3>

                        <p style="margin:0;font-size:14px;line-height:1.9;color:#62584c;">
                            {{ $order->name }}<br>
                            {{ $order->address }}<br>
                            {{ $order->postal_code }} {{ $order->city }}
                        </p>

                        <!-- NEXT STEPS -->
                        <h3 style="margin:30px 0 12px;font-family:Georgia,serif;font-size:21px;font-weight:normal;color:#25221f;">
                            What happens next?
                        </h3>

                        <p style="margin:0 0 25px;font-size:14px;line-height:1.8;color:#62584c;">
                            Your order is now with the delivery service.
                            Delivery times may vary depending on your location.
                        </p>

                        <div style="height:1px;background-color:#e2d9cd;"></div>

                        <!-- SIGNATURE -->
                        <p style="margin:26px 0 0;font-size:13px;line-height:1.9;color:#62584c;">
                            Thank you for your order.<br><br>
                            Kind regards,<br>
                            <span style="font-family:Georgia,serif;font-size:19px;font-style:italic;color:#8a6a48;">
                                    The Taste of Inspiration
                                </span>
                        </p>

                    </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                    <td align="center"
                        style="padding:25px;background-color:#eee7dc;">

                        <p style="margin:0 0 8px;font-size:10px;letter-spacing:1px;color:#8a6a48;">
                            THE TASTE OF INSPIRATION
                        </p>

                        <p style="margin:0;font-size:11px;line-height:1.8;color:#746b61;">
                            © {{ date('Y') }} The Taste of Inspiration.<br>
                            This email was sent because you placed an order with us.
                        </p>

                    </td>
                </tr>

            </table>
        </td>
    </tr>
</table>

</body>
</html>
