<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PetBath extends BaseModel
{
    protected $fillable = [
        'date',
        'bath_type',
        'local',
        'professional',
        'products',
        'observations',
        'pet_id',
        'appointment_id',
    ];

    protected function casts(): array
    {
        return [
            'date' => 'datetime',
        ];
    }

    public function pet(): BelongsTo
    {
        return $this->belongsTo(Pet::class);
    }

    public function appointment(): BelongsTo
    {
        return $this->belongsTo(PetAppointment::class, 'appointment_id');
    }
}
