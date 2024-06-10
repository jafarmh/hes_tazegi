<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class CrmMessage extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function smstable(): MorphTo
    {
        return $this->morphTo();
    }

}
