<?php

namespace App\Repositories;

use App\Interfaces\RepositoryInterface;
use App\Models\Month;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pipeline\Pipeline;

class MonthRepository implements RepositoryInterface
{
    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        return Month::query();
    }

    public static function FindByField($field, $value)
    {
        return (new self)->query()->where($field, $value)->first();
    }

    public static function FindByFields($params)
    {
        $query = (new self)->query();
        foreach($params as $key=>$value){
            $query=$query->where($key, $value);
        }
        return $query->first();
    }

    public static function FindByFieldModulePermissions($field, $value)
    {
        return (new self)->query()->where($field, $value)->distinct()->first();
    }


    static function NewItem($data): \Illuminate\Database\Eloquent\Model
    {


        return Month::create($data);
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
            ->thenReturn()
            ->orderByDesc('created_at')
            ->paginate(env("PAGINATE"));
    }

    public static function GetAll()
    {
        return (new self)->query()->get();
    }

    static function Remove($id)
    {
        $record = (new self )->FindByField("id",$id);
        return $record ->delete();
    }

    static function Builder() : Builder {

        return (new self)->query()->select('*');
    }




}
