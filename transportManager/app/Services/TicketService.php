<?php
namespace App\Services;

use App\Enums\TicketStatus;
use App\Models\CrmDriver;
use App\Models\Employer;
use App\Models\Ticket;
use App\Models\TransportAssistant;
use App\Repositories\TicketRepository;
use App\Services\Common\AttachmentService;
use Illuminate\Http\JsonResponse;

class TicketService
{

    private function AddFile($request,$message){
        $type="file";
        if(str_contains($request->file->getMimeType(),"image")){
            $type="image";
        }
        AttachmentService::SaveStorage($request->file('file'), "ticket", $message, $type);
    }

    static function detail($id) : JsonResponse {
        $data=TicketRepository::FindById($id);
        return successResponse($data);
    }


    //Driver
    static function driverList(CrmDriver $driver) : JsonResponse {
        $data=$driver->tickets()->orderByDesc('created_at')->paginate(env("PAGINATE"));
        return successResponse($data);
    }

    static function addTicketDriver($request,CrmDriver $driver)  {

        
        $ticket=TicketRepository::NewItem($driver,[
            "title"=>$request->title,
            "status"=>TicketStatus::Open
        ]);
        $message=TicketRepository::NewItemMessage($ticket,[
            "text"=>$request->text,

        ]);
        if($request->hasFile('file')){
            (new self)->AddFile($request,$message);

        }


        return successResponse([ 'ticket' => $ticket->message()]);
    }
    //////////////////////////////////////////////////////////////////////////////


    //TransportAssistant
    static function transportAssistantList(TransportAssistant $transportAssistant,$pageNumber) : JsonResponse {
        $data=$transportAssistant->tickets()->paginate(5, ['*'], 'page', $pageNumber);
        return successResponse($data);
    }

    static function addTicketTransportAssistant($request,TransportAssistant $transportAssistant)  {

        $ticket=TicketRepository::NewItem($transportAssistant,[
            "title"=>$request->title,
            "status"=>TicketStatus::Open
        ]);
        $message=TicketRepository::NewItemMessage($ticket,[
            "text"=>$request->text,

        ]);
        if($request->hasFile('file')){
            (new self)->AddFile($request,$message);
        }

        return successResponse([ 'ticket' => $ticket->message()]);
    }
    
    //////////////////////////////////////////////////////////////////////////////

    ////Employer 

    static function employerList(Employer $model) : JsonResponse {
        $data=$model->tickets()->orderByDesc('created_at')->paginate(env("PAGINATE"));
        return successResponse($data);
    }

    static function addTicketEmployer($request,Employer $model)  {

        
        $ticket=TicketRepository::NewItem($model,[
            "title"=>$request->title,
            "status"=>TicketStatus::Open
        ]);
        $message=TicketRepository::NewItemMessage($ticket,[
            "text"=>$request->text,

        ]);
        if($request->hasFile('file')){
            (new self)->AddFile($request,$message);

        }


        return successResponse([ 'ticket' => $ticket->message()]);
    }

    //////////////////////////////////////////////////////////////////////////////////

    static function addMessage($request,Ticket $ticket)  {
 
        $message=TicketRepository::NewItemMessage($ticket,[
            "text"=>$request->text,
        ]);

        if($request->hasFile('file')){
            (new self)->AddFile($request,$message);
        }


        return successResponse([ 'message' => $ticket->message()]);
    }

    static function addReply($request,Ticket $ticket)  {

        TicketRepository::UpdateItem([
            "status"=>TicketStatus::Answered
        ],$ticket->id);

        $message=TicketRepository::NewItemMessage($ticket,[
            "text"=>$request->text,
            "user_id"=>auth("user")->user()->id,
            "is_reply"=>1
        ]);

        if($request->hasFile('file')){
            (new self)->AddFile($request,$message);
        }


        return successResponse([ 'message' => $ticket->message()]);
    }

    static function close(Ticket $ticket)  {

        TicketRepository::UpdateItem([
            "status"=>TicketStatus::Closed
        ],$ticket->id);


        return successResponse([ 'ticket' => $ticket->message()]);
    }

    static function getListModelType($model){
        $list = TicketRepository::IndexModel($model);
        return successResponse( $list);
    }

}
