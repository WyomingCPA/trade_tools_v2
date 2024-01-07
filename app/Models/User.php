<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function favoritesBond()
    {
        return $this->belongsToMany(Bond::class, 'favorite_bonds', 'user_id', 'bond_id')->withTimeStamps();
    }

    public function trashBond()
    {
        return $this->belongsToMany(Bond::class, 'trash_bonds', 'user_id', 'bond_id')->withTimeStamps();
    }

    public function favoritesStock()
    {
        return $this->belongsToMany(Stock::class, 'stock_favorites', 'user_id', 'stock_id')->withTimeStamps();
    }

    public function favoritesEtf()
    {
        return $this->belongsToMany(Etf::class, 'etf_favorites', 'user_id', 'etf_id')->withTimeStamps();
    }

    public function favoritesFuture()
    {
        return $this->belongsToMany(Futures::class, 'futures_favorites', 'user_id', 'futures_id')->withTimeStamps();
    }

    public function favoritesCryptocurrency()
    {
        return $this->belongsToMany(Cryptocurrency::class, 'cryptocurrency_favorites', 'user_id', 'cryptocurrencies_id')->withTimeStamps();
    }
}
