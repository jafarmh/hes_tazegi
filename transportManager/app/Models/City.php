<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class City extends Model
{
    use HasFactory;
    protected $guarded=[],$hidden=['created_at','updated_at'];

    public function state()
    {
        return $this->belongsTo(State::class, 'state_id');
    }

    public function transportationCode(): MorphOne
    {
        return $this->morphOne(TransportationCode::class, 'recordable');
    }
}
