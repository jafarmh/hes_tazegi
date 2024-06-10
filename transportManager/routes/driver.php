<?php

use App\Http\Controllers\Driver\AuthController;
use App\Http\Controllers\Driver\DriverTicketController;
use App\Http\Controllers\Driver\InformationController;
use App\Http\Controllers\Driver\ShippingController;
use App\Http\Controllers\Driver\TransportController;
use App\Http\Controllers\Manager\OrderController;
use App\Http\Controllers\OpinionDriverController;
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
Route::post('register', [AuthController::class, "register"]);


Route::middleware(['json.response','auth:driver'])->group(function () {
    Route::get('profile', [InformationController::class, "profile"]);
    Route::put('profile', [InformationController::class, "profileUpdate"]);
    Route::get('transportInquiry', [InformationController::class, "transportInquiry"]);

    Route::group(['prefix' => 'profile'], function () {
        Route::get('', [InformationController::class, "profile"]);
        Route::put('', [InformationController::class, "profileUpdate"]);
        Route::post('attachment', [InformationController::class, "profileUpdateAttachment"]);
    });
    Route::group(['prefix' => 'shipping'], function () {
        Route::get('done', [ShippingController::class, "shippingDoneList"]);
        Route::get('active', [ShippingController::class, "shippingActive"]);
        Route::get('/{id}', [ShippingController::class, "shippingDetail"]);
        Route::post('/location/log', [ShippingController::class, "addShippingLocationLogDriver"]);

    });

    Route::group(['prefix' => 'ticket'], function () {
        Route::get('', [DriverTicketController::class, "driverTickets"]);
        Route::post('', [DriverTicketController::class, "driverNewTicket"]);
        Route::post('/{ticket}', [DriverTicketController::class, "driverNewMessage"]);
        Route::get('/{id}', [DriverTicketController::class, "driverTicketDetail"]);
    });

    Route::group(['prefix' => 'order','middleware' => ['driverLevel']], function () {
        Route::get('', [OrderController::class, "list"]);
        Route::get('/{id}', [OrderController::class, "show"]);
        Route::post('/request', [OrderController::class, "newRequest"]);

    });
    
    Route::group(['prefix' => 'transport'], function () {
        Route::get('', [TransportController::class, "list"]);
        Route::get('/{crmDriverTransport}', [TransportController::class, "show"]);
        Route::put('active/{crmDriverTransport}', [TransportController::class, "active"]);
        Route::put('deActive/{crmDriverTransport}', [TransportController::class, "deActive"]);
        Route::post('add', [TransportController::class, "addTransport"]);
        Route::put('edit/{crmDriverTransport}', [TransportController::class, "editTransport"]);
        Route::post('attachment/{crmDriverTransport}', [TransportController::class, "addAttachment"]);
    });

    Route::apiResource('opinion', OpinionDriverController::class);


});
