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
        'fulfillment_status',
        'mollie_payment_id',
        'confirmation_email_sent_at',
        'admin_notification_sent_at',
        'shipping_email_sent_at',
        'shipping_email_status',
    ];

    protected $casts = [
        'quantity' => 'integer',
        'total_price' => 'decimal:2',
        'confirmation_email_sent_at' => 'datetime',
        'admin_notification_sent_at' => 'datetime',
        'shipping_email_sent_at' => 'datetime',
    ];
}
