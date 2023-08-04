<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pic extends Model
{
    use HasFactory;
    protected $fillable = ['name','location_id'];

    public function location()
    {
        return $this->belongsTo(Location::class);
    }
    public function risk_register()
    {
        return $this->hasMany(RiskRegister::class);
    }
}
