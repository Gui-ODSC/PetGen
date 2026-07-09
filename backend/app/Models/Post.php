<?php

namespace App\Models;

use App\Models\PostComment;
use App\Models\PostFavorite;
use App\Models\PostLike;
use App\Models\PostPet;
use App\Models\PostPicture;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends BaseModel
{
    protected $fillable = [
        'title',
        'description',
        'status',
        'user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(PostComment::class);
    }

    public function likes(): HasMany
    {
        return $this->hasMany(PostLike::class);
    }

    public function pictures(): HasMany
    {
        return $this->hasMany(PostPicture::class);
    }

    public function postPets(): HasMany
    {
        return $this->hasMany(PostPet::class);
    }

    public function favorites(): HasMany
    {
        return $this->hasMany(PostFavorite::class);
    }

    public function pets(): BelongsToMany
    {
        return $this->belongsToMany(Pet::class, 'post_pets')->withTimestamps();
    }
}
