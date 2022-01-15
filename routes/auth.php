<?php

use Illuminate\Support\Facades\Route;

Route::get('/login', 'AuthenticateController@create')->name('login');
Route::post('/login', 'AuthenticateController@store');
Route::get('/logout', 'AuthenticateController@destroy');
