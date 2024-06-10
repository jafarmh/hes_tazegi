<?php

use App\Http\Controllers\Employer\AuthController;
use App\Http\Controllers\Employer\TicketController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('otp', [AuthController::class, "sendOtp"]);
Route::get('login', [AuthController::class, "login"]);

Route::group(['prefix' => 'register'], function () {
    Route::post('company', [AuthController::class, "registerCompany"]);
    Route::post('person', [AuthController::class, "registerPerson"]);
});

Route::middleware(['json.response', 'auth:employer'])->group(function () {
    Route::apiResource('ticket', TicketController::class);
    Route::post('ticket/{ticket}', [TicketController::class, "employerNewMessage"]);

});
