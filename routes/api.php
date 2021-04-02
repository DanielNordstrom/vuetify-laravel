<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('login', ['as' => 'login', 'uses' => 'App\Http\Controllers\UserController@login']);
Route::post('register', 'App\Http\Controllers\UserController@register');

Route::group(['middleware' => 'auth:api'], function(){
    Route::get('/category/{category}/tasks', 'App\Http\Controllers\CategoryController@tasks');
    Route::resource('/category', 'App\Http\Controllers\CategoryController');
    Route::resource('/task', 'App\Http\Controllers\TaskController');
    Route::resource('/post', 'App\Http\Controllers\PostController');
});

/* Original
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/
