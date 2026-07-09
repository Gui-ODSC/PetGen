<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PetMedication extends BaseModel
{
    protected $fillable = [
        'name',
        'dosage',
        'frequency',
        'via_administration',
        'start_date',
        'end_date',
        'observations',
        'prescribed_by',
        'pet_id',
        'appointment_id',
    ];

    protected function casts(): array
    {
        return [
            'start_date' => 'datetime',
            'end_date' => 'datetime',
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
