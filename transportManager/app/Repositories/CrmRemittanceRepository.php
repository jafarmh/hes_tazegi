<?php

namespace App\Repositories;

use App\Interfaces\RepositoryInterface;
use App\Models\CrmRemittance;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pipeline\Pipeline;

class CrmRemittanceRepository implements RepositoryInterface
{
    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        $query= CrmRemittance::query();
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

    static function NewItem($data,$addUserCreatorId=true): \Illuminate\Database\Eloquent\Model
    {
        return CrmRemittance::create($data);
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
