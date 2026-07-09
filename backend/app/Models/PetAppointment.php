<?php

namespace App\Models;

use App\Models\PetBath;
use App\Models\PetConsultation;
use App\Models\PetMedication;
use App\Models\PetVaccine;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PetAppointment extends BaseModel
{
    protected $fillable = [
        'title',
        'description',
        'date_time',
        'status',
        'location',
        'professional_name',
        'pet_id',
        'user_id',
        'appointment_type_id',
    ];

    protected function casts(): array
    {
        return [
            'date_time' => 'datetime',
        ];
    }

    public function pet(): BelongsTo
    {
        return $this->belongsTo(Pet::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function appointmentType(): BelongsTo
    {
        return $this->belongsTo(AppointmentType::class);
    }

    public function medications(): HasMany
    {
        return $this->hasMany(PetMedication::class, 'appointment_id');
    }

    public function vaccines(): HasMany
    {
        return $this->hasMany(PetVaccine::class, 'appointment_id');
    }

    public function consultations(): HasMany
    {
        return $this->hasMany(PetConsultation::class, 'appointment_id');
    }

    public function baths(): HasMany
    {
        return $this->hasMany(PetBath::class, 'appointment_id');
    }
}
