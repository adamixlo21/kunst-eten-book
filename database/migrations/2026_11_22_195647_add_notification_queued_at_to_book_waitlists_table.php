<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasColumn('book_waitlists', 'notification_queued_at')) {
            Schema::table('book_waitlists', function (Blueprint $table) {
                $table->timestamp('notification_queued_at')->nullable();
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('book_waitlists', 'notification_queued_at')) {
            Schema::table('book_waitlists', function (Blueprint $table) {
                $table->dropColumn('notification_queued_at');
            });
        }
    }
};
