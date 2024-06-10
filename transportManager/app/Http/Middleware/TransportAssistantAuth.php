<?php

namespace App\Http\Middleware;

use App\Enums\ResponseCode;
use App\Repositories\TransportAssistantRepository;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Response as HttpResponse;


class TransportAssistantAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$this->isValidTokenAndIp($request->ip(),$request->header('Token'))) {
            return failedResponse(__("common.notAllow"),ResponseCode::NOT_ACCESS,HttpResponse::HTTP_NOT_ACCEPTABLE);
        }

        return $next($request);
    }

    private function isValidTokenAndIp($ip,$token)
    {
        if($ip == '' || $token == '') return false;
        return TransportAssistantRepository::getCompanyByTokenAndIp($ip,$token) === NULL ? false : true;
    }
}
