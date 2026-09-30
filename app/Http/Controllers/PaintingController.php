<?php

namespace App\Http\Controllers;

use App\Models\Painting;
use Inertia\Inertia;

class PaintingController extends Controller
{
    public function index()
    {
        $paintings = Painting::query()
            ->orderBy('sort_order')
            ->get([
                'id',
                'title',
                'slug',
                'description',
                'image',
                'starting_price',
                'bidding_open',
                'sort_order',
            ]);

        return Inertia::render('paintings/index', [
            'paintings' => $paintings,
        ]);
    }

    public function show(Painting $painting)
    {
        return Inertia::render('paintings/show', [
            'painting' => [
                'id' => $painting->id,
                'title' => $painting->title,
                'slug' => $painting->slug,
                'description' => $painting->description,
                'image' => $painting->image,
                'starting_price' => $painting->starting_price,
                'bidding_open' => $painting->bidding_open,
            ],
        ]);
    }
}
