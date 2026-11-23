
<!DOCTYPE html>
<html
    lang="{{ str_replace('_', '-', app()->getLocale()) }}"
    @class(['dark' => ($appearance ?? 'system') == 'dark'])
>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- System appearance preference --}}
    <script>
        (function () {
            const appearance = @json($appearance ?? 'system');

            if (appearance === 'system') {
                const prefersDark = window.matchMedia(
                    '(prefers-color-scheme: dark)'
                ).matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Initial page background --}}
    <style>
        html {
            background-color: #f3eee6;
        }

        html.dark {
            background-color: #25221f;
        }
    </style>

    {{-- Favicons --}}
    <link
        rel="icon"
        type="image/webp"
        href="/favicon.webp"
    >

    <link
        rel="apple-touch-icon"
        href="/favicon.webp"
    >

    {{-- Fonts --}}
    @fonts

    {{-- Vite --}}
    @viteReactRefresh

    @vite([
        'resources/css/app.css',
        'resources/js/app.tsx',
        "resources/js/pages/{$page['component']}.tsx"
    ])

    {{-- Inertia SEO metadata and SSR fallback --}}
    <x-inertia::head>
        <title>The Taste of Inspiration | Art &amp; Culinary Book</title>

        <meta
            data-inertia="description"
            name="description"
            content="Discover The Taste of Inspiration, an upcoming book bringing together five original paintings and five culinary creations. Join the waitlist."
        >
    </x-inertia::head>
</head>

<body class="font-sans antialiased">
<x-inertia::app />
</body>
</html>
