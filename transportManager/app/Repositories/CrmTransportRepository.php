<?php

namespace App\Repositories;

use App\Interfaces\RepositoryInterface;
use App\Models\CrmTransport;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pipeline\Pipeline;

class CrmTransportRepository implements RepositoryInterface
{
    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        $query=CrmTransport::query();
        return $query;
    }

    public static function FindByField($field, $value)
    {
        return (new self)->query()->where($field, $value)->first();
    }

    public static function GetByField($field, $value)
    {
        return (new self)->query()->where($field, $value)->get();
    }

    public static function FindById($id)
    {

        return (new self)->query()->where('id', $id)->first();
    }

    public static function SearchByFields($params):\Illuminate\Database\Eloquent\Builder
    {
        $query=(new self)->query();
        foreach ($params as $key => $value) {
            $query = $query->orWhere($key,"like", "%".$value."%");
        }
        return $query;
    }

    static function NewItem($data): \Illuminate\Database\Eloquent\Model
    {
        return CrmTransport::create($data);
    }
    static function UpdateItem($data, $id): int
    {
        $record = (new self )->FindByField("id",$id);
        foreach ($data as $key=>$value){
            $record->{$key}=$value;
        }
        return $record->save();
    }
    public static function Index()
    {
        return app(Pipeline::class)
            ->send(
                (new self)->query()
            )
            ->through(
            )
            ->thenReturn()
            ->orderByDesc('created_at')
            ->get();
    }
    static function Builder() : Builder {
        return (new self)->query()->select('*');
    }
    static function Remove($id)
    {
        $record = (new self )->FindByField("id",$id);
        return $record ->delete();
    }

}
