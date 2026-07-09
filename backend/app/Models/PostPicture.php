<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PostPicture extends BaseModel
{
    protected $fillable = [
        'name',
        'path',
        'mime_type',
        'size',
        'order',
        'post_id',
    ];

    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }
}
