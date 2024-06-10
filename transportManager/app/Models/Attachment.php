<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

class Attachment extends Model
{
    use HasFactory;
    protected $hidden=[],$guarded=[];

    protected function path(): Attribute
    {
        return new Attribute(
            get: fn ($value) => $value!=null ? Storage::disk("public")->url($value) :null,
            //set: fn ($value) => $value!=null ? AttachController::GetAddressSaveStorageImage($value,"Product") :null
        );
    }
 

    public function attachtable(): MorphTo
    {
        return $this->morphTo();
    }
}
