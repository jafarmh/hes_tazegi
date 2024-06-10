<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class CrmShipping extends Model
{
    use HasFactory;
    protected $guarded=[];


    public function driver()
    {
        return $this->belongsTo(CrmDriver::class, 'crm_driver_id');
    }

    public function origin_city()
    {
        return $this->belongsTo(City::class, 'origin_city_id');
    }

    public function destination_city()
    {
        return $this->belongsTo(City::class, 'destination_city_id');
    }

    public function routes()
    {
        return $this->hasMany(CrmShippingRoute::class, 'crm_shipping_id');
    }

    public function locations()
    {
        return $this->hasMany(CrmShippingLocation::class, 'crm_shipping_id');
    }

    public function remittance()
    {
        return $this->hasOne(CrmRemittance::class, 'crm_shipping_id');
    }

    public function waybill()
    {
        return $this->hasOne(CrmWaybill::class, 'crm_shipping_id');
    }
    public function contractor_company()
    {
        return $this->belongsTo(Company::class, 'contractor_company_id');
    }

    public function employer_company()
    {
        return $this->belongsTo(Company::class, 'employer_company_id');
    }


    public function opinionDriver()
    {
        return $this->hasOne(CrmRemittance::class, 'crm_shipping_id');
    }

    function shippingStatusLog() : HasMany {
        return $this->hasMany(CrmShippingStatusLog::class,'crm_shipping_id');
    }

    function shippingStatus() : HasManyThrough {
        return $this->hasManyThrough(CrmShippingStatus::class,CrmShippingStatusLog::class,"crm_shipping_id","id","id","status_id");
    }

 

}
