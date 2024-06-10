<?php

namespace App\Http\Controllers\Employer;

use App\Http\Controllers\Controller;
use App\Http\Requests\Driver\Ticket\AddTicketMessageRequest;
use App\Models\Ticket;
use App\Services\TicketService;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    /**
     * @OA\Get(
     *     path="/employer/ticket",
     *      tags={"Employer"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     * )
     */
    public function index()
    {
        return TicketService::employerList(auth("employer")->user());
    }

      /**
     * @OA\Post(
     *     path="/employer/ticket",
     *     tags={"Employer"},
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
    public function store(Request $request)
    {
        return TicketService::addTicketEmployer($request,auth('employer')->user());

    }

    /**
     * @OA\Get(
     *     path="/employer/ticket/{id}",
     *      tags={"Employer"},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter( name="id",required=true,in="path",@OA\Schema(type="integer")),
     * )
     */
    public function show(string $id)
    {
        return TicketService::detail($id);
    }

    
    /**
     *  @OA\POST(
     *     path="/employer/ticket/{ticket}",
     *     tags={"Employer"},
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

    function employerNewMessage(AddTicketMessageRequest $request,Ticket $ticket)  {
        return TicketService::addMessage($request,$ticket);

    }

}
