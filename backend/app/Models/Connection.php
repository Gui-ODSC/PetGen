<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Connection extends BaseModel
{
    protected $fillable = [
        'status',
        'user_id',
        'connected_user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function connectedUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'connected_user_id');
    }
}
