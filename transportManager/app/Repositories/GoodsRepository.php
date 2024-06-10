<?php

namespace App\Repositories;

use App\Filter\Title;
use App\Interfaces\RepositoryInterface;
use App\Models\Goods;
use App\Models\TransportationCode;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Facades\DB;

class GoodsRepository implements RepositoryInterface
{
    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        return  Goods::query();
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

    static function NewItem($data): \Illuminate\Database\Eloquent\Model
    {
        return Goods::create($data);
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
                //
            )
            ->through(
                Title::class,
            )
            ->thenReturn()
            ->orderByDesc('created_at')
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

    public static function lastRecords()
    {
        return (new self)->query()->orderByDesc('created_at')->take(10)->get();
    }

    static function SearchWithTitle($search)
    {
        $result=(new self)->query()
        ->has('TransportationCode')
        ->select('id',DB::raw('title'));
        $result->when($search !=='', function ($q) use($search) {
            return $q->where(DB::raw('title'), 'like', '%'.$search.'%');
        });

        $result->limit(5);
        return  $result;
    }


    public static function GetAll()
    {
        return (new self)->query()->get();
    }
    
    static function AddCode(Goods $item,$data): \Illuminate\Database\Eloquent\Model
    {
        return TransportationCodeRepository::Add($item,$data);
    }

    static function RemoveCode(Goods $item)
    {
        return TransportationCodeRepository::Remove($item);
    }

    static function UpdateAllParent()
    {
        $goods = TransportationCode::where('recordable_type','=',"App\Models\Goods")->orderBy('code','desc')->get();
        foreach($goods as $item)
        {
            $id = $item->recordable_id;
            $parent = (new self)->getParent($id,$item->code);
            if(isset($parent->id)) Goods::where('id','=',$id)->update(['parent_id' => $parent->recordable_id]);
        }
    }


    static function UpdateParentByCode($id,$code)
    {
        //Remove this id from parent of other items
        Goods::where('parent_id','=',$id)->update(['parent_id' => NULL]);

        //Find the parent of this record
        $parent = (new self)->getParent($id,$code);
        Goods::where('id','=',$id)->update(['parent_id' => isset($parent->recordable_id) ? $parent->recordable_id : NULL]);
    }


    public static function getParent($id,$code)
    {
        //for examl, if a code is 110000 -> parent code = 100000
        //for examl, if a code is 112000 -> parent code = 110000
        //so we should reverse maibn code and convert last number (except 0) to 0

        $code = str_split($code);
        $code = array_reverse($code);
        foreach($code as $k => $v)
        {
            if($v != 0)
            {
                $code[$k] = "0";
                break;
            }
        }
        $code = array_reverse($code);
        $parentCode = implode($code);
        return TransportationCode::where('recordable_type','=',"App\Models\Goods")->where('code','=',"{$parentCode}")->where('recordable_id','!=',$id)->first();
    }

}
