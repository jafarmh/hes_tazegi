<?php

namespace App\Http\Resources\Driver;

use App\Services\Common\DateService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderDetailOfferResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);

        return [
            "id"=>$this->id,
            "price"=>$this->price,
            "createdAtP"=>DateService::ChangeDateToPersian($this->created_at),
            "driverName"=>$this->driver->names,
            "driverProfileImg"=>$this->driver->attach[0]->path
        ];
    }
}
