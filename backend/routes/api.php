<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// No Auth Routes
Route::middleware('web')->group(function () {
    Route::post('/login', [AuthController::class, 'logIn']);
    Route::post('/logout', [AuthController::class, 'logOut'])->middleware('auth:sanctum');
    Route::post('/users/create', [UserController::class, 'create']);
});

// Auth Routes
Route::prefix('users')->middleware('auth:sanctum')->group(function () {
    Route::get('/list', [UserController::class, 'list']);
    Route::put('/update/{id}', [UserController::class, 'update']);
    Route::get('/me', [UserController::class, 'me']);
});
