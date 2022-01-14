<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Market;

class MarketController extends Controller
{
    //
    public function index(){
        $markets = Market::all();
        return view('market.index')->with("markets", $markets);
    }

    public function editsymbol(Request $request) {
        $id = $request->id;
        $favorite = ($request->favorite === 'true');

        $symbol = Market::where('id', $id)->update(['favorite' => $favorite]);
        
        return $symbol;
    }
}
