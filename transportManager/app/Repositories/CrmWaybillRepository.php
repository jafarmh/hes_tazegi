<?php

namespace App\Repositories;

use App\Interfaces\RepositoryInterface;
use App\Models\CrmWaybill;
use App\Models\CrmWaybillFinancial;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Facades\DB;

class CrmWaybillRepository implements RepositoryInterface
{
    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        $query=CrmWaybill::query();
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
        return CrmWaybill::create($data);
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

    public static function lastRecords()
    {
        return (new self)->query()->orderByDesc('created_at')->take(10)->get();
    }

    static function addFinancial($waybill,$financially)
    {
        return $waybill->financially()->saveMany($financially);
    }


    static function updateWaybillFinancial($waybill_id)
    {
        $result = CrmWaybillFinancial::query()
        ->join('crm_waybill_cost_types','crm_waybill_cost_type_id','=','crm_waybill_cost_types.id')
        ->where('add_to_total_amount','=','1')
        ->where('crm_waybill_id','=',$waybill_id)->select(DB::raw('IFNULL(SUM(amount),0) as sum_amount'))
        ->first();        $wage_with_cost = $result->sum_amount;

        $result = CrmWaybillFinancial::query()
                    ->join('crm_waybill_cost_types','crm_waybill_cost_type_id','=','crm_waybill_cost_types.id')
                    ->where('receive_from_driver','=','1')
                    ->where('crm_waybill_id','=',$waybill_id)->select(DB::raw('IFNULL(SUM(amount),0) as sum_amount'))
                    ->first();
        $received_cost_from_driver = $result->sum_amount;

        CrmWaybillRepository::UpdateItem(['wage_with_cost' =>$wage_with_cost,'received_cost_from_driver' => $received_cost_from_driver],$waybill_id);
    }
}
