<?php
namespace App\Services\Driver;

use App\Enums\ResponseCode;
use App\Http\Resources\Driver\DriverShippingActiveResource;
use App\Http\Resources\Driver\DriverShippingResource;
use App\Http\Resources\Driver\ShippingDetailResource;
use App\Http\Resources\PaginateResource;
use App\Repositories\CrmShippingRepository;
use Illuminate\Http\Response;

class ShippingService
{

    function getDoneListUser($driverId)  {
        $data=CrmShippingRepository::GetRecordByFields([
            "crm_driver_id"=>$driverId,
            "is_done"=>1
        ])
        ->paginate(env("PAGINATE"));
        return successResponse (new PaginateResource($data, DriverShippingResource::collection($data)));
    }

    function getActiveForUser($driverId)  {
        $data=$this->getActiveShippingDriver($driverId);
        if($data===null){
            return successResponse([]);
        }
        return successResponse (new DriverShippingActiveResource($data));
    }

    function getActiveShippingDriver($driverId)  {
        $data=CrmShippingRepository::GetRecordByFields([
            "crm_driver_id"=>$driverId,
            "is_done"=>0
        ])->first();

        return $data;
    }

    function getDetailById($id)  {
        $data=CrmShippingRepository::FindById($id);
        if($data===null){
            return failedResponse(__("common.notFound"),ResponseCode::NOT_FOUND_DATA,Response::HTTP_NOT_FOUND);
        }
        return successResponse(new ShippingDetailResource($data));
    }
    
}
