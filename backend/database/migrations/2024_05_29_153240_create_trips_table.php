<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->foreignId('departure_flight_id')->constrained('flights')->onDelete('cascade');
            $table->foreignId('return_flight_id')->nullable()->constrained('flights')->onDelete('cascade');
            $table->date('departure_date');
            $table->date('return_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trips');
        Schema::table('trips', function (Blueprint $table) {
            $table->dropColumn('departure_date');
            $table->dropColumn('return_date');
        });
    }
}
