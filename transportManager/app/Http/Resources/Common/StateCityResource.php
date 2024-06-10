<?php

namespace App\Http\Resources\Common;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StateCityResource extends JsonResource
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
            "title"=>$this->city,
            "code"=>$this->transportationCode->code,
            "state_id"=>$this->state_id,
            "state_title"=>$this->state->state,
            "state_code"=>$this->state->transportationCode->code,
        ];
    }
}
