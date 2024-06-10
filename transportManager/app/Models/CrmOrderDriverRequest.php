<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CrmOrderDriverRequest extends Model
{
    use HasFactory;
    protected $guarded=[];

    function driver() : BelongsTo {
        return $this->belongsTo(CrmDriver::class,"crm_driver_id");
    }

    function order() : BelongsTo {
        return $this->belongsTo(CrmOrder::class,"crm_order_id");
    }

}
