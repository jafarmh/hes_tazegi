<?php

use App\Http\Controllers\TransportAssistant\BasicDataController;
use App\Http\Controllers\TransportAssistant\TransportAssistantTicketController;
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

Route::middleware(['transportAssistantAuth'])->group(function () {
    Route::get('cityList', [BasicDataController::class, "cityList"]);
    Route::get('stateList', [BasicDataController::class, "stateList"]);
    Route::get('goodsList', [BasicDataController::class, "goodsList"]);
    Route::get('packagingList', [BasicDataController::class, "packagingList"]);
    Route::get('loaderList', [BasicDataController::class, "loaderList"]);
    Route::get('carBrandList', [BasicDataController::class, "carBrandList"]);
    Route::get('fleetTypeList', [BasicDataController::class, "fleetTypeList"]);
    Route::get('insurerList', [BasicDataController::class, "insurerList"]);


    Route::group(['prefix' => 'ticket'], function () {
        Route::get('', [TransportAssistantTicketController::class, "transportAssistantTickets"]);
        Route::get('/{id}', [TransportAssistantTicketController::class, "transportAssistantTicketDetail"]);

        //Set Rate limiter for post methods
        // Route::middleware('throttle:5,1')->group(function () {
            Route::post('', [TransportAssistantTicketController::class, "transportAssistantNewTicket"]);
            Route::post('/{ticket}', [TransportAssistantTicketController::class, "transportAssistantNewMessage"]);
        // });
    });
});
