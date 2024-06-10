<?php

namespace App\Http\Controllers\Driver;

use App\Http\Controllers\Controller;
use App\Http\Requests\Driver\Transport\AddTransportRequest;
use App\Http\Requests\Driver\Transport\EditTransportRequest;
use App\Http\Resources\Driver\Transport\TransportDetailResource;
use App\Models\CrmDriverTransport;
use App\Services\TransportService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TransportController extends Controller
{

    function list(TransportService $TransportService) {
        return $TransportService->DriverList(auth("driver")->user());
    }
    function show(CrmDriverTransport $crmDriverTransport) {
        if($crmDriverTransport->crm_driver_id!==auth("driver")->user()->id){
            return failedResponse(__("common.notAllow"),Response::HTTP_FORBIDDEN);
        }
        return successResponse(new TransportDetailResource($crmDriverTransport));
    }
 
    function addTransport(AddTransportRequest $request,TransportService $TransportService)  {
        return $TransportService->addTransportDriver($request->validated(),auth("driver")->user());
    }

    function addAttachment(CrmDriverTransport $crmDriverTransport,Request $request,TransportService $TransportService)  {
        return $TransportService->addTransportDriverAttachment($request->toArray(),$crmDriverTransport,auth("driver")->user());
    }
 
    function editTransport(CrmDriverTransport $crmDriverTransport,EditTransportRequest $request,TransportService $TransportService)  {
        return $TransportService->editTransportDriver($request->validated(),$crmDriverTransport,auth("driver")->user());
    }

    /**
     * @OA\Put(
     *     path="driver/transport/active/{id}",
     *     tags={"Driver"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={},


     *      )))
     * )
     */

    function active(CrmDriverTransport $crmDriverTransport,TransportService $TransportService)  {
        return $TransportService->activeTransportDriver($crmDriverTransport,auth("driver")->user());
    }

    /**
     * @OA\Put(
     *     path="driver/transport/deActive/{id}",
     *     tags={"Driver"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={},


     *      )))
     * )
     */

    function deActive(CrmDriverTransport $crmDriverTransport,TransportService $TransportService)  {
        return $TransportService->deActiveTransportDriver($crmDriverTransport,auth("driver")->user());
    }

}
