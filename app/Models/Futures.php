<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Futures extends Model
{
    protected $fillable = ['name', 'figi', 'ticker', 'class_code', 'lot', 'currency'];

}
