<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\API\ForgotPasswordController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\ProvinceController;
use App\Http\Controllers\API\DistrictController;
use App\Http\Controllers\API\CommuneController;
use App\Http\Controllers\API\OdController;
use App\Http\Controllers\API\HcController;
use App\Http\Controllers\API\VillageController;
use App\Http\Controllers\API\FindLocationController;



Route::post('/login', [AuthController::class, 'login']); // Login Form

Route::post('/forgot-password', [ForgotPasswordController::class, 'sendResetLinkEmail']); // Reset Password
Route::post('/reset-password', [ForgotPasswordController::class, 'reset']);


// Role routes
Route::post('/register', [RegisterController::class, 'store']); // Insert Data in form register
Route::get('/registers', [RegisterController::class, 'index']); // Get Data in form register
Route::put('/registers/{id}', [RegisterController::class, 'update']); // Update Data in from register
Route::delete('/registers/{id}', [RegisterController::class, 'destroy']); // Delete Data in from register


// Role routes
Route::get('/roles', [RoleController::class, 'index']);
Route::post('/roles', [RoleController::class, 'store']);
Route::put('/roles/{id}', [RoleController::class, 'update']);
Route::delete('/roles/{id}', [RoleController::class, 'destroy']);

Route::get('/find-location/search', [FindLocationController::class, 'search']);

// Province routes
Route::get('/provinces', [ProvinceController::class, 'index']);
Route::get('/provinces/next-code', [ProvinceController::class, 'nextCode']);
Route::post('/provinces', [ProvinceController::class, 'store']);
Route::put('/provinces/{id}', [ProvinceController::class, 'update']);
Route::delete('/provinces/{id}', [ProvinceController::class, 'destroy']);


// District routes
Route::get('/districts', [DistrictController::class, 'index']);
Route::get('/districts/next-code/{province_code}', [DistrictController::class, 'nextCode']);
Route::post('/districts', [DistrictController::class, 'store']);
Route::put('/districts/{id}', [DistrictController::class, 'update']);
Route::delete('/districts/{id}', [DistrictController::class, 'destroy']);

// Commune routes
Route::get('/communes', [CommuneController::class, 'index']);
Route::get('/communes/next-code/{district_code}', [CommuneController::class, 'nextCode']);
Route::post('/communes', [CommuneController::class, 'store']);
Route::put('/communes/{id}', [CommuneController::class, 'update']);
Route::delete('/communes/{id}', [CommuneController::class, 'destroy']);

// OD routes
Route::get('/ods', [OdController::class, 'index']);
Route::get('/ods/next-code/{commune_code}', [OdController::class, 'nextCode']);
Route::post('/ods', [OdController::class, 'store']);
Route::put('/ods/{id}', [OdController::class, 'update']);
Route::delete('/ods/{id}', [OdController::class, 'destroy']);

// HC routes
Route::get('/health-centers', [HcController::class, 'index']);
Route::get('/health-centers/next-code/{od_code}', [HcController::class, 'nextCode']);
Route::post('/health-centers', [HcController::class, 'store']);
Route::put('/health-centers/{id}', [HcController::class, 'update']);
Route::delete('/health-centers/{id}', [HcController::class, 'destroy']);


// Village routes
Route::get('/villages', [VillageController::class, 'index']);
Route::get('/villages/next-code/{hc_code}', [VillageController::class, 'nextCode']);
Route::post('/villages', [VillageController::class, 'store']);
Route::get('/villages/{id}', [VillageController::class, 'show']);
Route::put('/villages/{id}', [VillageController::class, 'update']);
Route::delete('/villages/{id}', [VillageController::class, 'destroy']);



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
