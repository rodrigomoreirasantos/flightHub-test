<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AirlineController;
use App\Http\Controllers\AirportController;
use App\Http\Controllers\FlightController;
use App\Http\Controllers\TripController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/airlines', [AirlineController::class, 'index']);
// Route::post('/airlines', [AirlineController::class, 'store']);

Route::get('/airports', [AirportController::class, 'index']);
// Route::post('/airports', [AirportController::class, 'store']);

Route::get('/flights', [FlightController::class, 'index']);
// Route::post('/flights', [FlightController::class, 'store']);

Route::get('/trips', [TripController::class, 'index']);
// Route::post('/trips', [TripController::class, 'store']);
