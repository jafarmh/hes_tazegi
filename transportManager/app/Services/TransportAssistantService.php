<?php
namespace App\Services;

use App\Repositories\TransportAssistantRepository;
use Illuminate\Http\Request;

class TransportAssistantService
{

    public static function auth(Request $request)
    {
        if(empty($request->ip()) || empty($request->header('Token'))) return false;
        return TransportAssistantRepository::getCompanyByTokenAndIp($request->ip(),$request->header('Token'))->first();
    }

}
