<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Profile extends BaseModel
{
    protected $fillable = [
        'bio',
        'about_me',
        'city',
        'state',
        'private',
        'user_id',
    ];

    protected function casts(): array
    {
        return [
            'private' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function pictures(): HasMany
    {
        return $this->hasMany(ProfilePicture::class);
    }
}
