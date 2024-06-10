<?php
namespace App\Services\Common;

use App\Repositories\InsurerRepository;

class InsurerService
{
    function getList()  {
        $data = InsurerRepository::GetAll();
        return successResponse ($data);
    }

}
