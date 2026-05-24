<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/* Route::get('/user', function (Request $request) {
    return var_dump("Hello");
})->middleware('auth:api'); */

// No Auth Routes
Route::post('/users/create', [UserController::class, 'create']);


// Auth Routes
Route::prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'list']);
});
