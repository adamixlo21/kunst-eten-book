<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('withdrawals', function (Blueprint $table) {
            $table->id();

            $table->foreignId('order_id')
                ->nullable()
                ->constrained()
                ->restrictOnDelete();

            $table->string('reference')->unique();

            $table->string('order_number');
            $table->string('name');
            $table->string('email');

            $table->unsignedInteger('quantity')->nullable();

            $table->text('reason')->nullable();

            $table->string('status')->default('submitted');

            $table->timestamp('submitted_at');
            $table->timestamp('return_received_at')->nullable();
            $table->timestamp('closed_at')->nullable();

            $table->text('admin_notes')->nullable();

            $table->timestamp('confirmation_email_sent_at')
                ->nullable();

            $table->timestamps();

            $table->index(['order_id', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('withdrawals');
    }
};
