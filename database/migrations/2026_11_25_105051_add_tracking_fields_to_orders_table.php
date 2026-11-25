<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->string('shipping_carrier')->nullable();
            $table->string('tracking_number')->nullable();
            $table->text('tracking_url')->nullable();

            $table->timestamp('shipped_at')->nullable();
            $table->timestamp('delivered_at')->nullable();

            $table->index('email');
        });
    }

    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropIndex(['email']);

            $table->dropColumn([
                'shipping_carrier',
                'tracking_number',
                'tracking_url',
                'shipped_at',
                'delivered_at',
            ]);
        });
    }
};
