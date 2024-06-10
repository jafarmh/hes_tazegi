<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class State extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function transportationCode(): MorphOne
    {
        return $this->morphOne(TransportationCode::class, 'recordable');
    }
}
