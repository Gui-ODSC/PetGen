<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProfilePicture extends BaseModel
{
    protected $fillable = [
        'path',
        'mime_type',
        'size',
        'profile_id',
    ];

    public function profile(): BelongsTo
    {
        return $this->belongsTo(Profile::class);
    }
}
