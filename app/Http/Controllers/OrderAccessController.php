<?php

namespace App\Http\Controllers;

use App\Mail\OrderAccessLink;
use App\Models\Order;
use App\Models\OrderAccessToken;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Throwable;

class OrderAccessController extends Controller
{
    public function requestLink(Request $request)
    {
        $validated = $request->validate([
            'email' => ['required', 'email', 'max:255'],
        ]);

        $email = Str::lower(trim($validated['email']));

        $rateLimitKey = 'order-access:'.hash('sha256', $email);

        $message = 'If orders exist for this email address, '
            .'you will receive a secure access link shortly.';

        if (RateLimiter::tooManyAttempts($rateLimitKey, 3)) {
            return back()->with('success', $message);
        }

        RateLimiter::hit($rateLimitKey, 900);

        $hasOrders = Order::query()
            ->whereRaw('LOWER(email) = ?', [$email])
            ->whereNotNull('mollie_payment_id')
            ->exists();

        if ($hasOrders) {
            $token = Str::random(64);

            $accessToken = OrderAccessToken::create([
                'email' => $email,
                'token_hash' => hash('sha256', $token),
                'expires_at' => now()->addMinutes(15),
            ]);

            $url = route('orders.access', [
                'token' => $token,
            ]);

            try {
                Mail::to($email)->send(
                    new OrderAccessLink($url)
                );
            } catch (Throwable $exception) {
                $accessToken->delete();

                report($exception);
            }
        }

        // Always return the same message.
        // Do not reveal whether an email has existing orders.
        return back()->with('success', $message);
    }

    public function access(Request $request, string $token)
    {
        $accessToken = OrderAccessToken::query()
            ->where('token_hash', hash('sha256', $token))
            ->whereNull('used_at')
            ->where('expires_at', '>', now())
            ->first();

        if (!$accessToken) {
            return redirect()
                ->route('orders.index')
                ->with('error', 'This access link is invalid or has expired.');
        }

        $request->session()->put('pending_order_access_token', $token);

        return redirect()->route('orders.access.confirm');
    }

    public function confirmation(Request $request)
    {
        if (!$request->session()->has('pending_order_access_token')) {
            return redirect()->route('orders.index');
        }

        return Inertia::render('orders/confirm')
            ->toResponse($request)
            ->header('Cache-Control', 'no-store, private')
            ->header('Referrer-Policy', 'no-referrer');
    }

    public function verify(Request $request)
    {
        $token = $request->session()->pull('pending_order_access_token');

        if (!$token) {
            return redirect()
                ->route('orders.index')
                ->with('error', 'Please request a new access link.');
        }

        $email = DB::transaction(function () use ($token) {
            $accessToken = OrderAccessToken::query()
                ->where('token_hash', hash('sha256', $token))
                ->whereNull('used_at')
                ->where('expires_at', '>', now())
                ->lockForUpdate()
                ->first();

            if (!$accessToken) {
                return null;
            }

            $accessToken->update([
                'used_at' => now(),
            ]);

            return $accessToken->email;
        });

        if (!$email) {
            return redirect()
                ->route('orders.index')
                ->with('error', 'This access link is invalid or has expired.');
        }

        $request->session()->regenerate();

        $request->session()->put([
            'order_access_email' => $email,
            'order_access_expires_at' => now()->addHour()->timestamp,
        ]);

        return redirect()
            ->route('orders.index')
            ->with('success', 'You now have secure access to your orders.');
    }

    public function logout(Request $request)
    {
        $request->session()->forget([
            'order_access_email',
            'order_access_expires_at',
            'pending_order_access_token',
        ]);

        $request->session()->regenerate();

        return redirect()->route('orders.index');
    }
}
