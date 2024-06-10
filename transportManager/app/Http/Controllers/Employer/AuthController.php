<?php

namespace App\Http\Controllers\Employer;

use App\Http\Controllers\Controller;
use App\Http\Requests\Driver\Login\LoginRequest;
use App\Http\Requests\Employer\Signup\SignupCompanyRequest;
use App\Http\Requests\Employer\Signup\SignupPersonRequest;
use App\Http\Requests\Otp\OtpRequest;
use App\Services\Employer\OtpService;
use App\Services\Employer\Register;

class AuthController extends Controller
{
    public $OtpService, $RegisterService;

    public function __construct()
    {
        $this->OtpService = new OtpService;
        $this->RegisterService = new Register;
    }


        /**
     * @OA\Get(
     *   tags={"Employer"},
     *     summary="otp code",
     *     path="/employer/otp",
     *     @OA\Parameter(name="mobile",in="query",required=true, @OA\Schema(type="string") ),
     *     @OA\Response(response="200", description="An example resource")
     * )
     */
    public function sendOtp(OtpRequest $request)
    {
        return $this->OtpService->send($request->mobile);
    }
    /**
     * @OA\Get(
     ** path="/employer/login",
     *   tags={"Employer"},
     *   summary="login",
     *   @OA\Parameter(name="mobile",in="query",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="code",in="query",required=true, @OA\Schema(type="string") ),

     *   @OA\Response(response=200,description="Success"),

 
     *)
     **/
    function login(LoginRequest $request)
    {
        return $this->OtpService->verify($request->mobile, $request->code);
    }

    

    /**
     * @OA\Post(
     ** path="/employer/register/person",
     *   tags={"Employer"},
     *   summary="register",
     *   @OA\Parameter(name="mobile",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="name",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="family",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="national_code",in="path",required=true, @OA\Schema(type="string") ),
     * 
     *   @OA\Response(response=200,description="Success"),

 
     *)
     **/
    public function registerPerson(SignupPersonRequest $request)
    {
        return $this->RegisterService->registerPerson($request->validated());
    }


    /**
     * @OA\Post(
     ** path="/employer/register/company",
     *   tags={"Employer"},
     *   summary="register",
     *   @OA\Parameter(name="mobile",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="name",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="economic_code",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="registration_number",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="national_code",in="path",required=true, @OA\Schema(type="string") ),
 
     *   @OA\Response(response=200,description="Success"),

 
     *)
     **/

    public function registerCompany(SignupCompanyRequest $request)
    {
        return $this->RegisterService->registerCompany($request->validated());
    }
}
