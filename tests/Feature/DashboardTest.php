<?php

use App\Models\User;

test('guests are redirected to login when accessing the dashboard', function () {
    $this->get('/dashboard')
        ->assertRedirect(route('login'));
});

test('guests are redirected to login when accessing admin', function () {
    $this->get('/admin')
        ->assertRedirect(route('login'));
});

test('administrators are redirected from dashboard to admin', function () {
    $admin = User::factory()->create([
        'is_admin' => true,
    ]);

    $this->actingAs($admin)
        ->get('/dashboard')
        ->assertRedirect(route('admin.dashboard'));
});

test('administrators can access the admin dashboard', function () {
    $admin = User::factory()->create([
        'is_admin' => true,
    ]);

    $this->actingAs($admin)
        ->get('/admin')
        ->assertOk();
});

test('regular users cannot access the dashboard', function () {
    $user = User::factory()->create([
        'is_admin' => false,
    ]);

    $this->actingAs($user)
        ->get('/dashboard')
        ->assertForbidden();
});

test('regular users cannot access the admin dashboard', function () {
    $user = User::factory()->create([
        'is_admin' => false,
    ]);

    $this->actingAs($user)
        ->get('/admin')
        ->assertForbidden();
});

test('regular users cannot access private orders', function () {
    $user = User::factory()->create([
        'is_admin' => false,
    ]);

    $this->actingAs($user)
        ->get('/admin/orders')
        ->assertForbidden();
});

test('regular users cannot access private artwork bids', function () {
    $user = User::factory()->create([
        'is_admin' => false,
    ]);

    $this->actingAs($user)
        ->get('/admin/bids')
        ->assertForbidden();
});

test('regular users cannot access contact messages', function () {
    $user = User::factory()->create([
        'is_admin' => false,
    ]);

    $this->actingAs($user)
        ->get('/admin/contacts')
        ->assertForbidden();
});
