<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class CrmWaybill extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $appends = ['title','user_title'];

    public function getTitleAttribute()
    {
        $title = 'از '.$this->shipping->remittance->origin_company_branch->company->name;
        $title .= ' به '.$this->shipping->remittance->destination_company_branch->company->name;
        return $title;
    }
    public function getUserTitleAttribute()
    {
        return $this->first_driver->name.' '.$this->first_driver->family.' - '.$this->first_driver->national_code;
    }

    public function shipping()
    {
        return $this->belongsTo(CrmShipping::class, 'crm_shipping_id' );
    }

    public function first_driver()
    {
        return $this->belongsTo(CrmDriver::class, 'first_crm_driver_id' );
    }

    public function second_driver()
    {
        return $this->belongsTo(CrmDriver::class, 'second_crm_driver_id' );
    }

    public function freight_company()
    {
        return $this->belongsTo(Company::class, 'freight_company_id');
    }

    public function packaging()
    {
        return $this->belongsTo(Packaging::class, 'packaging_id');
    }

    public function goods()
    {
        return $this->belongsTo(Goods::class, 'goods_id');
    }

    public function insurer()
    {
        return $this->belongsTo(Insurer::class, 'insurer_id');
    }


    public function workflowInstance(): MorphOne
    {
        return $this->morphOne(WorkflowInstance::class, 'main_module');
    }


    public function financially()
    {
        return $this->hasMany(CrmWaybillFinancial::class, 'crm_waybill_id');
    }

}
