<?php

namespace App\Http\Resources\Driver;

use App\Services\Common\DateService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShippingOpinionResource extends JsonResource
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
            "comment"=>$this->comment,
            "rate"=>$this->rate,
            "created_at"=>DateService::ChangeDateToPersian($this->created_at),
            "driver"=>$this->driver,
            "shipping"=>$this->shipping->load("origin_city","destination_city")
        ];
    }
}
