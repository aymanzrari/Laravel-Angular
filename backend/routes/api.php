<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmployeController;

Route::group([
    'middleware' => 'api',
], function ($router) {
    Route::post('login', [AuthController::class,'login']);
    Route::post('signup', [AuthController::class,'signup']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me',  [AuthController::class,'me']);
    Route::apiResource('employes', EmployeController::class);
    Route::post('me',  [AuthController::class,'me']);
});

