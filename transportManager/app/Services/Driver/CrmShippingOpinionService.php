<?php
namespace App\Services\Driver;

use App\Enums\ResponseCode;
use App\Http\Resources\Driver\ShippingOpinionResource;
use App\Http\Resources\PaginateResource;
use App\Models\CrmDriver;
use App\Repositories\CrmShippingOpinionRepository;
use App\Repositories\CrmShippingRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class CrmShippingOpinionService
{

    function addCommentRate($request,CrmDriver $driver) : JsonResponse {
        $shipping=CrmShippingRepository::FindById($request['crm_shipping_id']);
        if(!$shipping->is_done){
            return failedResponse(__("common.notAllow"),ResponseCode::ACCEPTED,Response::HTTP_ACCEPTED);
        }
        $request['crm_driver_id']=$driver->id;
        $record=CrmShippingOpinionRepository::NewItem($request,$driver);
        return successResponse($record);
    }

    function getAllOpinionForDriver(CrmDriver $driver) : JsonResponse {
        $data=CrmShippingOpinionRepository::GetRecordByFields(["crm_driver_id"=>$driver->id])
        ->paginate(env("PAGINATE"));
        
        return successResponse (new PaginateResource($data, ShippingOpinionResource::collection($data)));

    }

    function getOpinionDetailForDriver($id,CrmDriver $driver) : JsonResponse {
        $data=CrmShippingOpinionRepository::GetRecordByFields(["id"=>$id,"crm_driver_id"=>$driver->id])
        ->paginate(env("PAGINATE"));
        
        return successResponse (new PaginateResource($data, ShippingOpinionResource::collection($data)));

    }

    
    function getDetailById($id)  {
        $data=CrmShippingOpinionRepository::FindById($id);
        if($data===null){
            return failedResponse(__("common.notFound"),ResponseCode::NOT_FOUND_DATA,Response::HTTP_NOT_FOUND);
        }
        return successResponse(new ShippingOpinionResource($data));
    }
 
}
