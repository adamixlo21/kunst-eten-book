<?php

use App\Models\User;

test('registration page is not available', function () {
    $this->get('/register')
        ->assertNotFound();
});

test('public registration endpoint is not available', function () {
    $this->post('/register', [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ])->assertNotFound();

    $this->assertDatabaseMissing('users', [
        'email' => 'test@example.com',
    ]);
});

test('registration routes are disabled', function () {
    expect(Route::has('register'))->toBeFalse();
    expect(Route::has('register.store'))->toBeFalse();
});

test('existing users can still access the login page', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get('/admin')
        ->assertForbidden();

    $this->post('/logout')
        ->assertRedirect('/');

    $this->get('/login')
        ->assertOk();
});
