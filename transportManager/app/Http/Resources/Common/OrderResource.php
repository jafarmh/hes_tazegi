<?php

namespace App\Http\Resources\Common;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            "packaging" => $this->packaging,
            "goods" => $this->good,
            "goodItem" => $this->goodItem,
            "insurer" => $this->insurer,
            "packaging_count" => $this->packaging_count,
            "net_weight" => $this->net_weight,
            "goods_value" => $this->goods_value,
            "base_price" => number_format($this->base_price),
            "origin_city" => $this->origin,
            "loader"=>$this->loader,
            "destination_city" => $this->destination,
            "employer" => $this->employer()->with("company","people")->first(),
        ];
    }
}
