<?php

namespace App\Http\Resources\Driver;

use App\Repositories\CrmShippingStatusRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DriverShippingActiveResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {   
        $next=null;
        $nextStatus=($this->shippingStatus()->orderByDesc("id")->first()->next);
        if($nextStatus){
            $next=CrmShippingStatusRepository::FindById($nextStatus);
        }
        return [
            "id"=>$this->id,

            "shippingStatus"=>$this->shippingStatus()->orderByDesc("id")->take(3)->select("crm_shipping_statuses.id","crm_shipping_statuses.driver_title as title")->get(),
            "nextStatus"=>["id"=>$next->id,"title"=>$next->driver_title ],
            "driver"=>$this->driver?->load("transport","transport.brand","transport.loader","transport.fleet"),
            "origin"=>$this->origin_city,
            "destination"=>$this->destination_city,
            "remittance"=>$this->remittance?->load("origin_company_branch","destination_company_branch"),
            "waybill"=>$this->waybill()->with("goods","financially")->first(),
            "routes"=>$this->routes?->load("city"),
            "locations"=>$this->locations?->load("city"),
 
          
            
        ];
    }
}
