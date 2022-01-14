<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('market')->insert([
            ['type' => 0, 'title' => 'BTCUSD', 'desc' => 'BTC / U.S DOLLAR', 'price' => 4965.09, 'imguri' => 'BTCUSD.svg', 'favorite' => 1],
            ['type' => 0, 'title' => 'ETHUSD', 'desc' => 'ETH / U.S DOLLAR', 'price' => 4965.09, 'imguri' => 'ETHUSD.svg', 'favorite' => 1],
            ['type' => 0, 'title' => 'XRPUSD', 'desc' => 'XRP / U.S DOLLAR', 'price' => 4965.09, 'imguri' => 'XRPUSD.svg', 'favorite' => 1],
            ['type' => 0, 'title' => 'LTCUSD', 'desc' => 'LTC / U.S DOLLAR', 'price' => 4965.09, 'imguri' => 'LTCUSD.svg', 'favorite' => 0],
            ['type' => 0, 'title' => 'XLMUSD', 'desc' => 'XLM / U.S DOLLAR', 'price' => 4965.09, 'imguri' => 'XLMUSD.svg', 'favorite' => 0],
            ['type' => 0, 'title' => 'ADAUSD', 'desc' => 'ADA / U.S DOLLAR', 'price' => 4965.09, 'imguri' => 'ADAUSD.svg', 'favorite' => 0],
            ['type' => 0, 'title' => 'SOLUSD', 'desc' => 'SOL / U.S DOLLAR', 'price' => 4965.09, 'imguri' => 'SOLUSD.svg', 'favorite' => 0],
            ['type' => 0, 'title' => 'DOTUSD', 'desc' => 'DOT / U.S DOLLAR', 'price' => 4965.09, 'imguri' => 'DOTUSD.svg', 'favorite' => 0],
            ['type' => 0, 'title' => 'MATICUSD', 'desc' => 'MATIC / U.S DOLLAR', 'price' => 4965.09, 'imguri' => 'MATICUSD.svg', 'favorite' => 0],
            ['type' => 0, 'title' => 'LINKUSD', 'desc' => 'LINK / U.S DOLLAR', 'price' => 4965.09, 'imguri' => 'LINKUSD.svg', 'favorite' => 0],
            ['type' => 0, 'title' => 'ATOMUSD', 'desc' => 'ATOM / U.S DOLLAR', 'price' => 4965.09, 'imguri' => 'ATOMUSD.svg', 'favorite' => 0],
            ['type' => 0, 'title' => 'DASHUSD', 'desc' => 'DASH / U.S DOLLAR', 'price' => 4965.09, 'imguri' => 'DASHUSD.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'USDCAD', 'desc' => 'USD/CAD', 'price' => 4965.09, 'imguri' => 'USDCAD.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'EURCAD', 'desc' => 'EUR/CAD', 'price' => 4965.09, 'imguri' => 'EURCAD.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'USDCHF', 'desc' => 'USD/CHF', 'price' => 4965.09, 'imguri' => 'USDCHF.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'GBPUSD', 'desc' => 'GBP/USD', 'price' => 4965.09, 'imguri' => 'GBPUSD.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'NZDUSD', 'desc' => 'NZD/USD', 'price' => 4965.09, 'imguri' => 'NZDUSD.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'AUDUSD', 'desc' => 'AUD/USD', 'price' => 4965.09, 'imguri' => 'AUDUSD.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'USDJPY', 'desc' => 'USD/JPY', 'price' => 4965.09, 'imguri' => 'USDJPY.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'EURCAD', 'desc' => 'EUR/CAD', 'price' => 4965.09, 'imguri' => 'EURCAD.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'EURAUD', 'desc' => 'EUR/AUD', 'price' => 4965.09, 'imguri' => 'EURAUD.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'EURJPY', 'desc' => 'EUR/JPY', 'price' => 4965.09, 'imguri' => 'EURJPY.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'EURCHF', 'desc' => 'EUR/CHF', 'price' => 4965.09, 'imguri' => 'EURCHF.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'EURGBP', 'desc' => 'EUR/GBP', 'price' => 4965.09, 'imguri' => 'EURGBP.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'AUDCAD', 'desc' => 'AUD/CAD', 'price' => 4965.09, 'imguri' => 'AUDCAD.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'GBPCHF', 'desc' => 'GBP/CHF', 'price' => 4965.09, 'imguri' => 'GBPCHF.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'GBPJPY', 'desc' => 'GBP/JPY', 'price' => 4965.09, 'imguri' => 'GBPJPY.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'CHFJPY', 'desc' => 'CHF/JPY', 'price' => 4965.09, 'imguri' => 'CHFJPY.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'AUDJPY', 'desc' => 'AUD/JPY', 'price' => 4965.09, 'imguri' => 'AUDJPY.svg', 'favorite' => 0],
            ['type' => 1, 'title' => 'AUDNZD', 'desc' => 'AUD/NZD', 'price' => 4965.09, 'imguri' => 'AUDNZD.svg', 'favorite' => 0],
            ['type' => 2, 'title' => 'US30', 'desc' => 'USD', 'price' => 100.09, 'imguri' => 'US.svg', 'favorite' => 0],
            ['type' => 2, 'title' => 'SPX500', 'desc' => 'USD', 'price' => 100.09, 'imguri' => 'US.svg', 'favorite' => 0],
            ['type' => 2, 'title' => 'DXY', 'desc' => 'USD', 'price' => 100.09, 'imguri' => 'US.svg', 'favorite' => 0],
            ['type' => 2, 'title' => 'NAS100', 'desc' => 'USD', 'price' => 100.09, 'imguri' => 'US.svg', 'favorite' => 0],
            ['type' => 2, 'title' => 'GER30', 'desc' => 'EUR', 'price' => 50.09, 'imguri' => 'GER.svg', 'favorite' => 0],
            ['type' => 2, 'title' => 'JPN225', 'desc' => 'JPY', 'price' => 30.09, 'imguri' => 'JPN.svg', 'favorite' => 0],
            ['type' => 2, 'title' => 'UK100', 'desc' => 'GBP', 'price' => 120.50, 'imguri' => 'UK.svg', 'favorite' => 0],
        ]);
    }
}
