<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;

class AppointmentType extends BaseModel
{
    protected $fillable = [
        'name',
        'description',
    ];

    public function appointments(): HasMany
    {
        return $this->hasMany(PetAppointment::class);
    }
}
