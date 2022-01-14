<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

class Chart extends Model
{
    use HasFactory;

    protected $table = "charts";
    public $timestamps = false;
}
