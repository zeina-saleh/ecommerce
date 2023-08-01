<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::post('/add_update_product/{id?}', [AdminController::class, "addOrUpdateProduct"]);
Route::get('/findproduct/{id}', [AdminController::class, "findProduct"]);
Route::get('/deleteproduct/{id}', [AdminController::class, "deleteProduct"]);
Route::get('/products/{id?}', [AdminController::class, "getProducts"]);

Route::get('/get_cart_items/{id}', [UserController::class, "getCartItems"]);
Route::post('/add_to_cart', [UserController::class, "addToCart"]);
Route::get('/delete_from_cart/{id}', [UserController::class, "deleteFromCart"]);
Route::get('/logout', [UserController::class], "logoutUser");

