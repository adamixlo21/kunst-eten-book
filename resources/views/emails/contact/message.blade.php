<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">

    <title>Nieuw contactbericht - Kunst Eten</title>

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

            .contact-value {
                text-align: left !important;
                display: block !important;
                padding-top: 2px !important;
                padding-bottom: 12px !important;
            }

            .contact-label {
                display: block !important;
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
    border="0"
    cellpadding="0"
    cellspacing="0"
    role="presentation"
    bgcolor="#f7f3ec"
    style="width: 100%; background-color: #f7f3ec;"
>
    <tr>
        <td
            align="center"
            bgcolor="#f7f3ec"
            style="
                background-color: #f7f3ec;
                padding: 40px 15px;
            "
        >

            <table
                class="email-container"
                width="620"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                bgcolor="#ffffff"
                style="
                    width: 100%;
                    max-width: 620px;
                    background-color: #ffffff;
                    border: 1px solid #e5ddd2;
                "
            >

                {{-- HEADER --}}
                <tr>
                    <td
                        align="center"
                        bgcolor="#efe8dd"
                        style="
                            padding: 42px 30px;
                            background-color: #efe8dd;
                            color: #292722;
                            text-align: center;
                        "
                    >
                        <div
                            style="
                                margin-bottom: 12px;
                                color: #8a6a48;
                                font-size: 10px;
                                line-height: 16px;
                                letter-spacing: 4px;
                                text-transform: uppercase;
                            "
                        >
                            Nieuw bericht
                        </div>

                        <div
                            style="
                                color: #292722;
                                font-family: Georgia, 'Times New Roman', serif;
                                font-size: 36px;
                                line-height: 42px;
                            "
                        >
                            KUNST ETEN
                        </div>
                    </td>
                </tr>

                {{-- INTRO --}}
                <tr>
                    <td
                        class="email-padding"
                        bgcolor="#ffffff"
                        style="
                            padding: 42px 40px 28px;
                            background-color: #ffffff;
                            color: #292722;
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
                            Contactformulier
                        </div>

                        <div
                            style="
                                margin-bottom: 15px;
                                color: #292722;
                                font-family: Georgia, 'Times New Roman', serif;
                                font-size: 29px;
                                line-height: 36px;
                            "
                        >
                            Nieuw contactbericht
                        </div>

                        <p
                            style="
                                margin: 0;
                                color: #625e57;
                                font-size: 14px;
                                line-height: 24px;
                            "
                        >
                            Er is een nieuw bericht verstuurd via de website
                            van Kunst Eten.
                        </p>
                    </td>
                </tr>

                {{-- CONTACTGEGEVENS --}}
                <tr>
                    <td
                        class="email-padding"
                        bgcolor="#ffffff"
                        style="
                            padding: 0 40px 30px;
                            background-color: #ffffff;
                        "
                    >

                        <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
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
                                    bgcolor="#f7f3ec"
                                    style="
                                        padding: 25px 25px 18px;
                                        background-color: #f7f3ec;
                                        color: #292722;
                                        font-family: Georgia, 'Times New Roman', serif;
                                        font-size: 20px;
                                        line-height: 26px;
                                    "
                                >
                                    Contactgegevens
                                </td>
                            </tr>

                            <tr>
                                <td
                                    class="contact-label"
                                    bgcolor="#f7f3ec"
                                    style="
                                        padding: 7px 10px 7px 25px;
                                        background-color: #f7f3ec;
                                        color: #77716a;
                                        font-size: 13px;
                                    "
                                >
                                    Naam
                                </td>

                                <td
                                    class="contact-value"
                                    align="right"
                                    bgcolor="#f7f3ec"
                                    style="
                                        padding: 7px 25px 7px 10px;
                                        background-color: #f7f3ec;
                                        color: #292722;
                                        font-size: 13px;
                                        font-weight: 600;
                                    "
                                >
                                    {{ $contact->name }}
                                </td>
                            </tr>

                            <tr>
                                <td
                                    class="contact-label"
                                    bgcolor="#f7f3ec"
                                    style="
                                        padding: 7px 10px 7px 25px;
                                        background-color: #f7f3ec;
                                        color: #77716a;
                                        font-size: 13px;
                                    "
                                >
                                    E-mail
                                </td>

                                <td
                                    class="contact-value"
                                    align="right"
                                    bgcolor="#f7f3ec"
                                    style="
                                        padding: 7px 25px 7px 10px;
                                        background-color: #f7f3ec;
                                        font-size: 13px;
                                    "
                                >
                                    <a
                                        href="mailto:{{ $contact->email }}"
                                        style="
                                            color: #8a6a48;
                                            text-decoration: none;
                                        "
                                    >
                                        {{ $contact->email }}
                                    </a>
                                </td>
                            </tr>

                            @if($contact->phone)
                                <tr>
                                    <td
                                        class="contact-label"
                                        bgcolor="#f7f3ec"
                                        style="
                                            padding: 7px 10px 7px 25px;
                                            background-color: #f7f3ec;
                                            color: #77716a;
                                            font-size: 13px;
                                        "
                                    >
                                        Telefoon
                                    </td>

                                    <td
                                        class="contact-value"
                                        align="right"
                                        bgcolor="#f7f3ec"
                                        style="
                                            padding: 7px 25px 7px 10px;
                                            background-color: #f7f3ec;
                                            color: #292722;
                                            font-size: 13px;
                                        "
                                    >
                                        {{ $contact->phone }}
                                    </td>
                                </tr>
                            @endif

                            <tr>
                                <td
                                    class="contact-label"
                                    bgcolor="#f7f3ec"
                                    style="
                                        padding: 7px 10px 25px 25px;
                                        background-color: #f7f3ec;
                                        color: #77716a;
                                        font-size: 13px;
                                    "
                                >
                                    Onderwerp
                                </td>

                                <td
                                    class="contact-value"
                                    align="right"
                                    bgcolor="#f7f3ec"
                                    style="
                                        padding: 7px 25px 25px 10px;
                                        background-color: #f7f3ec;
                                        color: #292722;
                                        font-size: 13px;
                                        font-weight: 600;
                                    "
                                >
                                    {{ $contact->subject }}
                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>

                {{-- BERICHT --}}
                <tr>
                    <td
                        class="email-padding"
                        bgcolor="#ffffff"
                        style="
                            padding: 5px 40px 40px;
                            background-color: #ffffff;
                        "
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
                            Bericht
                        </div>

                        <table
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                        >
                            <tr>
                                <td
                                    width="2"
                                    bgcolor="#8a6a48"
                                    style="
                                        width: 2px;
                                        background-color: #8a6a48;
                                    "
                                ></td>

                                <td
                                    bgcolor="#ffffff"
                                    style="
                                        padding: 4px 0 4px 20px;
                                        background-color: #ffffff;
                                        color: #625e57;
                                        font-size: 15px;
                                        line-height: 26px;
                                    "
                                >
                                    {!! nl2br(e($contact->message)) !!}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                {{-- BUTTON --}}
                <tr>
                    <td
                        class="email-padding"
                        align="center"
                        bgcolor="#ffffff"
                        style="
                            padding: 0 40px 45px;
                            background-color: #ffffff;
                            text-align: center;
                        "
                    >
                        <a
                            href="mailto:{{ $contact->email }}?subject={{ rawurlencode('Re: '.$contact->subject) }}"
                            style="
                                display: inline-block;
                                padding: 15px 27px;
                                background-color: #8a6a48;
                                color: #ffffff;
                                font-size: 13px;
                                line-height: 18px;
                                letter-spacing: 1px;
                                text-decoration: none;
                            "
                        >
                            Beantwoord bericht →
                        </a>
                    </td>
                </tr>

                {{-- FOOTER --}}
                <tr>
                    <td
                        align="center"
                        bgcolor="#efe8dd"
                        style="
                            padding: 30px 30px;
                            background-color: #efe8dd;
                            text-align: center;
                        "
                    >
                        <div
                            style="
                                margin-bottom: 7px;
                                color: #292722;
                                font-family: Georgia, 'Times New Roman', serif;
                                font-size: 19px;
                            "
                        >
                            Kunst Eten
                        </div>

                        <div
                            style="
                                color: #77716a;
                                font-size: 11px;
                                line-height: 18px;
                            "
                        >
                            Dit bericht is verzonden via het contactformulier
                            op de Kunst Eten website.
                        </div>
                    </td>
                </tr>

            </table>

        </td>
    </tr>
</table>

</body>
</html>
