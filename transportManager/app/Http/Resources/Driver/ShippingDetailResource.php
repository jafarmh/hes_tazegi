<?php

namespace App\Http\Resources\Driver;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShippingDetailResource extends JsonResource
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
            "shippingStatus"=>$this->shippingStatus()->orderByDesc("id")->select("crm_shipping_statuses.id","crm_shipping_statuses.driver_title as title")->get(),
            "driver"=>$this->driver?->load("transport","transport.brand","transport.loader","transport.fleet"),
            "origin"=>$this->origin_city,
            "destination"=>$this->destination_city,
            "remittance"=>$this->remittance?->load("origin_company_branch","destination_company_branch"),
            "waybill"=>$this->waybill()->with("goods","financially","financially.type")->first(),
            "routes"=>$this->routes?->load("city"),
            "locations"=>$this->locations?->load("city"),
 
          
            
        ];
    }
}
