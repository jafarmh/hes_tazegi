<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CrmShippingOpinionDriver extends Model
{
    use HasFactory;
    protected $guarded=[];

    function driver() : BelongsTo {
        return $this->belongsTo(CrmDriver::class,'crm_driver_id');
    }

    function shipping() : BelongsTo {
        return $this->belongsTo(CrmShipping::class,'crm_shipping_id');
    }

}
