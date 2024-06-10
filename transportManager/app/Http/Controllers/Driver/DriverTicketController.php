<?php

namespace App\Http\Controllers\Driver;

use App\Http\Controllers\Controller;
use App\Http\Requests\Driver\Ticket\AddTicketMessageRequest;
use App\Http\Requests\Driver\Ticket\AddTicketRequest;
use App\Models\Ticket;
use App\Services\TicketService;

class DriverTicketController extends Controller
{
    /**
     * @OA\Get(
     *     path="/driver/ticket",
     *      tags={"Driver :: Ticket"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     * )
     */
    function driverTickets()  {
        return TicketService::driverList(auth("driver")->user());
    }

    /**
     * @OA\Get(
     *     path="/driver/ticket/{id}",
     *      tags={"Driver :: Ticket"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="id",required=true,in="path",@OA\Schema(type="integer")),
     * )
     */
    public function driverTicketDetail(string $id)
    {
        return TicketService::detail($id);
    }

     /**
     * @OA\Post(
     *     path="/driver/ticket",
     *     tags={"Driver :: Ticket"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={"title", "text"},
     *      @OA\Property(
     *          property="title",
     *          type="string",
     *          example="Ticket title"
     *          ),
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
    function driverNewTicket(AddTicketRequest $request)  {
        return TicketService::addTicketDriver($request,auth('driver')->user());
    }

    /**
     * @OA\Post(
     *     path="/driver/ticket/{ticket}",
     *      tags={"Driver :: Ticket"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     * )
     */
    function driverNewMessage(AddTicketMessageRequest $request,Ticket $ticket)  {
        return TicketService::addMessage($request,$ticket);
    }

}
