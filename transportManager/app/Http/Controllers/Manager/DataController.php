<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Repositories\ConstantRepository;
use App\Services\Common\ConstantService;
use App\Services\Common\StateCityService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DataController extends Controller
{



  


    /**
     * @OA\Get(
     ** path="/manager/constant/type",
     *   tags={"Manager"},
     *   summary="all constants type",

     *   @OA\Response(response=200,description="Success"),

     *   @OA\Response(response=404,description="not found"),
 
     *)
     **/

    function types(): JsonResponse
    {
        return successResponse(ConstantRepository::GetAllTypes());
    }

    /**
     * @OA\Get(
     ** path="/manager/constants",
     *   tags={"Manager"},
     *   summary="all constant",
     * security={{"bearerAuth":{}}},
     *   @OA\Parameter(name="type_name",in="query",required=false, @OA\Schema(type="string")
     *   ),

     *   @OA\Response(response=200,description="Success"),

     *   @OA\Response(response=404,description="not found"),
 
     *)
     **/

     
    function constant(): JsonResponse
    {
        $Service = new ConstantService();
        return $Service->getAllConstantList();
    }
    /**
     * @OA\Get(
     ** path="/manager/crmLoaders",
     *   tags={"Manager"},
     *   summary="all constant",
     * security={{"bearerAuth":{}}},
     *   @OA\Parameter(name="name",in="query",required=false, @OA\Schema(type="string")
     *   ),

     *   @OA\Response(response=200,description="Success"),

     *   @OA\Response(response=404,description="not found"),
 
     *)
     **/

    function crmLoaders(): JsonResponse
    {
        $Service = new ConstantService();
        return $Service->getAllCrmLoaderList();
    }
}
