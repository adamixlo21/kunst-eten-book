<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Bestelling bevestigd - Kunst Eten</title>
</head>

<body style="
    margin: 0;
    padding: 0;
    background-color: #f7f3ec;
    font-family: Arial, Helvetica, sans-serif;
    color: #292722;
">

<table width="100%" cellpadding="0" cellspacing="0" role="presentation"
       style="background-color: #f7f3ec; padding: 40px 15px;">

    <tr>
        <td align="center">

            <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                   style="
                       max-width: 620px;
                       background-color: #ffffff;
                       border-radius: 4px;
                       overflow: hidden;
                   ">

                {{-- Header --}}
                <tr>
                    <td style="
                        background-color: #efe8dd;
                        padding: 45px 40px;
                        text-align: center;
                    ">

                        <div style="
                            font-size: 11px;
                            letter-spacing: 4px;
                            text-transform: uppercase;
                            color: #8a6a48;
                            margin-bottom: 14px;
                        ">
                            Kunst · Eten · Inspiratie
                        </div>

                        <div style="
                            font-family: Georgia, 'Times New Roman', serif;
                            font-size: 38px;
                            color: #292722;
                        ">
                            KUNST ETEN
                        </div>

                    </td>
                </tr>

                {{-- Main content --}}
                <tr>
                    <td style="padding: 45px 45px 30px;">

                        <div style="
                            color: #8a6a48;
                            font-size: 11px;
                            letter-spacing: 2px;
                            text-transform: uppercase;
                            margin-bottom: 12px;
                        ">
                            Bestelling bevestigd
                        </div>

                        <h1 style="
                            margin: 0 0 20px;
                            font-family: Georgia, 'Times New Roman', serif;
                            font-size: 30px;
                            font-weight: normal;
                            line-height: 1.3;
                        ">
                            Bedankt, {{ $order->name }}.
                        </h1>

                        <p style="
                            margin: 0;
                            font-size: 15px;
                            line-height: 1.8;
                            color: #625e57;
                        ">
                            Je betaling is succesvol ontvangen.
                            We gaan je exemplaar van <strong>Kunst Eten</strong>
                            met zorg voorbereiden.
                        </p>

                    </td>
                </tr>

                {{-- Order --}}
                <tr>
                    <td style="padding: 0 45px 35px;">

                        <table width="100%" cellpadding="0" cellspacing="0"
                               style="
                                   background-color: #f7f3ec;
                                   padding: 25px;
                               ">

                            <tr>
                                <td colspan="2" style="
                                    font-family: Georgia, 'Times New Roman', serif;
                                    font-size: 20px;
                                    padding-bottom: 20px;
                                ">
                                    Bestelling #{{ $order->id }}
                                </td>
                            </tr>

                            <tr>
                                <td style="padding: 7px 0; color: #77716a;">
                                    Product
                                </td>

                                <td align="right" style="padding: 7px 0;">
                                    Kunst Eten
                                </td>
                            </tr>

                            <tr>
                                <td style="padding: 7px 0; color: #77716a;">
                                    Aantal
                                </td>

                                <td align="right" style="padding: 7px 0;">
                                    {{ $order->quantity }}
                                </td>
                            </tr>

                            <tr>
                                <td style="
                                    padding-top: 18px;
                                    border-top: 1px solid #ddd3c6;
                                    font-weight: bold;
                                ">
                                    Totaal
                                </td>

                                <td align="right" style="
                                    padding-top: 18px;
                                    border-top: 1px solid #ddd3c6;
                                    font-size: 18px;
                                    font-weight: bold;
                                ">
                                    € {{ number_format($order->total_price, 2, ',', '.') }}
                                </td>
                            </tr>

                        </table>

                    </td>
                </tr>

                {{-- Address --}}
                <tr>
                    <td style="padding: 0 45px 40px;">

                        <div style="
                            font-size: 11px;
                            letter-spacing: 2px;
                            text-transform: uppercase;
                            color: #8a6a48;
                            margin-bottom: 12px;
                        ">
                            Bezorgadres
                        </div>

                        <div style="
                            font-size: 14px;
                            line-height: 1.8;
                            color: #625e57;
                        ">
                            {{ $order->name }}<br>
                            {{ $order->address }}<br>
                            {{ $order->postal_code }} {{ $order->city }}
                        </div>

                    </td>
                </tr>

                {{-- Footer --}}
                <tr>
                    <td style="
                        background-color: #292722;
                        padding: 35px 40px;
                        text-align: center;
                    ">

                        <div style="
                            font-family: Georgia, 'Times New Roman', serif;
                            font-size: 20px;
                            color: #ffffff;
                            margin-bottom: 10px;
                        ">
                            Kunst Eten
                        </div>

                        <div style="
                            font-size: 12px;
                            line-height: 1.7;
                            color: #c9c2b8;
                        ">
                            Waar smaak, kunst en inspiratie samenkomen.
                            <br>
                            Bedankt voor je bestelling.
                        </div>

                    </td>
                </tr>

            </table>

        </td>
    </tr>

</table>

</body>
</html>
