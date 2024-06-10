<?php
namespace App\Services\Common;

use App\Http\Resources\Common\PackagingResource;
use App\Repositories\PackagingRepository;

class PackagingService
{
    function getList()  {
        $data = PackagingRepository::GetAll();
        return successResponse (PackagingResource::collection($data));
    }

}
