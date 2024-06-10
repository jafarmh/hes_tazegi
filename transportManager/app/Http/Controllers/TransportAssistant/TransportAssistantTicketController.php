<?php

namespace App\Http\Controllers\TransportAssistant;

use App\Http\Controllers\Controller;
use App\Http\Requests\Driver\Ticket\AddTicketMessageRequest;
use App\Http\Requests\Driver\Ticket\AddTicketRequest;
use App\Models\Ticket;
use App\Services\TicketService;
use App\Services\TransportAssistantService;
use Illuminate\Http\Request;

class TransportAssistantTicketController extends Controller
{
    /**
     * @OA\Get(
     *     path="/transportAssistant/ticket",
     *     tags={"Transport Assistant :: Ticket"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="Token",required=true,in="header",@OA\Schema(type="string"))
     * )
     */
    function transportAssistantTickets(Request $request)  {
        $pageNumber = $request->has('page') ? $request->input('invitee') : 1;
        return TicketService::transportAssistantList(TransportAssistantService::auth($request),$pageNumber);
    }

    /**
     * @OA\Get(
     *     path="/transportAssistant/ticket/{id}",
     *     tags={"Transport Assistant :: Ticket"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="Token",required=true,in="header",@OA\Schema(type="string")),
     *     @OA\Parameter( name="id",required=true,in="path",@OA\Schema(type="integer")),
     * )
     */
    public function transportAssistantTicketDetail(string $id)
    {
        return TicketService::detail($id);
    }

    /**
     * @OA\Post(
     *     path="/transportAssistant/ticket",
     *     tags={"Transport Assistant :: Ticket"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="Token",required=true,in="header",@OA\Schema(type="string")),
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
    function transportAssistantNewTicket(AddTicketRequest $request)  {
        return TicketService::addTicketTransportAssistant($request,TransportAssistantService::auth($request));
    }

    /**
     *  @OA\POST(
     *     path="/transportAssistant/ticket/{ticket}",
     *     tags={"Transport Assistant :: Ticket"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="Token",required=true,in="header",@OA\Schema(type="string")),
     *     @OA\Parameter( name="ticket",required=true,in="path",@OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={"text"},
     *      @OA\Property(
     *          property="text",
     *          type="string",
     *          example="Ticket Reply"
     *          ),
     *      @OA\Property(
     *          property="file",
     *          type="file"
     *          )
     *      )))
     * )
     */
    function transportAssistantNewMessage(AddTicketMessageRequest $request,Ticket $ticket)  {
        return TicketService::addMessage($request,$ticket);
    }
}
