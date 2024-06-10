<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class CrmBascule extends Model
{
    use HasFactory,SoftDeletes;
    protected $guarded=[],$hidden=['deleted_at'];
    protected $appends = ['title'];

    public function getTitleAttribute()
    {
        return 'باسکول '.$this->type->title.' - '.$this->shipping->project->title;
    }

    public function shipping()
    {
        return $this->belongsTo(CrmShipping::class, 'crm_shipping_id');
    }

    public function goods()
    {
        return $this->belongsTo(Goods::class, 'goods_id');
    }

    public function type()
    {
        return $this->belongsTo(Constants::class, 'basculeType');
    }

    public function attach(): MorphOne
    {
        return $this->morphOne(Attachment::class, 'attachtable');
    }


}
