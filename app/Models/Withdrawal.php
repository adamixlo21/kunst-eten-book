<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Withdrawal extends Model
{
    protected $fillable = [
        'order_id',
        'reference',
        'order_number',
        'name',
        'email',
        'quantity',
        'reason',
        'status',
        'submitted_at',
        'return_received_at',
        'closed_at',
        'admin_notes',
        'confirmation_email_sent_at',
    ];

    protected $casts = [
        'quantity' => 'integer',
        'submitted_at' => 'datetime',
        'return_received_at' => 'datetime',
        'closed_at' => 'datetime',
        'confirmation_email_sent_at' => 'datetime',
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function refunds(): HasMany
    {
        return $this->hasMany(Refund::class);
    }
}
