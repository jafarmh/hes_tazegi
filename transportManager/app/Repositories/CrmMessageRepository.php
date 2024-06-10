<?php

namespace App\Repositories;


use App\Models\CrmMessage;
use Illuminate\Database\Eloquent\Builder;


class CrmMessageRepository
{

    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        $query=CrmMessage::query();
        return $query;
    }

    public static function FindByField($field, $value)
    {
        return (new self)->query()->where($field, $value)->first();
    }

    static function NewItem($model, $data): \Illuminate\Database\Eloquent\Model
    {
        return $model->message()->create($data);
    }

    public static function RemoveAll($model)
    {
        return $model->message()->delete();
    }


    public static function RemoveByMobile($model, $mobile)
    {
        return $model->message()->where("mobile", $mobile)->delete();
    }

    public static function RemoveById($model, $id)
    {
        return !!$model->message()
            ->where('id', $id)
            ->delete();
    }

    static function Builder() : Builder {
        return (new self)->query()->select('*');
    }

}
