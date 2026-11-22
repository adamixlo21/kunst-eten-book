
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Waitlist Signup</title>
</head>

<body style="margin:0;padding:30px 14px;background:#f3eee6;font-family:Arial,sans-serif;color:#25221f;">

<div style="max-width:560px;margin:auto;background:#faf8f4;padding:35px;">

    <p style="font-size:11px;font-weight:bold;letter-spacing:2px;color:#8a6a48;">
        THE TASTE OF INSPIRATION
    </p>

    <h1 style="font-family:Georgia,serif;font-size:32px;font-weight:normal;">
        New waitlist signup!
    </h1>

    <p style="font-size:14px;line-height:1.8;color:#746b61;">
        Someone has joined the waitlist for your upcoming book.
    </p>

    <div style="margin-top:28px;padding:24px;background:#f0e8dd;">

        <p style="font-size:11px;font-weight:bold;color:#8a6a48;">
            SUBSCRIBER EMAIL
        </p>

        <p style="font-size:16px;overflow-wrap:anywhere;">
            {{ $subscriber->email }}
        </p>

        <p style="margin-top:22px;font-size:11px;font-weight:bold;color:#8a6a48;">
            SIGNUP DATE
        </p>

        <p style="font-size:14px;">
            {{ $subscriber->created_at->format('d M Y, H:i') }}
        </p>

    </div>

    <p style="margin-top:30px;">
        <a href="{{ url('/admin/book-waitlist') }}"
           style="display:inline-block;padding:16px 25px;background:#25221f;color:white;text-decoration:none;">
            VIEW WAITLIST
        </a>
    </p>

</div>

</body>
</html>
