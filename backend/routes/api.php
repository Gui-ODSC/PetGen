<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// No Auth Routes
Route::post('/login', [AuthController::class, 'logIn']);
Route::post('/users/create', [UserController::class, 'create']);

// Auth Routes
Route::prefix('users')->middleware('auth:sanctum')->group(function () {
    Route::get('/list', [UserController::class, 'list']);
    Route::put('/update/{id}', [UserController::class, 'update']);
    Route::post('/logout', [AuthController::class, 'logOut']);
});
