<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PostComment extends BaseModel
{
    protected $fillable = [
        'comment',
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
