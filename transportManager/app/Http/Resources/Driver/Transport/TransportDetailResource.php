<?php

namespace App\Http\Resources\Driver\Transport;

use App\Models\CrmDriver;
use App\Models\CrmDriverTransport;
use App\Repositories\ConstantRepository;
use App\Repositories\CrmDriverRepository;
use App\Repositories\CrmDriverTransportRepository;
use App\Repositories\CrmLoaderRepository;
use App\Repositories\CrmOwnerRepository;
use App\Services\Common\AttachmentService;
use App\Services\Common\ConstantService;
use App\Services\Common\DateService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransportDetailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
   
        return [
            "id"=> $this->id,
            "active"=>$this->active,
            "ownerCode"=>$this->ownerCode,
            "ownerView"=>$this->ownerView,
            "smart_number"=> $this->transport->smart_number,
            "smart_date"=> $this->transport->smart_date,
            "smart_dateP"=> DateService::ChangeDateToPersian($this->transport->smart_date),
            "car_number"=> $this->transport->car_number,
            "car_construction_year"=> $this->transport->car_construction_year,
            "car_vin"=> $this->transport->car_vin,
            "insurer_id"=> $this->transport->insurer_id,
            "insurer_name"=> ConstantRepository::FindById($this->transport->insurer_id)?->title,
            "insurance_date"=> $this->transport->insurance_date,
            "insurance_dateP"=> DateService::ChangeDateToPersian($this->transport->insurance_date),
            "insurance_number"=>$this->transport->insurance_number,
            "certificate_type"=> $this->transport->certificate_type,
            "certificate_type_title"=> ConstantRepository::FindById($this->transport->certificate_type)?->title,
            "technical_check_date"=> $this->transport->technical_check_date,
            "technical_check_dateP"=> DateService::ChangeDateToPersian($this->transport->technical_check_date),
            "crm_loader"=> CrmLoaderRepository::FindById($this->transport->crm_loader_id),
            "crm_owner"=> CrmOwnerRepository::FindById($this->transport->crm_owner_id),
            "brand"=> $this->transport->brand,
            "brandTitle"=> ConstantRepository::FindById($this->transport->brand)?->title,
            "created_at"=> $this->created_at,
            "created_atP"=> DateService::ChangeDateToPersian($this->created_at),
            "attachmentChecked"=> AttachmentService::CheckHaveAllAttachments(CrmDriverTransportRepository::FindByFields([
                "crm_driver_id"=>$this->crm_driver_id,
                "crm_transport_id"=>$this->crm_transport_id
            ]),"driverTransportImg"),
            "attach"=>$this->attach()->get(),

        ];
    }
}
