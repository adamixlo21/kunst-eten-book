
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $subjectLine }}</title>
</head>

<body style="margin:0;padding:32px 16px;background:#f3eee6;font-family:Arial,sans-serif;color:#25221f;">

<div style="max-width:580px;margin:auto;background:#faf8f4;padding:40px 30px;">

    <p style="color:#8a6a48;font-size:11px;font-weight:bold;letter-spacing:3px;text-transform:uppercase;">
        THE TASTE OF INSPIRATION
    </p>

    <hr style="margin:25px 0;border:0;border-top:1px solid #ded4c6;">

    <h1 style="font-family:Georgia,serif;font-size:36px;font-weight:normal;line-height:1.2;">
        {{ $subjectLine }}
    </h1>

    <div style="margin-top:24px;font-size:15px;line-height:1.9;color:#746b61;">
        {!! nl2br(e($bodyText)) !!}
    </div>

    <p style="margin-top:35px;">
        <a href="{{ url('/') }}"
           style="display:inline-block;background:#25221f;color:#ffffff;text-decoration:none;padding:16px 26px;font-size:12px;">
            Discover the Book
        </a>
    </p>

    <hr style="margin-top:45px;border:0;border-top:1px solid #ded4c6;">

    <p style="font-family:Georgia,serif;font-size:18px;font-style:italic;color:#8a6a48;">
        Five paintings. Five dishes. One book.
    </p>

    @if ($unsubscribeUrl)
        <p style="margin-top:25px;font-size:12px;line-height:1.8;color:#746b61;">
            You're receiving this email because you joined the book waitlist.
            <a href="{{ $unsubscribeUrl }}"
               style="color:#8a6a48;text-decoration:underline;">
                Unsubscribe
            </a>
        </p>
    @else
        <p style="margin-top:25px;font-size:12px;color:#746b61;">
            Test email — not sent to a waitlist subscriber.
        </p>
    @endif

</div>

</body>
</html>
