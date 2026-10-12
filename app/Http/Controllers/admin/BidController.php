<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bid;
use Inertia\Inertia;
use Inertia\Response;

class BidController extends Controller
{
    public function index(): Response
    {
        $bids = Bid::query()
            ->with('painting:id,title,slug')
            ->latest()
            ->get()
            ->map(function (Bid $bid) {
                return [
                    'id' => $bid->id,
                    'name' => $bid->name,
                    'email' => $bid->email,
                    'phone' => $bid->phone,
                    'amount' => $bid->amount,
                    'created_at' => $bid->created_at->toIso8601String(),
                    'painting' => $bid->painting ? [
                        'id' => $bid->painting->id,
                        'title' => $bid->painting->title,
                        'slug' => $bid->painting->slug,
                    ] : null,
                ];
            });

        return Inertia::render('admin/bids/index', [
            'bids' => $bids,
        ]);
    }
}
