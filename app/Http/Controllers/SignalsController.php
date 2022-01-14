<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Market;

class SignalsController extends Controller
{
    //
    public function index() {
        $markets = Market::all();
        return view('signals.index')->with("markets", $markets);
    }

    public function createSignal() {
        
    }
}
