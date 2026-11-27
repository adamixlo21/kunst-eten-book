<?php

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\OrderController as AdminOrderController;
use App\Http\Controllers\Admin\ContactController as AdminContactController;
use App\Http\Controllers\Admin\PaintingController as AdminPaintingController;
use App\Http\Controllers\Admin\BidController as AdminBidController;
use App\Http\Controllers\Admin\BookWaitlistController as AdminBookWaitlistController;
use App\Http\Controllers\Admin\WithdrawalController as AdminWithdrawalController;
use App\Http\Controllers\Admin\RefundController as AdminRefundController;


use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PaintingController;
use App\Http\Controllers\BidController;
use App\Http\Controllers\BookWaitlistController;
use App\Http\Controllers\OrderAccessController;
use App\Http\Controllers\MyOrdersController;
use App\Http\Controllers\WithdrawalController;


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

Route::get('/checkout/success/{order}', [
    OrderController::class,
    'checkoutSuccess',
])->name('checkout.success');

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
])->name('book-waitlist.store');

// Passwordless customer order access

Route::get('/orders', [MyOrdersController::class, 'index'])
    ->name('orders.index');

Route::post('/orders/access', [OrderAccessController::class, 'requestLink'])
    ->middleware('throttle:5,15')
    ->name('orders.access.request');

Route::get('/orders/access/confirm', [OrderAccessController::class, 'confirmation'])
    ->name('orders.access.confirm');

Route::get('/orders/access/{token}', [OrderAccessController::class, 'access'])
    ->where('token', '[A-Za-z0-9]{64}')
    ->middleware('throttle:20,1')
    ->name('orders.access');

Route::post('/orders/access/verify', [OrderAccessController::class, 'verify'])
    ->middleware('throttle:10,1')
    ->name('orders.access.verify');

Route::post('/orders/logout', [OrderAccessController::class, 'logout'])
    ->name('orders.logout');

Route::get('/orders/{order}', [MyOrdersController::class, 'show'])
    ->whereNumber('order')
    ->name('orders.show');


// Online withdrawal

Route::get('/withdrawal', [
    WithdrawalController::class,
    'index',
])->name('withdrawal.index');

Route::post('/withdrawal', [
    WithdrawalController::class,
    'store',
])
    ->middleware('throttle:10,1')
    ->name('withdrawal.store');

Route::get('/withdrawal/confirmation', [
    WithdrawalController::class,
    'confirmation',
])->name('withdrawal.confirmation');

Route::get('/withdrawal-form', [
    WithdrawalController::class,
    'form',
])->name('withdrawal.form');



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
        ])->middleware('throttle:10,1')
            ->name('book-waitlist.send-all');

        Route::post('/book-waitlist/{subscriber}/send', [
            AdminBookWaitlistController::class,
            'sendOne',
        ])->middleware('throttle:10,1')
            ->name('book-waitlist.send-one');

        // Withdrawal management

        Route::get('/withdrawals', [AdminWithdrawalController::class, 'index'])
            ->name('withdrawals.index');

        Route::get('/withdrawals/{withdrawal}', [AdminWithdrawalController::class, 'show'])
            ->name('withdrawals.show');

        Route::patch('/withdrawals/{withdrawal}/order', [AdminWithdrawalController::class, 'linkOrder'])
            ->name('withdrawals.link-order');

        Route::patch('/withdrawals/{withdrawal}/verify', [AdminWithdrawalController::class, 'verify'])
            ->name('withdrawals.verify');

        Route::patch('/withdrawals/{withdrawal}/status', [AdminWithdrawalController::class, 'updateStatus'])
            ->name('withdrawals.update-status');

        Route::patch('/withdrawals/{withdrawal}/evidence', [AdminWithdrawalController::class, 'registerEvidence'])
            ->name('withdrawals.register-evidence');

        Route::patch('/withdrawals/{withdrawal}/notes', [AdminWithdrawalController::class, 'updateNotes'])
            ->name('withdrawals.update-notes');


        // Refund management

        Route::post('/withdrawals/{withdrawal}/refunds', [
            AdminRefundController::class,
            'store',
        ])
            ->middleware('throttle:5,1')
            ->name('refunds.store');

        Route::patch('/withdrawals/{withdrawal}/refunds/{refund}/sync', [
            AdminRefundController::class,
            'synchronize',
        ])
            ->middleware('throttle:20,1')
            ->name('refunds.synchronize');



    });



// Dashboard without teams
Route::get('/dashboard', function () {
    return redirect()->route('admin.dashboard');
})->middleware(['auth', 'admin'])->name('dashboard');

require __DIR__.'/settings.php';
