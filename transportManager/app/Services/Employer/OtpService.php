<?php
namespace App\Services\Employer;

use App\Enums\ResponseCode;
use App\Repositories\EmployerRepository;
use App\Services\Common\SendOtp;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;

class OtpService
{

    public $cashName="employerPhone";

    public function send($mobile)
    {
        $code = rand(11111, 99999);
        $check_otp = Cache::get($this->cashName.$mobile);
        $employer = EmployerRepository::FindByField("mobile",$mobile);
        $exist = true;
        if ($employer === null) {
            $exist = false;
        }
        if ($check_otp) {
            return failedResponse( __('auth.check_otp_error'), ResponseCode::NOT_ACCESS);

        } else {

            Cache::put($this->cashName.$mobile, $code, 60);
            SendOtp::sendOtp($mobile, $code,"otpCodeEmployer");
            return successResponse(['exist' => $exist],__("Common.successResponse"));
        }
    }

    public function verify($mobile, $code)
    {
        $check_otp = Cache::get($this->cashName.$mobile);
        if ($check_otp == $code) {
            $user_check = EmployerRepository::FindByField("mobile",$mobile);
            if ($user_check) {
                return successResponse([ 'user' => $user_check, "exist" => true],__("Common.successResponse"));
            } else {
                return successResponse(['token' => '', 'user' => '', "exist" => false, "mobile" => $mobile],__("Common.successResponse"));
            }
        } else {
            return failedResponse(__("auth.wrong_code"), ResponseCode::WRONG_CODE,Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
}
