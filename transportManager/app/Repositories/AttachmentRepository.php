<?php

namespace App\Repositories;

class AttachmentRepository
{
    public static function Add($model, $data)
    {
        return $model->attach()->create($data);
    }
    public static function RemoveAll($model)
    {
        return $model->attach()->delete();
    }
    public static function RemoveAllType($model, $type)
    {
        return $model->attach()->where("type", $type)->delete();
    }

    public static function RemoveByName($model, $name)
    {
        return $model->attach()->where("name", $name)->delete();
    }

    public static function RemoveById($model, $id)
    {
        return !!$model->attach()
            ->where('id', $id)
            ->delete();
    }
    public static function Remove($model, $path, $name, $type)
    {
        return !!$model->attach()->where('path', $path)
            ->where("name", $name)
            ->where("type", $type)
            ->delete();
    }
}
