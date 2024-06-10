<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CrmShippingLocation extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function shipping()
    {
        return $this->belongsTo(CrmShipping::class, 'crm_shipping_id');
    }

    public function city()
    {
        return $this->belongsTo(City::class, 'city_id');
    }

}
