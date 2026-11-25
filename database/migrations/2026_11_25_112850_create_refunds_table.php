<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('refunds', function (Blueprint $table) {
            $table->id();

            $table->foreignId('order_id')
                ->constrained()
                ->restrictOnDelete();

            $table->foreignId('withdrawal_id')
                ->nullable()
                ->constrained()
                ->restrictOnDelete();

            $table->uuid('reference')->unique();

            $table->string('mollie_refund_id')
                ->nullable()
                ->unique();

            $table->decimal('amount', 8, 2);

            $table->string('currency', 3)->default('EUR');

            $table->string('status')->default('created');

            $table->text('description')->nullable();

            $table->timestamp('refunded_at')->nullable();

            $table->timestamp('confirmation_email_sent_at')
                ->nullable();

            $table->timestamps();

            $table->index(['order_id', 'status']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('refunds');
    }
};
