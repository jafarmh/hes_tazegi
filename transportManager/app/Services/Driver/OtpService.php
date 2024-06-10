<?php
namespace App\Services\Driver;

use App\Enums\ResponseCode;
use App\Repositories\CrmDriverRepository;
use App\Services\Common\SendOtp;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;

class OtpService
{

    public $cashName="driverPhone";

    public function send($mobile)
    {
        $code = rand(11111, 99999);
        $check_otp = Cache::get($this->cashName.$mobile);
        $driver = CrmDriverRepository::FindByField("mobile",$mobile);
        $exist = true;
        if ($driver === null) {
            $exist = false;
        }
        if ($check_otp) {
            return failedResponse( __('auth.check_otp_error'), ResponseCode::NOT_ACCESS);
        } else {
            if($exist){
                Cache::put($this->cashName.$mobile, $code, 60);
                SendOtp::sendOtp($mobile, $code);
            }
            return successResponse(['exist' => $exist],__("Common.successResponse"));
        }
    }

    public function verify($mobile, $code)
    {
        $check_otp = Cache::get($this->cashName.$mobile);
        if ($check_otp == $code) {
            $user_check = CrmDriverRepository::FindByField("mobile",$mobile);
            if ($user_check) {
                return successResponse([ 'user' => $user_check, "exist" => true],__("Common.successResponse"));
            } else {
                return successResponse([ 'user' => '', "exist" => false, "mobile" => $mobile],__("Common.successResponse"));
            }
        } else {
            return failedResponse(__("auth.wrong_code"), ResponseCode::WRONG_CODE,Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
}
