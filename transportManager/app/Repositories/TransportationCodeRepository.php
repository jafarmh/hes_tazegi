<?php

namespace App\Repositories;

class TransportationCodeRepository
{
    public static function Add($model, $data)
    {
        return $model->transportationCode()->create($data);
    }
    public static function Remove($model)
    {
        return $model->transportationCode()->delete();
    }
}
