<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CrmShippingStatusLog extends Model
{
    use HasFactory;

    protected $guarded=[];

    function status() : BelongsTo {
        return $this->belongsTo(CrmShippingStatus::class,"status_id");
    }

}
