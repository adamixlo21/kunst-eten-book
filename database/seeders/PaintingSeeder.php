<?php

namespace Database\Seeders;

use App\Models\Painting;
use Illuminate\Database\Seeder;

class PaintingSeeder extends Seeder
{
    public function run(): void
    {
        $paintings = [
            [
                'title' => 'The Soul Door',
                'slug' => 'the-soul-door',
                'description' => null,
                'image' => null,
                'starting_price' => 1000.00,
                'bidding_open' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'She',
                'slug' => 'she',
                'description' => null,
                'image' => null,
                'starting_price' => 1000.00,
                'bidding_open' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'The Silent Melody',
                'slug' => 'the-silent-melody',
                'description' => null,
                'image' => null,
                'starting_price' => 1000.00,
                'bidding_open' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'Moment of Peace',
                'slug' => 'moment-of-peace',
                'description' => null,
                'image' => null,
                'starting_price' => 1000.00,
                'bidding_open' => true,
                'sort_order' => 4,
            ],
            [
                'title' => 'Fleur',
                'slug' => 'fleur',
                'description' => null,
                'image' => null,
                'starting_price' => 1000.00,
                'bidding_open' => true,
                'sort_order' => 5,
            ],
        ];

        foreach ($paintings as $painting) {
            Painting::updateOrCreate(
                ['slug' => $painting['slug']],
                $painting,
            );
        }
    }
}
