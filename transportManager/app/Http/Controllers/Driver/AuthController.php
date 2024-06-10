<?php

namespace App\Http\Controllers\Driver;

use App\Http\Controllers\Controller;
use App\Http\Requests\Driver\Login\LoginRequest;
use App\Http\Requests\Driver\Signup\SignupRequest;
use App\Http\Requests\Otp\OtpRequest;
use App\Services\Driver\OtpService;
use App\Services\Driver\Register;

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
     *   tags={"Driver"},
     *   summary="otp code",
     *   path="/driver/otp",
     *   @OA\Parameter(name="mobile",in="query",required=true, @OA\Schema(type="string") ),

     *     @OA\Response(response="200", description="An example resource")
     * )
     */
    public function sendOtp(OtpRequest $request)
    {
        return $this->OtpService->send($request->mobile);
    }
    /**
     * @OA\Get(
     ** path="/driver/login",
     *   tags={"Driver"},
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
     ** path="/driver/register",
     *   tags={"Driver"},
     *   summary="register",
     *   @OA\Parameter(name="mobile",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="name",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="family",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="smartNumber",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="certifcateNumber",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="national_code",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="fatherName",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="birthCity",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="certificateType",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="healthCardDate",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="cardValidationDate",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="insurancecode",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="insuranceBranch",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="personnelImg",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="birthCertificateImg",in="path",required=true, @OA\Schema(type="string") ),
     *   @OA\Parameter(name="nationalImg",in="path",required=true, @OA\Schema(type="image") ),
     *   @OA\Parameter(name="certificateImg",in="path",required=true, @OA\Schema(type="image") ),
     *   @OA\Parameter(name="smartCardImg",in="path",required=true, @OA\Schema(type="image") ),
     *   @OA\Parameter(name="healthImg",in="path",required=true, @OA\Schema(type="image") ),
 
     *   @OA\Response(response=200,description="Success"),

 
     *)
     **/
    public function register(SignupRequest $request)
    {
        return $this->RegisterService->register($request->validated());
    }
}
