<?php

namespace App\Http\Controllers\Manager;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manager\Employer\UpdateCompanyRequest;
use App\Http\Requests\Manager\Employer\UpdatePersonRequest;
use App\Http\Resources\Employer\ListResource;
use App\Http\Resources\PaginateResource;
use App\Repositories\CompanyRepository;
use App\Repositories\EmployerRepository;
use App\Repositories\PersonRepository;
use Illuminate\Http\Request;

class EmployerController extends Controller
{
    /**
     * @OA\GET(
     *     path="/manager/employer",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     summary="Employer List",
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     * )
     */
    public function index()
    {
        $data = EmployerRepository::index()->paginate(env("PAGINATE"));
        return successResponse(new PaginateResource($data, ListResource::collection($data)));
    }

   
     /**
     * @OA\GET(
     *     path="/manager/employer/{id}",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     summary="Employer detail",
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\Parameter(name="id",in="path",required=false, @OA\Schema(type="string") ),
     
     * )
     */
    public function show(string $id)
    {
        $data = EmployerRepository::FindById($id)->get();
        return successResponse(ListResource::collection($data));
    }



    /**
     * @OA\Put(
     *     path="/manager/employer/company/{id}",
     *     tags={"Manager"},
     *     summary="update company employer",
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(name="id",in="path",required=true, @OA\Schema(type="string") ),

     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={
     *     "id",
    
     *      },
     *      @OA\Property(
     *          property="mobile",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="economic_code",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="registration_number",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="national_code",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="name",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="id",
     *          type="string",
     *          ),


     *      )))
     * )
     */
    public function updateCompany(UpdateCompanyRequest $request, string $id)
    {
        $data = CompanyRepository::UpdateItem($request->validated(),$id);
        return successResponse($data);
    }


    /**
     * @OA\Put(
     *     path="/manager/employer/person/{id}",
     *     tags={"Manager"},
     *     summary="update person employer",
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(name="id",in="path",required=true, @OA\Schema(type="string") ),

     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\RequestBody(
     *     required=true,
     *     @OA\JsonContent(
     *     required={
     *     "id",
    
     *      },
     *      @OA\Property(
     *          property="mobile",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="family",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="name",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="national_code",
     *          type="string",
     *          ),
     *      @OA\Property(
     *          property="id",
     *          type="string",
     *          ),



     *      )))
     * )
     */
    
    public function updatePerson(UpdatePersonRequest $request, string $id)
    {
        $data = PersonRepository::UpdateItem($request->validated(),$id);
        return successResponse($data);
    }

    /**
     * @OA\Delete(
     *     path="/manager/employer/company/{id}",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     summary="Employer company remove",
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\Parameter(name="id",in="path",required=false, @OA\Schema(type="string") ),
     
     * )
     */
    public function destroyCompany(string $id)
    {
        $data = CompanyRepository::Remove($id);
        return successResponse($data);
    }

    /**
     * @OA\Delete(
     *     path="/manager/employer/person/{id}",
     *     tags={"Manager"},
     *     security={{"bearerAuth":{}}},
     *     summary="Employer person remove",
     *     @OA\Response(response="200", description="An example resource",@OA\JsonContent()),
     *     @OA\Response(response="401", description="unAutosize",@OA\JsonContent()),
     *     @OA\Parameter(name="id",in="path",required=false, @OA\Schema(type="string") ),
     
     * )
     */
    public function destroyPerson(string $id)
    {
        $data = PersonRepository::Remove($id);
        return successResponse($data);
    }
}
