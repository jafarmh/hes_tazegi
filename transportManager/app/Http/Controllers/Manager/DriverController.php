<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\Driver\AddDriverRequest;
use App\Http\Requests\Manager\Driver\UpdateDriverRequest;
use App\Http\Resources\Driver\DriverResource;
use App\Http\Resources\PaginateResource;
use App\Repositories\CrmDriverRepository;
use App\Services\Driver\DriverService;
use Illuminate\Http\Request;

class DriverController extends Controller
{


    /**
     * @OA\GET(
     *     path="/manager/driver",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     summary="Driver List",
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\Parameter(name="name",in="query",required=false, @OA\Schema(type="string") ),
     *     @OA\Parameter(name="family",in="query",required=false, @OA\Schema(type="string") ),
     * )
     */
    public function index()
    {
        $data = CrmDriverRepository::index()->paginate(env("PAGINATE"));
        return successResponse(new PaginateResource($data, DriverResource::collection($data)));
    }


    /**
     * @OA\Post(
     *     path="/manager/driver",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\Parameter(name="id",in="path",required=true, @OA\Schema(type="string") ),

     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={
     *     "mobile",
     *     "name",
     *     "family",
     *     "smartNumber",
     *     "certifcateNumber",
     *     "national_code",
     *     "fatherName",
     *     "birthCity",
     *     "certificateType",
     *     "isActiveDriver",
     *     "isActive",
     *     "verification",
     *     "healthCardDate",
     *     "cardValidationDate",
     *      "insurancecode",
     *      "insuranceBranch",
     *      },
     *      @OA\Property(
     *          property="mobile",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="name",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="family",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="smartNumber",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="certifcateNumber",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="national_code",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="fatherName",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="birthCity",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="certificateType",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="isActiveDriver",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="isActive",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="verification",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="healthCardDate",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="cardValidationDate",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="insurancecode",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="insuranceBranch",
     *          type="string"
     *          ),
     *      )))
     * )
     */
    public function store(AddDriverRequest $request)
    {
        $driverService = new DriverService;
        return $driverService->add($request->validated());
    }



    /**
     * @OA\GET(
     *     path="/manager/driver/{id}",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     summary="Driver Detail",
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\Parameter(name="id",in="path",required=true, @OA\Schema(type="string") ),

     * )
     */
    public function show(string $id)
    {
        $data = CrmDriverRepository::FindById($id);
        return successResponse(new DriverResource($data));
    }

   /**
     * @OA\Put(
     *     path="/manager/driver/{id}",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={
     *     "mobile",
     *     "name",
     *     "family",
     *     "smartNumber",
     *     "certifcateNumber",
     *     "national_code",
     *     "fatherName",
     *     "birthCity",
     *     "certificateType",
     *     "isActiveDriver",
     *     "isActive",
     *     "verification",
     *     "healthCardDate",
     *     "cardValidationDate",
     *      "insurancecode",
     *      "insuranceBranch",
     *      },
     *      @OA\Property(
     *          property="mobile",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="name",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="family",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="smartNumber",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="certifcateNumber",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="national_code",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="fatherName",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="birthCity",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="certificateType",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="isActiveDriver",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="isActive",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="verification",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="healthCardDate",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="cardValidationDate",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="insurancecode",
     *          type="string"
     *          ),
     *      @OA\Property(
     *          property="insuranceBranch",
     *          type="string"
     *          ),
     *      )))
     * )
     */
    public function update(UpdateDriverRequest $request, string $id)
    {
        $driverService = new DriverService;
        return $driverService->update($request->validated(),$id);

    }

   /**
     * @OA\Delete(
     *     path="/manager/driver/{id}",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     summary="Driver delete",
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\Parameter(name="id",in="path",required=true, @OA\Schema(type="string") ),

     * )
     */
    public function destroy(string $id)
    {
        $driver= CrmDriverRepository::Remove($id);
        return  successResponse([ 'driver' => $driver]);
    }
}
