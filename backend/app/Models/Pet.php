<?php

namespace App\Models;

use App\Models\PetBath;
use App\Models\PetConsultation;
use App\Models\PetMedication;
use App\Models\PetVaccine;
use App\Models\Post;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Pet extends BaseModel
{
    protected $fillable = [
        'name',
        'date_birth',
        'sex',
        'weight',
        'size',
        'castrated',
        'microchipped',
        'microchip_number',
        'description',
        'user_id',
        'race_id',
    ];

    protected function casts(): array
    {
        return [
            'date_birth' => 'datetime',
            'castrated' => 'boolean',
            'microchipped' => 'boolean',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function race(): BelongsTo
    {
        return $this->belongsTo(PetRace::class, 'race_id');
    }

    public function pictures(): HasMany
    {
        return $this->hasMany(PetPicture::class);
    }

    public function appointments(): HasMany
    {
        return $this->hasMany(PetAppointment::class);
    }

    public function medications(): HasMany
    {
        return $this->hasMany(PetMedication::class);
    }

    public function vaccines(): HasMany
    {
        return $this->hasMany(PetVaccine::class);
    }

    public function consultations(): HasMany
    {
        return $this->hasMany(PetConsultation::class);
    }

    public function baths(): HasMany
    {
        return $this->hasMany(PetBath::class);
    }

    public function posts(): BelongsToMany
    {
        return $this->belongsToMany(Post::class, 'post_pets')->withTimestamps();
    }
}
