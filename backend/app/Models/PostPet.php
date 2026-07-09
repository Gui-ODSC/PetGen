<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PostPet extends BaseModel
{
    protected $fillable = [
        'post_id',
        'pet_id',
    ];

    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }

    public function pet(): BelongsTo
    {
        return $this->belongsTo(Pet::class);
    }
}
