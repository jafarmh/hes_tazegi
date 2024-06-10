<?php

namespace App\Http\Resources\Driver;

use App\Models\Transport;
use App\Repositories\CityRepository;
use App\Repositories\CrmDriverRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DriverShippingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

      
        return [
            "id"=>$this->id,
            "shippingStatus"=> $this->shippingStatus()->select("crm_shipping_statuses.id","crm_shipping_statuses.driver_title as title")->get(),
            "driver"=>$this->driver?->load("transport","transport.brand","transport.loader","transport.fleet"),
            "origin"=>$this->origin_city,
            "destination"=>$this->destination_city,
            "remittance"=>$this->remittance,
            "waybill"=>$this->waybill,
          
            
        ];
    }
    

}
