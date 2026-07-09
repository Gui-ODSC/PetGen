<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PetRace extends BaseModel
{
    protected $fillable = [
        'name',
        'category_id',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(PetCategory::class, 'category_id');
    }

    public function pets(): HasMany
    {
        return $this->hasMany(Pet::class, 'race_id');
    }
}
