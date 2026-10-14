<?php

namespace App\Console\Commands;

use App\Models\Painting;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ImportPaintings extends Command
{
    protected $signature = 'paintings:import';

    protected $description = 'Import paintings from database/imports/paintings.json';

    public function handle(): int
    {
        $path = database_path('imports/paintings.json');

        if (! file_exists($path)) {
            $this->error('Painting JSON file not found.');

            return self::FAILURE;
        }

        try {
            $paintings = json_decode(
                file_get_contents($path),
                true,
                512,
                JSON_THROW_ON_ERROR
            );
        } catch (\JsonException $e) {
            $this->error('Invalid JSON: '.$e->getMessage());

            return self::FAILURE;
        }

        if (! is_array($paintings)) {
            $this->error('Invalid painting data.');

            return self::FAILURE;
        }

        DB::transaction(function () use ($paintings) {
            foreach ($paintings as $painting) {
                DB::table('paintings')->updateOrInsert(
                    ['slug' => $painting['slug']],
                    [
                        'title' => $painting['title'],
                        'description' => $painting['description'],
                        'image' => $painting['image'],
                        'starting_price' => $painting['starting_price'],
                        'bidding_open' => $painting['bidding_open'],
                        'sort_order' => $painting['sort_order'],
                        'created_at' => $painting['created_at'],
                        'updated_at' => $painting['updated_at'],
                    ]
                );
            }
        });

        $this->info(count($paintings).' paintings imported successfully.');

        return self::SUCCESS;
    }
}
