<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookWaitlist extends Model
{
    protected $fillable = [
        'email',
        'consented_at',
        'notified_at',
        'unsubscribe_token',
        'unsubscribed_at',
    ];

    protected $casts = [
        'consented_at' => 'datetime',
        'notified_at' => 'datetime',
        'unsubscribed_at' => 'datetime',
    ];

    public function getIsSubscribedAttribute(): bool
    {
        return $this->unsubscribed_at === null;
    }
}
