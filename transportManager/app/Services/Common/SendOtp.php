<?php

namespace App\Services\Common;
use Kavenegar;

class SendOtp
{
    public static function use(): SendOtp
    {
        return new static();
    }
    /**
     * @param $mobile
     * @param $code
     */
    public static function sendOtp($mobile, $code,$op="otpCode")
    {
        try{
            $token = $code;
            $result = Kavenegar::VerifyLookup($mobile,$token,null,null,$op,'sms');
            if($result){
                return ["success"=>true,"code"=>''];
            }


        }
        catch(\Kavenegar\Exceptions\ApiException $e){
            
            // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
            return response()->json(["error"=>$e->errorMessage()]);
        }
        catch(\Kavenegar\Exceptions\HttpException $e){
           
            // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
            return response()->json(["error"=>$e->errorMessage()]);
        }
    }

    public  function sendSms($mobile, $text)
    {
        try{
            $sender = "10008663";		//This is the Sender number
            $receptor = array($mobile);			//Receptors numbers

            $result = Kavenegar::Send($sender,$receptor,$text);
            if($result){
                foreach($result as $r){
                    return $r;
                }
            }
        }
        catch(\Kavenegar\Exceptions\ApiException $e){
            // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
            return $e->errorMessage();
        }
        catch(\Kavenegar\Exceptions\HttpException $e){
            // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
            return $e->errorMessage();
        }
    }
}