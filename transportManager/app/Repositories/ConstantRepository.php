<?php

namespace App\Repositories;

use App\Filter\Constant\TypeName;
use App\Filter\Title;
use App\Interfaces\RepositoryInterface;
use App\Models\Constants;
use App\Models\ConstantType;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pipeline\Pipeline;

class ConstantRepository implements RepositoryInterface
{
    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        $query = Constants::query();


        return $query;
    }
    private function queryType(): \Illuminate\Database\Eloquent\Builder
    {
        $query = ConstantType::query();


        return $query;
    }

    public static function FindByField($field, $value)
    {
        return (new self)->query()->where($field, $value)->first();
    }
    public static function FindByFieldType($field, $value)
    {
        return (new self)->queryType()->where($field, $value)->first();
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

    static function NewItem($data, $addUserCreatorId = true): \Illuminate\Database\Eloquent\Model
    {
        return  Constants::create($data);
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
                    ->join("constant_types", "constants.constant_type_id", "=", "constant_types.id")

            )
            ->through(
                TypeName::class
            )
            ->thenReturn()
            ->orderByDesc('constants.created_at')
            ->select("constants.*",  "constant_types.title as type")
            ->get();
    }
    static function Builder(): Builder
    {
        return (new self)->query()->select('*');
    }
    static function Remove($id)
    {
        $record = (new self)->FindByField("id", $id);
        return $record->delete();
    }

    static function TypeFindByField($field, $value)
    {
        $result = ConstantType::where($field, $value)->first();

        return  $result;
    }

    static function FindByType($type)
    {
        $result = (new self)->query()
            ->join('constant_types', 'constant_types.id', '=', 'constants.constant_type_id')
            ->select('constants.*', 'constant_types.id as constant_types_id')
            ->where('constant_types.title', '=', "{$type}")
            ->orderBy('constants.title')
            ->get();

        return  $result;
    }


    static function AddCode(Constants $item, $data): \Illuminate\Database\Eloquent\Model
    {
        return TransportationCodeRepository::Add($item, $data);
    }

    static function RemoveCode(Constants $item)
    {
        return TransportationCodeRepository::Remove($item);
    }

    static function GetAllTypes()
    {
        return ConstantType::all();
    }

    static function NewItemType($data): \Illuminate\Database\Eloquent\Model
    {
        return  ConstantType::create($data);
    }
    static function UpdateItemType($data, $id): int
    {
        $record = (new self)->FindByFieldType("id", $id);
        foreach ($data as $key => $value) {
            $record->{$key} = $value;
        }
        return $record->save();
    }
    public static function IndexType()
    {
        return app(Pipeline::class)
            ->send(
                (new self)->queryType()
            )
            ->through(
                Title::class
            )
            ->thenReturn()
           
            ->get();
    }
}
