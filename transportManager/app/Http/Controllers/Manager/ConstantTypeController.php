<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\Constant\AddConstantRequest;
use App\Http\Requests\Manager\Constant\AddConstantTypeRequest;
use App\Repositories\ConstantRepository;

class ConstantTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ConstantRepository::IndexType();
    }

    /**
     * @OA\Post(
     *     path="/manager/constantType",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={
     *     "title",
     *     "title_p",
    
     *      },
     *      @OA\Property(
     *          property="title",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="title_p",
     *          type="string",
     *          ),


     *      )))
     * )
     */
    public function store(AddConstantTypeRequest $request)
    {
        $record = ConstantRepository::NewItemType($request->validated());
        return successResponse($record);
    }

 


    /**
     * @OA\Put(
     *     path="/manager/constantType/{id}",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\Parameter(name="id",in="path",required=true, @OA\Schema(type="string") ),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={
     *     "title",
     *     "title_p",
     *      },
     *      @OA\Property(
     *          property="title",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="title_p",
     *          type="string",
     *          ),

     *      )))
     * )
     */

    public function update(AddConstantRequest $request, string $id)
    {
        $result = ConstantRepository::UpdateItemType($request->validated(), $id);
        return successResponse($result);
    }


    


}
