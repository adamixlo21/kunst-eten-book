<?php

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Support\Facades\Route;



//use App\Http\Controllers\DashboardController;
//use App\Http\Controllers\Teams\TeamInvitationController;
//use App\Http\Middleware\EnsureTeamMembership;

use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\OrderController as AdminOrderController;
use App\Http\Controllers\Admin\ContactController as AdminContactController;
use App\Http\Controllers\Admin\PaintingController as AdminPaintingController;
use App\Http\Controllers\Admin\BidController as AdminBidController;
use App\Http\Controllers\Admin\BookWaitlistController as AdminBookWaitlistController;


use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PaintingController;
use App\Http\Controllers\BidController;
use App\Http\Controllers\BookWaitlistController;

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




// legal

Route::get('/privacy-policy', function () {
    return Inertia::render('legal/privacy-policy');
})->name('privacy-policy');

Route::get('/terms-and-conditions', function () {
    return Inertia::render('legal/terms-and-conditions');
})->name('terms-and-conditions');

Route::get('/shipping-and-returns', function () {
    return Inertia::render('legal/shipping-and-returns');
})->name('shipping-and-returns');


// waitlist
Route::get('/book-waitlist/unsubscribe/{token}', [
    BookWaitlistController::class,
    'unsubscribe',
])->name('book-waitlist.unsubscribe');

Route::post('/book-waitlist/unsubscribe/{token}', [
    BookWaitlistController::class,
    'confirmUnsubscribe',
])
    ->middleware('throttle:5,60')
    ->name('book-waitlist.unsubscribe.confirm');

// Public waitlist signup
Route::post('/book-waitlist', [
    BookWaitlistController::class,
    'store',
])
    ->middleware('throttle:5,60')
    ->name('book-waitlist.store');


Route::middleware(['auth', 'admin'])
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

        // Fulfillment management
        Route::patch('/orders/{order}/fulfillment', [AdminOrderController::class, 'updateFulfillment'])
            ->name('orders.update-fulfillment');

        //contacts
        Route::get('/contacts', [AdminContactController::class, 'index'])
            ->name('contacts.index');

        Route::get('/contacts/{contact}', [AdminContactController::class, 'show'])
            ->name('contacts.show');

        Route::delete('/contacts/{contact}', [AdminContactController::class, 'destroy'])
            ->name('contacts.destroy');

        //paintings
        Route::get('/paintings', [AdminPaintingController::class, 'index'])
            ->name('paintings.index');

        Route::get('/paintings/{painting}/edit', [AdminPaintingController::class, 'edit'])
            ->name('paintings.edit');

        Route::patch('/paintings/{painting}', [AdminPaintingController::class, 'update'])
            ->name('paintings.update');

        Route::delete('/paintings/{painting}', [AdminPaintingController::class, 'destroy'])
            ->name('paintings.destroy');

        // Private artwork bids
        Route::get('/bids', [AdminBidController::class, 'index'])
            ->name('bids.index');

        // waitlist
        Route::get('/book-waitlist', [
            AdminBookWaitlistController::class,
            'index',
        ])->name('book-waitlist.index');

        Route::post('/book-waitlist/send-test', [
            AdminBookWaitlistController::class,
            'sendTest',
        ])->middleware('throttle:5,1')
            ->name('book-waitlist.send-test');

        Route::post('/book-waitlist/send-all', [
            AdminBookWaitlistController::class,
            'sendAll',
        ])->middleware('throttle:1,1')
            ->name('book-waitlist.send-all');

        Route::post('/book-waitlist/{subscriber}/send', [
            AdminBookWaitlistController::class,
            'sendOne',
        ])->middleware('throttle:10,1')
            ->name('book-waitlist.send-one');


    });



// Dashboard without teams
Route::get('/dashboard', function () {
    return redirect()->route('admin.dashboard');
})->middleware(['auth', 'admin'])->name('dashboard');

require __DIR__.'/settings.php';
