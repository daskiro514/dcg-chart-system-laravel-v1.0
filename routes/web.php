<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', 'MainController@index')->middleware(['auth'])->name('Mainboard');
Route::get('/dashboard', 'MainController@index');
Route::get('/news', 'MainController@getRSSFeedContent');
Route::get('/market', 'MarketController@index');
Route::post('/market/editsymbol', 'MarketController@editsymbol');
Route::get('/signalsmng', 'SignalsController@index')->name('mng-signals');
Route::post('/newsignal', 'SignalsController@createSignal')->name('new-signal');
Route::get('/post','PostController@index');
Route::match(array('GET', 'POST', 'DELETE'), '/storage/1.1/charts', 'MainController@storage');

require __DIR__.'/auth.php';