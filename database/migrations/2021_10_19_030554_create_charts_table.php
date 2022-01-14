<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('charts', function (Blueprint $table) {
            $table->id();
            $table->string('user', 255)->nullable(false);
            $table->string('client', 255)->nullable(false);
            $table->string('name', 255)->nullable(false);
            $table->string('resolution', 255)->nullable(false);
            $table->string('symbol', 255)->nullable(false);
            $table->mediumtext('content')->nullable(false);
            $table->integer('timestamp')->nullable(false);
            $table->timestamp('updated_at')->nullable(false)->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('charts');
    }
}
