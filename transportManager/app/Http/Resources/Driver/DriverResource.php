<?php

namespace App\Http\Resources\Driver;

use App\Repositories\CityRepository;
use App\Repositories\CrmDriverRepository;
use App\Services\Common\AttachmentService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DriverResource extends JsonResource
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
            "birthCity"=> $this->birthCity,
            "birthCityName"=> CityRepository::FindById($this->birthCity)->city?? $this->birthCityName,
            "cardValidationDate"=> $this->cardValidationDate,
            "cardValidationDateP"=> $this->cardValidationDateP,
            "certifcateIssueCity"=> $this->certifcateIssueCity,
            "certifcateIssueCityName"=> CityRepository::FindById($this->certifcateIssueCity),
            "certifcateNumber"=> $this->certifcateNumber,
            "certificateType"=> $this->certificateType,
            "certificateTypeTitle"=> $this->certificate?->title,
            "family"=> $this->family,
            "fatherName"=> $this->fatherName,
            "healthCardDate"=> $this->healthCardDate,
            "healthCardDateP"=> $this->healthCardDateP,
            "insuranceBranch"=> $this->insuranceBranch,
            "insurancecode"=> $this->insurancecode,
            "isActive"=> $this->isActive,
            "isActiveDriver"=>$this->isActiveDriver,
            "level"=> $this->level,
            "mobile"=> $this->mobile,
            "name"=> $this->name,
            "names"=> $this->names,
            "rate"=>2,
            "national_code"=> $this->national_code,
            "smartNumber"=> $this->smartNumber,
            "verification"=> $this->verification,
            "attach"=>$this->attach->toArray(),
            "attachmentChecked"=> AttachmentService::CheckHaveAllAttachments($this,"driverImg")
        ];
        
    }
}
