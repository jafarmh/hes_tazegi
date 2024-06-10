<?php

use App\Http\Controllers\Manager\AuthController;
use App\Http\Controllers\Manager\CityController;
use App\Http\Controllers\Manager\ConstantController;
use App\Http\Controllers\Manager\ConstantTypeController;
use App\Http\Controllers\Manager\DataController;
use App\Http\Controllers\Manager\DriverController;
use App\Http\Controllers\Manager\EmployerController;
use App\Http\Controllers\Manager\StateController;
use App\Http\Controllers\Manager\TicketController;
use Illuminate\Support\Facades\Route;

Route::get('login', [AuthController::class, "login"]);

Route::get("cities", [CityController::class, "index"]);
Route::get("states", [StateController::class, "index"]);
Route::get("constants", [DataController::class, "constant"]);
Route::get("constant/type", [DataController::class, "types"]);
Route::get("crmLoaders", [DataController::class, "crmLoaders"]);

Route::middleware(['auth:manager'])->group(function () {
    Route::post('user/add', [AuthController::class, "store"]);
    Route::get('user', [AuthController::class, "list"]);
    Route::apiResource('driver', DriverController::class);
    Route::apiResource('constant', ConstantController::class);
    Route::apiResource('constantType', ConstantTypeController::class);
    Route::apiResource('city', CityController::class);
    Route::apiResource('state', StateController::class);
    Route::get('ticket', [TicketController::class,"index"]);
    Route::get('ticket/{ticket}', [TicketController::class,"show"]);
    Route::post('ticket/{ticket}', [TicketController::class,"store"]);
    Route::group(['prefix' => 'employer'], function () {
        Route::get('/', [EmployerController::class, "index"]);
        Route::get('/{id}', [EmployerController::class, "show"]);
        Route::put('/company/{id}', [EmployerController::class, "updateCompany"]);
        Route::put('/person/{id}', [EmployerController::class, "updatePerson"]);
        Route::delete('/company/{id}', [EmployerController::class, "destroyCompany"]);
        Route::delete('/person/{id}', [EmployerController::class, "destroyPerson"]);
    });
 

});

?>