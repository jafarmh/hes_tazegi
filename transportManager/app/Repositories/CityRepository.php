<?php

namespace App\Repositories;

use App\Filter\City\CityName;
use App\Interfaces\RepositoryInterface;
use App\Models\City;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Facades\DB;

class CityRepository implements RepositoryInterface
{
    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        $query=City::query();
        return $query;
    }

    public static function FindByField($field, $value)
    {
        return (new self)->query()->where($field, $value)->first();
    }
    public static function FindByNameOrCrate($field, $value)
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
        return City::create($data);
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
                // ->with('transportationCode')
            )
            ->through(
                CityName::class
             )
            ->thenReturn()
            ->orderByDesc('created_at')
            ->paginate(env("PAGINATE"));
    }

    public static function GetAll()
    {
        return (new self)->query()->get();
    }

    static function Builder() : Builder {
        return (new self)->query()->select('*');
    }
    static function Remove($id)
    {
        $record = (new self )->FindByField("id",$id);
        return $record ->delete();
    }


    static function SearchWithTitle($search)
    {
        $result=(new self)->query()
        ->join('states','cities.state_id','=','states.id')
        ->select('cities.id',DB::raw('CONCAT_WS(" - ",states.state,cities.city) as title'));
        $result->when($search !=='', function ($q) use($search) {
            return $q->where(DB::raw('CONCAT_WS(" - ",states.state,cities.city)'), 'like', '%'.$search.'%');
        });

        $result->limit(10);

        return  $result;
    }


    static function AddCode(City $item,$data): \Illuminate\Database\Eloquent\Model
    {
        return TransportationCodeRepository::Add($item,$data);
    }

    static function RemoveCode(City $item)
    {
        return TransportationCodeRepository::Remove($item);
    }
}
