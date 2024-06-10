<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\StateCity\AddStateRequest;
use App\Http\Requests\Manager\StateCity\UpdateStateRequest;
use App\Repositories\StateRepository;

class StateController extends Controller
{
    /**
     * @OA\Get(
     ** path="/manager/states",
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
      
        return StateRepository::GetAll();
    }

    /**
     * @OA\Post(
     *     path="/manager/state",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={
     *     "state",
     *     "lat",
     *     "lng",
    
     *      },
     *      @OA\Property(
     *          property="state",
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
    


     *      )))
     * )
     */

    public function store(AddStateRequest $request)
    {
        $state=StateRepository::NewItem($request->validated());
        return successResponse(  $state);
        
    }

 

       /**
     * @OA\Put(
     *     path="/manager/state/{id}",
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
     *          property="state",
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



     *      )))
     * )
     */
    public function update(UpdateStateRequest $request, string $id)
    {
        $state=StateRepository::UpdateItem($request->validated(),$id);
        return successResponse($state);
    }

    /**
     * @OA\Delete(
     ** path="/manager/state/{id}",
     *   tags={"Manager"},
     *   summary="remove state",
     *   security={{"bearerAuth":{}}},
     *   @OA\Parameter(name="id",in="path",required=false, @OA\Schema(type="string")
     *   ),

     *   @OA\Response(response=200,description="Success"),

     *   @OA\Response(response=404,description="not found"),
 
     *)
     **/
    public function destroy(string $id)
    {
        $state=StateRepository::Remove($id);
        return successResponse($state);
    }
}
