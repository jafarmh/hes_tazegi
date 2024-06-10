<?php

namespace App\Http\Middleware;

use App\Enums\ResponseCode;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Symfony\Component\HttpFoundation\Response;

class DriverLoadListPermissionLevelValid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $driverLevel=auth("driver")->user()->level;
        if($driverLevel==='Bronze'){
            return failedResponse(__("common.notAllow"),ResponseCode::NOT_ACCESS,HttpResponse::HTTP_NOT_ACCEPTABLE);
        }
        return $next($request);
    }
}
