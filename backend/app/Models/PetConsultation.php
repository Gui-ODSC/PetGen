<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PetConsultation extends BaseModel
{
    protected $fillable = [
        'reason',
        'diagnosis',
        'treatment',
        'professional',
        'temperature',
        'observations',
        'pet_id',
        'appointment_id',
    ];

    public function pet(): BelongsTo
    {
        return $this->belongsTo(Pet::class);
    }

    public function appointment(): BelongsTo
    {
        return $this->belongsTo(PetAppointment::class, 'appointment_id');
    }
}
