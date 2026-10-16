
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Paid Order | The Taste of Inspiration</title>
</head>

<body style="margin:0; padding:0; background-color:#f7f3ec; font-family:Arial,Helvetica,sans-serif; color:#292722;">

<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f7f3ec;">
    <tr>
        <td align="center" style="padding:35px 15px;">

            <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                   style="max-width:620px; background-color:#ffffff; border:1px solid #e5ddd2;">

                <!-- Header -->
                <tr>
                    <td align="center" style="background-color:#efe8dd; padding:40px 24px;">
                        <p style="margin:0 0 12px; font-size:11px; letter-spacing:3px; color:#8a6a48;">
                            NEW ORDER NOTIFICATION
                        </p>

                        <h1 style="margin:0; font-family:Georgia,serif; font-size:27px; font-weight:normal; line-height:1.3;">
                            The Taste of Inspiration
                        </h1>
                    </td>
                </tr>

                <!-- Introduction -->
                <tr>
                    <td style="padding:35px 30px 20px;">
                        <h2 style="margin:0 0 12px; font-family:Georgia,serif; font-size:28px; font-weight:normal;">
                            A new order has been paid!
                        </h2>

                        <p style="font-size:14px; line-height:24px; color:#625e57;">
                            A customer has successfully paid for an order.
                            Here are the details for processing and shipping.
                        </p>
                    </td>
                </tr>

                <!-- Order details -->
                <tr>
                    <td style="padding:0 30px 25px;">
                        <table width="100%" cellpadding="10" cellspacing="0" role="presentation"
                               style="background-color:#f7f3ec; font-size:14px;">
                            <tr>
                                <td colspan="2" style="font-family:Georgia,serif; font-size:21px; padding:20px;">
                                    Order #{{ $order->id }}
                                </td>
                            </tr>
                            <tr>
                                <td style="color:#77716a;">Customer</td>
                                <td align="right">{{ $order->name }}</td>
                            </tr>
                            <tr>
                                <td style="color:#77716a;">Email</td>
                                <td align="right" style="overflow-wrap:anywhere;">
                                    {{ $order->email }}
                                </td>
                            </tr>
                            <tr>
                                <td style="color:#77716a;">Phone</td>
                                <td align="right">{{ $order->phone }}</td>
                            </tr>
                            <tr>
                                <td style="color:#77716a;">Product</td>
                                <td align="right">The Taste of Inspiration</td>
                            </tr>
                            <tr>
                                <td style="color:#77716a;">Quantity</td>
                                <td align="right">{{ $order->quantity }}</td>
                            </tr>
                            <tr>
                                <td style="color:#77716a; border-top:1px solid #ddd3c6; font-weight:bold;">Total</td>
                                <td align="right" style="border-top:1px solid #ddd3c6; font-size:18px; font-weight:bold;">
                                    € {{ number_format($order->total_price, 2, ',', '.') }}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Delivery address -->
                <tr>
                    <td style="padding:0 30px 35px;">
                        <p style="margin:0 0 12px; font-size:11px; letter-spacing:2px; color:#8a6a48;">
                            DELIVERY ADDRESS
                        </p>

                        <p style="margin:0; font-size:14px; line-height:25px; color:#625e57;">
                            {{ $order->name }}<br>
                            {{ $order->address }}<br>
                            {{ $order->postal_code }} {{ $order->city }}
                        </p>
                    </td>
                </tr>

                <!-- Footer -->
                <tr>
                    <td align="center" style="background-color:#292722; padding:30px 20px;">
                        <p style="margin:0 0 8px; font-family:Georgia,serif; font-size:19px; color:#ffffff;">
                            The Taste of Inspiration
                        </p>

                        <p style="margin:0; font-size:12px; line-height:21px; color:#c9c2b8;">
                            This is an internal order notification.<br>
                            A customer has completed payment for the order above.
                        </p>
                    </td>
                </tr>

            </table>
        </td>
    </tr>
</table>

</body>
</html>
