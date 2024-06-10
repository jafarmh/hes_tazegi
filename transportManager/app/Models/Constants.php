<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Constants extends Model
{
    use HasFactory,SoftDeletes;
    protected $guarded=[],$hidden=['deleted_at','created_at','updated_at'];

    public function type()
    {
        return $this->belongsTo(ConstantType::class, 'constant_type_id');
    }

    public function transportationCode(): MorphOne
    {
        return $this->morphOne(TransportationCode::class, 'recordable');
    }

}
