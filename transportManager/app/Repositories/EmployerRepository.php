<?php

namespace App\Repositories;

use App\Interfaces\RepositoryInterface;
use App\Models\Employer;
use Illuminate\Pipeline\Pipeline;

class EmployerRepository implements RepositoryInterface
{
    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        $query=Employer::query();
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
    
    public static function SearchByField($field, $value):\Illuminate\Database\Eloquent\Builder
    {
        return (new self)->query()->where($field,"like", "%".$value."%");
    }

    public static function SearchByFields($params):\Illuminate\Database\Eloquent\Builder
    {
        $query=(new self)->query();
        foreach ($params as $key => $value) {
            $query = $query->orWhere($key,"like", "%".$value."%");
        }
        return $query;
    }

    public static function FindById($id)
    {
        return (new self)->query()->where('id', $id)->first();
    }

    static function NewItem($data): \Illuminate\Database\Eloquent\Model
    {
        return  Employer::create($data);
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

    static function Remove($id)
    {
        $record = (new self )->FindByField("id",$id);
        return $record ->delete();
    }


}
