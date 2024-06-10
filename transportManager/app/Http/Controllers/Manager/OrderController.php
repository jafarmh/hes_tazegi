<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Driver\Order\OrderOfferRequest;
use App\Services\OrderService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    private OrderService $orderService;
 
    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }
    function list() : JsonResponse {
        return $this->orderService->List();
    }

    function show($id) : JsonResponse {
        return $this->orderService->detail($id);
    }

    function newRequest(OrderOfferRequest $request) : JsonResponse {
        $driver=auth("driver")->user();
        $this->orderService->DeactiveRequestsDriver($driver,$request['crm_order_id']);
        return $this->orderService->newRequestDriver($driver,$request->validated());
    }
}
