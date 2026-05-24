<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;

Route::get('/user', function (Request $request) {
    return var_dump("Hello");
});
