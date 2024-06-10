<?php

use App\Enums\ResponseCode;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

if (!function_exists('successResponse')) {
    function successResponse($data, $message = ''): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $data,
            'message' => $message!==''?$message:__("common.successResponse")
        ]);
    }
}

if (!function_exists('failedResponse')) {
    function failedResponse($message, $code=ResponseCode::OK): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message,
        ], $code);
    }
}
