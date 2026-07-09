<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;

class PetCategory extends BaseModel
{
    protected $fillable = [
        'name',
    ];

    public function races(): HasMany
    {
        return $this->hasMany(PetRace::class, 'category_id');
    }
}
