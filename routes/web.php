<?php

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;


use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Teams\TeamInvitationController;
use App\Http\Middleware\EnsureTeamMembership;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\OrderController as AdminOrderController;
use App\Http\Controllers\Admin\ContactController as AdminContactController;
use App\Http\Controllers\Admin\PaintingController as AdminPaintingController;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PaintingController;
use App\Http\Controllers\BidController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');

Route::get('/checkout', function (Request $request) {
    $quantity = max(1, (int) $request->query('quantity', 1));

    return Inertia::render('checkout', [
        'quantity' => $quantity,
    ]);
})->name('checkout');

Route::get('/payment/return/{order}', [OrderController::class, 'paymentReturn'])
    ->name('payment.return');

Route::get('/checkout/success/{order}', function (Order $order) {
    return Inertia::render('checkout-success', [
        'order' => [
            'id' => $order->id,
            'name' => $order->name,
            'quantity' => $order->quantity,
            'total_price' => $order->total_price,
            'status' => $order->status,
        ],
    ]);
})->name('checkout.success');

Route::post('/mollie/webhook', [OrderController::class, 'webhook'])
    ->name('mollie.webhook');


Route::post('/contact', [ContactController::class, 'store'])
    ->name('contact.store');


Route::get('/paintings', [PaintingController::class, 'index'])
    ->name('paintings.index');

Route::get('/paintings/{painting:slug}', [PaintingController::class, 'show'])
    ->name('paintings.show');

Route::post('/paintings/{painting:slug}/bids', [BidController::class, 'store'])
    ->name('paintings.bids.store');

Route::middleware(['auth'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::get('/', [AdminDashboardController::class, 'index'])
            ->name('dashboard');

        //orders
        Route::get('/orders', [AdminOrderController::class, 'index'])
            ->name('orders.index');

        Route::get('/orders/{order}', [AdminOrderController::class, 'show'])
            ->name('orders.show');

        Route::patch('/orders/{order}/status', [AdminOrderController::class, 'updateStatus'])
            ->name('orders.update-status');


        //contacts
        Route::get('/contacts', [AdminContactController::class, 'index'])
            ->name('admin.contacts.index');

        Route::get('/contacts/{contact}', [AdminContactController::class, 'show'])
            ->name('admin.contacts.show');

        Route::delete('/contacts/{contact}', [AdminContactController::class, 'destroy'])
            ->name('admin.contacts.destroy');

        //paintings
        Route::get('/paintings', [AdminPaintingController::class, 'index'])
            ->name('paintings.index');

        Route::get('/paintings/{painting}/edit', [AdminPaintingController::class, 'edit'])
            ->name('paintings.edit');

        Route::patch('/paintings/{painting}', [AdminPaintingController::class, 'update'])
            ->name('paintings.update');

        Route::delete('/paintings/{painting}', [AdminPaintingController::class, 'destroy'])
            ->name('paintings.destroy');

    });










Route::prefix('{current_team}')
    ->middleware(['auth', 'verified', EnsureTeamMembership::class])
    ->group(function () {
        Route::get('dashboard', DashboardController::class)
            ->name('dashboard');
    });

Route::middleware(['auth'])->group(function () {
    Route::post(
        'invitations/{invitation}/accept',
        [TeamInvitationController::class, 'accept']
    )->name('invitations.accept');

    Route::delete(
        'invitations/{invitation}',
        [TeamInvitationController::class, 'decline']
    )->name('invitations.decline');
});

require __DIR__.'/settings.php';
