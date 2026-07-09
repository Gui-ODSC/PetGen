<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PetVaccine extends BaseModel
{
    protected $fillable = [
        'name',
        'manufacturer',
        'lot_number',
        'date_administered',
        'next_due_date',
        'professional',
        'observations',
        'pet_id',
        'appointment_id',
    ];

    protected function casts(): array
    {
        return [
            'date_administered' => 'datetime',
            'next_due_date' => 'datetime',
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
