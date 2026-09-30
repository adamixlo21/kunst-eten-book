<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'address',
        'postal_code',
        'city',
        'quantity',
        'total_price',
        'status',
        'mollie_payment_id',
        'confirmation_email_sent_at',

    ];

    protected $casts = [
        'quantity' => 'integer',
        'total_price' => 'decimal:2',
        'confirmation_email_sent_at' => 'datetime',
    ];
}
