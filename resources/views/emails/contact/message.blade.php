<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nieuw contactbericht - Kunst Eten</title>
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
                       border: 1px solid #e5ddd2;
                   ">

                {{-- Header --}}
                <tr>
                    <td style="
                        background-color: #efe8dd;
                        padding: 40px;
                        text-align: center;
                    ">
                        <div style="
                            font-size: 10px;
                            letter-spacing: 4px;
                            text-transform: uppercase;
                            color: #8a6a48;
                            margin-bottom: 12px;
                        ">
                            Nieuw bericht
                        </div>

                        <div style="
                            font-family: Georgia, 'Times New Roman', serif;
                            font-size: 36px;
                            color: #292722;
                        ">
                            KUNST ETEN
                        </div>
                    </td>
                </tr>

                {{-- Intro --}}
                <tr>
                    <td style="padding: 40px 40px 25px;">
                        <div style="
                            font-size: 11px;
                            letter-spacing: 2px;
                            text-transform: uppercase;
                            color: #8a6a48;
                            margin-bottom: 12px;
                        ">
                            Contactformulier
                        </div>

                        <h1 style="
                            margin: 0 0 15px;
                            font-family: Georgia, 'Times New Roman', serif;
                            font-size: 28px;
                            font-weight: normal;
                        ">
                            Nieuw contactbericht
                        </h1>

                        <p style="
                            margin: 0;
                            color: #625e57;
                            font-size: 14px;
                            line-height: 1.8;
                        ">
                            Er is een nieuw bericht verstuurd via de website van
                            Kunst Eten.
                        </p>
                    </td>
                </tr>

                {{-- Contact details --}}
                <tr>
                    <td style="padding: 0 40px 25px;">

                        <table width="100%" cellpadding="0" cellspacing="0"
                               role="presentation"
                               style="background-color: #f7f3ec; padding: 25px;">

                            <tr>
                                <td colspan="2" style="
                                    padding-bottom: 18px;
                                    font-family: Georgia, 'Times New Roman', serif;
                                    font-size: 19px;
                                ">
                                    Contactgegevens
                                </td>
                            </tr>

                            <tr>
                                <td style="padding: 6px 0; color: #77716a;">
                                    Naam
                                </td>
                                <td align="right" style="padding: 6px 0;">
                                    {{ $contact->name }}
                                </td>
                            </tr>

                            <tr>
                                <td style="padding: 6px 0; color: #77716a;">
                                    E-mail
                                </td>
                                <td align="right" style="padding: 6px 0;">
                                    <a
                                        href="mailto:{{ $contact->email }}"
                                        style="color: #8a6a48; text-decoration: none;"
                                    >
                                        {{ $contact->email }}
                                    </a>
                                </td>
                            </tr>

                            @if($contact->phone)
                                <tr>
                                    <td style="padding: 6px 0; color: #77716a;">
                                        Telefoon
                                    </td>
                                    <td align="right" style="padding: 6px 0;">
                                        {{ $contact->phone }}
                                    </td>
                                </tr>
                            @endif

                            <tr>
                                <td style="padding: 6px 0; color: #77716a;">
                                    Onderwerp
                                </td>
                                <td align="right" style="padding: 6px 0;">
                                    {{ $contact->subject }}
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>

                {{-- Message --}}
                <tr>
                    <td style="padding: 10px 40px 40px;">

                        <div style="
                            margin-bottom: 12px;
                            font-size: 11px;
                            letter-spacing: 2px;
                            text-transform: uppercase;
                            color: #8a6a48;
                        ">
                            Bericht
                        </div>

                        <div style="
                            border-left: 2px solid #8a6a48;
                            padding: 5px 0 5px 20px;
                            color: #625e57;
                            font-size: 15px;
                            line-height: 1.8;
                            white-space: pre-line;
                        ">{{ $contact->message }}</div>

                    </td>
                </tr>

                {{-- Reply button --}}
                <tr>
                    <td style="padding: 0 40px 45px; text-align: center;">

                        <a
                            href="mailto:{{ $contact->email }}?subject=Re: {{ $contact->subject }}"
                            style="
                                display: inline-block;
                                background-color: #292722;
                                color: #ffffff;
                                text-decoration: none;
                                padding: 15px 25px;
                                font-size: 13px;
                                letter-spacing: 1px;
                            "
                        >
                            Beantwoord bericht →
                        </a>

                    </td>
                </tr>

                {{-- Footer --}}
                <tr>
                    <td style="
                        background-color: #292722;
                        padding: 30px 40px;
                        text-align: center;
                    ">
                        <div style="
                            font-family: Georgia, 'Times New Roman', serif;
                            font-size: 19px;
                            color: #ffffff;
                            margin-bottom: 8px;
                        ">
                            Kunst Eten
                        </div>

                        <div style="
                            color: #c9c2b8;
                            font-size: 11px;
                            line-height: 1.7;
                        ">
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
