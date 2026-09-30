<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Painting extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'description',
        'image',
        'starting_price',
        'bidding_open',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'starting_price' => 'decimal:2',
            'bidding_open' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function bids(): HasMany
    {
        return $this->hasMany(Bid::class);
    }
}
