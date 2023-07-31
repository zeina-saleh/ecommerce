<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\AdminController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::post('/add_update_product/{id?}', [AdminController::class, "addOrUpdateProduct"]);
Route::get('/findproduct/{id}', [AdminController::class, "findProduct"]);
Route::get('/deleteproduct/{id}', [AdminController::class, "deleteProduct"]);