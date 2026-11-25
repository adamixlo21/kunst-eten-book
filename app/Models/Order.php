<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

        // Email notifications
        'confirmation_email_sent_at',
        'admin_notification_sent_at',
        'shipping_email_sent_at',
        'shipping_email_status',

        // Shipping and tracking
        'shipping_carrier',
        'tracking_number',
        'tracking_url',
        'shipped_at',
        'delivered_at',
    ];

    protected $casts = [
        'quantity' => 'integer',
        'total_price' => 'decimal:2',
        'confirmation_email_sent_at' => 'datetime',
        'admin_notification_sent_at' => 'datetime',
        'shipping_email_sent_at' => 'datetime',
        'shipped_at' => 'datetime',
        'delivered_at' => 'datetime',
    ];

    public function withdrawals(): HasMany
    {
        return $this->hasMany(Withdrawal::class);
    }

    public function refunds(): HasMany
    {
        return $this->hasMany(Refund::class);
    }
}
