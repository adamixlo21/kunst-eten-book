<?php

namespace App\Http\Middleware;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template loaded on the first page visit.
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props shared with Inertia React.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();

        return [
            ...parent::share($request),

            'name' => config('app.name'),

            'auth' => [
                'user' => $user,
            ],

            'sidebarOpen' =>
                ! $request->hasCookie('sidebar_state') ||
                $request->cookie('sidebar_state') === 'true',

            'unreadContactCount' => fn () =>
            $user?->is_admin
                ? Contact::where('is_read', false)->count()
                : 0,
        ];
    }
}
