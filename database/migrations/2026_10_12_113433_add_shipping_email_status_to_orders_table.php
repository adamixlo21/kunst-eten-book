<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->string('shipping_email_status')
                ->default('pending');
        });

        // Preserve existing successful shipping notifications.
        DB::table('orders')
            ->whereNotNull('shipping_email_sent_at')
            ->update([
                'shipping_email_status' => 'sent',
            ]);
    }

    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('shipping_email_status');
        });
    }
};

