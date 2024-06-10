<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\Constant\AddConstantRequest;
use App\Repositories\ConstantRepository;
use Illuminate\Http\Request;

class ConstantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * @OA\Post(
     *     path="/manager/constant",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={
     *     "title",
     *     "name",
     *     "constant_type_id",
    
     *      },
     *      @OA\Property(
     *          property="title",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="name",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="constant_type_id",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="priority",
     *          type="string"
     *          ),


     *      )))
     * )
     */
    public function store(AddConstantRequest $request)
    {
        $record = ConstantRepository::NewItem($request->validated());
        return successResponse($record);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }


    /**
     * @OA\Put(
     *     path="/manager/constant/{id}",
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
     *     "name",
     *     "constant_type_id",
     *      },
     *      @OA\Property(
     *          property="title",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="name",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="constant_type_id",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="priority",
     *          type="string"
     *          ),


     *      )))
     * )
     */

    public function update(AddConstantRequest $request, string $id)
    {
        $result = ConstantRepository::UpdateItem($request->validated(), $id);
        return successResponse($result);
    }


    /**
     * @OA\Delete(
     *     path="/manager/constant/{id}",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Parameter(name="id",in="path",required=true, @OA\Schema(type="string") ),

     * )
     * )
     */

    public function destroy(string $id)
    {
        $result = ConstantRepository::Remove($id);
        return successResponse($result);
    }
}
