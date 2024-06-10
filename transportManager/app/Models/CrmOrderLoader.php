<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CrmOrderLoader extends Model
{
    use HasFactory;
    protected $guarded=[];

    function order() : BelongsTo {
        return $this->belongsTo(CrmOrder::class,"crm_order_id");
    }
    function loader() : BelongsTo {
        return $this->belongsTo(CrmLoader::class,"crm_loader_id");
    }

}
