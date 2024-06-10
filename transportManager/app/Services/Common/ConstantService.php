<?php
namespace App\Services\Common;

use App\Repositories\ConstantRepository;
use App\Repositories\CrmLoaderRepository;
use Illuminate\Http\JsonResponse;

class ConstantService
{
    function getList($type)  {
        //For fetching faster, we have used the query instead of eloquent
        // $query = "SELECT a.id,a.title
        //           FROM constants a
        //           INNER JOIN constant_types b on (a.constant_type_id = b.id and b.title = '{$type}')";
         $data = ConstantRepository::Builder()->whereHas('type', function($q) use ($type){
                                                        $q->where('title','=',$type);
                                                })->get();
        return successResponse ($data);
    }

    function getAllConstantList() : JsonResponse {
        return successResponse (ConstantRepository::Index());  
    }

    function getAllCrmLoaderList() : JsonResponse {
        return successResponse (CrmLoaderRepository::Index());  
    }

}
