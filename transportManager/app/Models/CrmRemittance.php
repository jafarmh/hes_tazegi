<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class CrmRemittance extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $appends = ['title','user_title'];

    public function getTitleAttribute()
    {
        $title = 'از '.$this->origin_company_branch->company->name;
        $title .= ' به '.$this->destination_company_branch->company->name;
        return $title;
    }
    public function getUserTitleAttribute()
    {
        return $this->driver->name.' '.$this->driver->family.' - '.$this->driver->national_code;
    }

    public function shipping()
    {
        return $this->belongsTo(CrmShipping::class, 'crm_shipping_id' );
    }

    public function driver()
    {
        return $this->belongsTo(CrmDriver::class, 'crm_driver_id' );
    }

    public function transport()
    {
        return $this->belongsTo(CrmTransport::class, 'transport_id' );
    }

    public function origin_company_branch()
    {
        return $this->belongsTo(CompanyBranch::class, 'origin_company_branch_id');
    }

    public function destination_company_branch()
    {
        return $this->belongsTo(CompanyBranch::class, 'destination_company_branch_id');
    }

    public function workflowInstance(): MorphOne
    {
        return $this->morphOne(WorkflowInstance::class, 'main_module');
    }

}
