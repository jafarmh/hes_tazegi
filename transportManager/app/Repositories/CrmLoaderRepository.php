<?php

namespace App\Repositories;

use App\Filter\Name;
use App\Interfaces\RepositoryInterface;
use App\Models\CrmLoader;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pipeline\Pipeline;

class CrmLoaderRepository implements RepositoryInterface
{
    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        $query=CrmLoader::query();
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

    static function NewItem($data,$addUserCreatorId=true): \Illuminate\Database\Eloquent\Model
    {
        return CrmLoader::create($data);
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
                Name::class
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

    static function AddCode(CrmLoader $item,$data): \Illuminate\Database\Eloquent\Model
    {
        return TransportationCodeRepository::Add($item,$data);
    }

    static function RemoveCode(CrmLoader $item)
    {
        return TransportationCodeRepository::Remove($item);
    }
}
