<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOneOrMany;

class CrmDriverTransport extends Model
{
    use HasFactory;
    protected $guarded=[];
    function driver() : HasMany {
        return $this->hasMany(CrmDriver::class);
    }
    function transport() : BelongsTo {
        return $this->belongsTo(CrmTransport::class,"crm_transport_id");
    }

    public function attach(): MorphOneOrMany
    {
        return $this->morphMany(Attachment::class, 'attachtable');
    }
    
}
