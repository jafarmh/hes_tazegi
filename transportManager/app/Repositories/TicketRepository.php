<?php

namespace App\Repositories;

use App\Models\Ticket;
use Illuminate\Pipeline\Pipeline;

class TicketRepository
{
    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        $query = Ticket::query();
        return $query;
    }

    public static function FindByField($field, $value)
    {
        return (new self)->query()
        ->with("message","message.attach")
        ->where($field, $value)->first();
    }

    public static function GetByField($field, $value)
    {
        return (new self)->query()
        ->with("message","message.attach")
        ->where($field, $value)->get();
    }



    public static function FindById($id)
    {
        return (new self)->query()
        ->with("message","message.attach")
        ->where('id', $id)->first();
    }

    static function NewItem($model, $data): \Illuminate\Database\Eloquent\Model
    {
        return $model->tickets()->create($data);
    }


    static function NewItemMessage(Ticket $ticket, $data): \Illuminate\Database\Eloquent\Model
    {
        return $ticket->message()->create($data);
    }

    static function UpdateItem($data, $id): int
    {
        $record = (new self)->FindByField("id", $id);
        foreach ($data as $key => $value) {
            $record->{$key} = $value;
        }
        return $record->save();
    }

    public static function Index()
    {
        return app(Pipeline::class)
            ->send(
                (new self)->query()
                    ->with("message")
            )
            //->through()
            ->thenReturn()
            ->orderByDesc('created_at')
            ->get();
    }
    public static function IndexModel( $model)
    {
   
        return  Ticket::whereHasMorph(
            'creatortable',
            $model,
      
        ) ->paginate(env("PAGINATE"));
    }
}
