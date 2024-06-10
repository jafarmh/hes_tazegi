<?php

namespace App\Services;

use App\Http\Resources\Driver\Transport\TransportListResource;
use App\Models\CrmDriver;
use App\Models\CrmDriverTransport;
use App\Repositories\CrmDriverTransportRepository;
use App\Repositories\CrmOwnerRepository;
use App\Repositories\CrmTransportRepository;
use App\Services\Common\AttachmentService;
use App\Services\Driver\ShippingService;
use Illuminate\Http\Response;
use Illuminate\Support\Str;

class TransportService
{
    private $fileType = "driverTransportImg";

    function IsMineTransport($crmDriverTransport, $driver)
    {
        return $crmDriverTransport->crm_driver_id != $driver->id;
    }

    function addTransportDriver($request, CrmDriver $driver)
    {

        $ownerView = $request['ownerView'];
        $ownerName = $request['name'];
        $ownerNationalCode = $request['national_code'];
        $ownerMobile = $request['mobile'];

        unset($request['ownerView']);
        unset($request['name']);
        unset($request['national_code']);
        unset($request['mobile']);

        $owner = CrmOwnerRepository::FindByField("national_code", $ownerNationalCode);
        if ($owner === null) {
            $owner = CrmOwnerRepository::NewItem([
                "name" => $ownerName,
                "national_code" => $ownerNationalCode,
                "mobile" => $ownerMobile,
            ]);
        }else{
            CrmOwnerRepository::UpdateItem([
                "name" => $ownerName,
                "mobile" => $ownerMobile,
            ],$owner->id);
        }
        $transport = CrmTransportRepository::FindByField("smart_number", $request['smart_number']);
        if ($transport === null) {
            $request['crm_owner_id'] = $owner->id;
            $transport = CrmTransportRepository::NewItem($request);
        }
        //$this->deActiveDriverTransports($driver);

        $driverTransport = CrmDriverTransportRepository::NewItem([
            "crm_driver_id" => $driver->id,
            "crm_transport_id" => $transport->id,
            "ownerView" => $ownerView,
            "ownerCode" => $driver->id . Str::random(10) . $transport->id,
            "active" => "0"

        ]);


        return successResponse($driverTransport);
    }

    function deActiveDriverTransports(CrmDriver $driver)
    {
        $driver->driverTransport()->update(["active" => 0, "ownerCode" => ""]);
    }


    function DriverList(CrmDriver $driver)
    {;
        return successResponse(TransportListResource::collection($driver->driverTransport()->with("transport")->get()));
    }

    function activeTransportDriver($crmDriverTransport, CrmDriver $driver)
    {
        if ($this->IsMineTransport($crmDriverTransport, $driver)) {
            return failedResponse(__("common.notAllow"), Response::HTTP_FORBIDDEN);
        }

        $activeTransport = CrmDriverTransportRepository::FindByFields([
            "crm_transport_id" => $crmDriverTransport->crm_transport_id,
            "active" => 1
        ]);

        if ($activeTransport !== null) {
            return failedResponse(__("common.notAllow"), Response::HTTP_FORBIDDEN);
        }

        if (!AttachmentService::CheckHaveAllAttachments($crmDriverTransport, $this->fileType)) {
            return failedResponse(__("common.notAllow"), Response::HTTP_FORBIDDEN);
        }

        $myActiveTransport = CrmDriverTransportRepository::FindByFields([
            "active" => 1,
            "crm_driver_id" => $driver->id
        ]);

        if ($myActiveTransport !== null) {
            return failedResponse(__("common.notAllow"), Response::HTTP_FORBIDDEN);
        }

        $result = CrmDriverTransportRepository::UpdateItem([
            "active" => 1
        ], $crmDriverTransport->id);

        return successResponse($result);
    }

    function deActiveTransportDriver($crmDriverTransport, CrmDriver $driver)
    {

        if ($this->IsMineTransport($crmDriverTransport, $driver)) {
            return failedResponse(__("common.notAllow"), Response::HTTP_FORBIDDEN);
        }

        $shippingService = new ShippingService();
        $activeShipping = $shippingService->getActiveShippingDriver($driver->id);

        if ($activeShipping !== null) {
            return failedResponse(__("common.notAllow"), Response::HTTP_FORBIDDEN);
        }


        $result = CrmDriverTransportRepository::UpdateItem([
            "active" => 0
        ], $crmDriverTransport->id);

        return successResponse($result);
    }


    function addTransportDriverAttachment($request, CrmDriverTransport $crmDriverTransport, CrmDriver $driver)
    {
        if ($this->IsMineTransport($crmDriverTransport, $driver)) {
            return failedResponse(__("common.notAllow"), Response::HTTP_FORBIDDEN);
        }
        $attachments = AttachmentService::GetAllAttachments($request, $this->fileType);

        foreach ($attachments as $key => $value) {
            AttachmentService::SaveStorage($value, "crm_driver_transports", $crmDriverTransport, "image", $key);
        }

        return successResponse("");
    }

    function editTransportDriver($request, CrmDriverTransport $crmDriverTransport, CrmDriver $driver)
    { 
        if ($this->IsMineTransport($crmDriverTransport, $driver)) {
            return failedResponse(__("common.notAllow"), Response::HTTP_FORBIDDEN);
        }
        $this->EditTransportData($this->GetDataTransportForEdit($request), $crmDriverTransport);
        $this->EditTransportOwnerData($this->GetDataOwnerForEdit($request), $crmDriverTransport->transport()->first()->crm_owner_id);
        if(isset($request['ownerView'])){
            $this->EditDriverTransportData(["ownerView"=>$request['ownerView']],$crmDriverTransport);
        }

        return successResponse("");

    }

    function GetDataTransportForEdit($param): array
    {
        $newParam = $param;
        if (isset($newParam['ownerView']))
            unset($newParam['ownerView']);

        if (isset($newParam['name']))
            unset($newParam['name']);

        if (isset($newParam['national_code']))
            unset($newParam['national_code']);
        
        if (isset($newParam['mobile']))
            unset($newParam['mobile']);

        if (isset($newParam['ownerView']))
            unset($newParam['ownerView']);
 
        return $newParam;
    }

    function GetDataOwnerForEdit($param): array
    {
        $newParam = [];

        if (isset($param['name']))
            $newParam['name']=($param['name']);

        if (isset($param['national_code']))
            $newParam['national_code']=($param['national_code']);
        
        if (isset($param['mobile']))
            $newParam['mobile']=($param['mobile']);

        return $newParam;
    }

    function EditTransportData($param, CrmDriverTransport $crmDriverTransport)
    {
        CrmTransportRepository::UpdateItem($param,$crmDriverTransport->crm_transport_id);
    }

    function EditTransportOwnerData($param,$owner_id)
    {  
        return CrmOwnerRepository::UpdateItem($param,$owner_id);
    }

    function EditDriverTransportData($param, CrmDriverTransport $crmDriverTransport)
    {
       return CrmDriverTransportRepository::UpdateItem($param,$crmDriverTransport->id);
    }
}
