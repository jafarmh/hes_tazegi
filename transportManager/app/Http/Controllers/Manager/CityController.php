<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\StateCity\AddCityRequest;
use App\Http\Requests\Manager\StateCity\UpdateCityRequest;
use App\Repositories\CityRepository;
use App\Services\Common\StateCityService;
use Illuminate\Http\Request;

class CityController extends Controller
{
    /**
     * @OA\Get(
     ** path="/manager/cities",
     *   tags={"Manager"},
     *   summary="all city",
     *   @OA\Parameter(name="id",in="path",required=false, @OA\Schema(type="string")
     *   ),

     *   @OA\Response(response=200,description="Success"),

     *   @OA\Response(response=404,description="not found"),
 
     *)
     **/
    public function index()
    {
        $Service = new StateCityService();
        return $Service->getAllStateList();
    }

    /**
     * @OA\Post(
     *     path="/manager/city",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={
     *     "city",
     *     "lat",
     *     "lng",
     *     "state_id",
    
     *      },
     *      @OA\Property(
     *          property="city",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="lat",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="lng",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="state_id",
     *          type="string",
     *          ),


     *      )))
     * )
     */

    public function store(AddCityRequest $request)
    {
        $City=CityRepository::NewItem($request->validated());
        return successResponse(  $City);
        
    }

  
       /**
     * @OA\Put(
     *     path="/manager/city/{id}",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\Parameter(name="id",in="path",required=true, @OA\Schema(type="string") ),

     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={},
     *      @OA\Property(
     *          property="city",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="lat",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="lng",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="state_id",
     *          type="string",
     *          ),


     *      )))
     * )
     */
    public function update(UpdateCityRequest $request, string $id)
    {
        $City=CityRepository::UpdateItem($request->validated(),$id);
        return successResponse($City);
    }

    /**
     * @OA\Delete(
     ** path="/manager/city/{id}",
     *   tags={"Manager"},
     *   summary="remove city",
     *   security={{"bearerAuth":{}}},
     *   @OA\Parameter(name="id",in="path",required=false, @OA\Schema(type="string")
     *   ),

     *   @OA\Response(response=200,description="Success"),

     *   @OA\Response(response=404,description="not found"),
 
     *)
     **/
    public function destroy(string $id)
    {
        $City=CityRepository::Remove($id);
        return successResponse($City);
    }
}
