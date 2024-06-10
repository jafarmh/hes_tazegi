<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CrmWaybillFinancial extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function waybill()
    {
        return $this->belongsTo(CrmWaybill::class, 'crm_waybill_id');
    }

    public function type()
    {
        return $this->belongsTo(CrmWaybillCostType::class, 'crm_waybill_cost_type_id');
    }
}
