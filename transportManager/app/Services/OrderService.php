<?php
namespace App\Services;

use App\Http\Resources\Common\OrderDetailResource;
use App\Http\Resources\Common\OrderResource;
use App\Http\Resources\PaginateResource;
use App\Models\CrmDriver;
use App\Repositories\CrmOrderDriverRequestRepository;
use App\Repositories\CrmOrderRepository;
use Illuminate\Http\JsonResponse;

class OrderService
{

    function detail($id) : JsonResponse {
        $data=CrmOrderRepository::FindById($id);
        return successResponse(new OrderDetailResource($data));
    }

    function List() : JsonResponse {
        $data=CrmOrderRepository::Builder()->paginate(env("PAGINATE"));
        return successResponse (new PaginateResource($data, OrderResource::collection($data)));
    }

    function newRequestDriver(CrmDriver $driver,$request) : JsonResponse {
        $request['crm_driver_id']=$driver->id;
        $data=CrmOrderDriverRequestRepository::NewItem($request);
        return successResponse ($data);
    }

    function DeactiveRequestsDriver(CrmDriver $driver,$crm_order_id) : JsonResponse {

        $data=CrmOrderDriverRequestRepository::UpdateItemByFields(["crm_driver_id"=>$driver->id,"crm_order_id"=>$crm_order_id],["active"=>0]);
        return successResponse ($data);
    }


}
