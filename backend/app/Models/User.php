<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Post;
use App\Models\PostComment;
use App\Models\PostFavorite;
use App\Models\PostLike;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'active',
        'email_verified_at',
        'last_login',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'active' => 'boolean',
            'email_verified_at' => 'datetime',
            'last_login' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function profile(): HasOne
    {
        return $this->hasOne(Profile::class);
    }

    public function pets(): HasMany
    {
        return $this->hasMany(Pet::class);
    }

    public function connections(): HasMany
    {
        return $this->hasMany(Connection::class);
    }

    public function connectedBy(): HasMany
    {
        return $this->hasMany(Connection::class, 'connected_user_id');
    }

    public function connectedUsers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'connections', 'user_id', 'connected_user_id')
            ->withPivot('status')
            ->withTimestamps();
    }

    public function connectedToUsers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'connections', 'connected_user_id', 'user_id')
            ->withPivot('status')
            ->withTimestamps();
    }

    public function petAppointments(): HasMany
    {
        return $this->hasMany(PetAppointment::class);
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    public function postComments(): HasMany
    {
        return $this->hasMany(PostComment::class);
    }

    public function postLikes(): HasMany
    {
        return $this->hasMany(PostLike::class);
    }

    public function postFavorites(): HasMany
    {
        return $this->hasMany(PostFavorite::class);
    }
}

