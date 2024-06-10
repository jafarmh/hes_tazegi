<?php

namespace App\Http\Resources\Common;

use App\Http\Resources\Driver\OrderDetailOfferResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

 
    public function toArray(Request $request): array
    {
        return [
            "packaging" => $this->packaging,
            "goods" => $this->good,
            "goodsItem" => $this->goodItem,
            "insurer" => $this->insurer,
            "packaging_count" => $this->packaging_count,
            "net_weight" => $this->net_weight,
            "goods_value" => $this->goods_value,
            "base_price" => $this->base_price,
            "origin_city" => $this->origin,
            "destination_city" => $this->destination,
            "employer" => $this->employer()->with("company","people")->first(),
            "loader"=>$this->loader,
            "offers"=> OrderDetailOfferResource::collection( $this->offers()
            ->with(["driver", "driver.attach" => function($q){
                $q->where('type', '=', 'image');
                $q->where('description', 'personnelImg' );
            }])
            ->orderByDesc("price")->get())
        ];
    }
}
