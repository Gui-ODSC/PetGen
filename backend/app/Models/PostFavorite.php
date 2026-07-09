<?php

namespace App\Models;

use App\Models\Post;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PostFavorite extends BaseModel
{
    protected $fillable = [
        'post_id',
        'user_id',
    ];

    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
