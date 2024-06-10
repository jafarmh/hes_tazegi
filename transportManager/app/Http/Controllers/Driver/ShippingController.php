<?php

namespace App\Http\Controllers\Driver;

use App\Http\Controllers\Controller;
use App\Http\Requests\Driver\Shipping\ShippingLocationLogRequest;
use App\Repositories\CrmShippingDriverLocationLogRepository;
use App\Services\Driver\ShippingService;
use Illuminate\Http\Request;

class ShippingController extends Controller
{
    public $shippingService;

    function __construct()  {
        $this->shippingService=new ShippingService();
    }

    public function shippingDoneList()
    {
        return $this->shippingService->getDoneListUser(auth("driver")->user()->id);
    }

    public function shippingActive()
    {
        return $this->shippingService->getActiveForUser(auth("driver")->user()->id);
    }

    public function shippingDetail(Request $request)
    {
        return $this->shippingService->getDetailById($request->id);
    }

        /**
     * @OA\Post(
     *     path="/shipping/location/log",
     *     tags={"Driver"},
     *     summary="add driver route location logs",
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={
     *     "crm_shipping_id",
     *     "lat",
     *     "lng",
    
     *      },
     *      @OA\Property(
     *          property="crm_shipping_id",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="lat",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="lng",
     *          type="string",
     *          ),

     *      )))
     * )
     */
    function addShippingLocationLogDriver(ShippingLocationLogRequest $request)  {
        return successResponse(CrmShippingDriverLocationLogRepository::NewItem($request->validated()));
    }

}
