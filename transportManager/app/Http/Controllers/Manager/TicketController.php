<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\Ticket\AddTicketMessageRequest;
use App\Http\Requests\Manager\Ticket\GetListTicketRequest;
use App\Models\CrmDriver;
use App\Models\Employer;
use App\Models\Ticket;
use App\Models\TransportAssistant;
use App\Services\TicketService;
use Illuminate\Http\Request;

class TicketController extends Controller
{
     
    /**
     * @OA\Get(
     *     path="/manager/ticket",
     *     tags={"Manager"},
     *     summary="all tickets",
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\Parameter(name="model",in="query",required=true, @OA\Schema(type="string") ),

     * )
     */
    public function index(GetListTicketRequest $request)
    {
        $model=CrmDriver::class;
        if($request->model==="employer"){
            $model=Employer::class;
        }

        if($request->model==="assistant"){
            $model=TransportAssistant::class;
        }
      
        return TicketService::getListModelType($model);
    }

       /**
     * @OA\Get(
     *     path="/manager/ticket/{id}",
     *     tags={"Manager"},
     *     summary="detail tickets",
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\Parameter(name="id",in="path",required=true, @OA\Schema(type="string") ),

     * )
     */
    public function show(string $id)
    {
        return TicketService::detail($id);
    }
    /**
     * @OA\Post(
     *     path="/manager/ticket/{id}",
     *     tags={"Manager"},
     *     summary="reply tickets",
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter(name="id",in="path",required=true, @OA\Schema(type="string") ),

     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={ "text"},
  
     *      @OA\Property(
     *          property="text",
     *          type="string",
     *          example="Ticket message"
     *          ),
     *      @OA\Property(
     *          property="file",
     *          type="file"
     *          )
     *      )))
     * )
     */
    public function store(Ticket $ticket,AddTicketMessageRequest $request)
    {
        return TicketService::addReply($request->validated(),$ticket);
    }
}
