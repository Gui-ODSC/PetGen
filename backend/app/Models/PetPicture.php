<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PetPicture extends BaseModel
{
    protected $fillable = [
        'name',
        'path',
        'mime_type',
        'size',
        'is_main',
        'pet_id',
    ];

    protected function casts(): array
    {
        return [
            'is_main' => 'boolean',
        ];
    }

    public function pet(): BelongsTo
    {
        return $this->belongsTo(Pet::class);
    }
}
