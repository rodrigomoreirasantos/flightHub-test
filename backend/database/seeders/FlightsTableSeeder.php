<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FlightsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('flights')->insert([
            [
                'airline_id' => 1, 
                'number' => '301',
                'departure_airport_id' => 1, 
                'departure_time' => '07:35',
                'arrival_airport_id' => 2, 
                'arrival_time' => '10:05',
                'price' => '273.23',
            ],
            [
                'airline_id' => 1, 
                'number' => '302',
                'departure_airport_id' => 2, 
                'departure_time' => '11:30',
                'arrival_airport_id' => 1, 
                'arrival_time' => '19:11',
                'price' => '220.63',
            ],
            [
                'airline_id' => 2, 
                'number' => '101',
                'departure_airport_id' => 3, 
                'departure_time' => '09:00',
                'arrival_airport_id' => 4, 
                'arrival_time' => '11:30',
                'price' => '350.50',
            ],
            [
                'airline_id' => 3, 
                'number' => '201',
                'departure_airport_id' => 4, 
                'departure_time' => '13:45',
                'arrival_airport_id' => 3, 
                'arrival_time' => '22:15',
                'price' => '400.75',
            ],
            [
                'airline_id' => 4, 
                'number' => '401',
                'departure_airport_id' => 3, 
                'departure_time' => '08:30',
                'arrival_airport_id' => 4, 
                'arrival_time' => '11:00',
                'price' => '320.80',
            ],
            [
                'airline_id' => 5, 
                'number' => '501',
                'departure_airport_id' => 5, 
                'departure_time' => '10:00',
                'arrival_airport_id' => 6, 
                'arrival_time' => '12:30',
                'price' => '280.90',
            ],
            [
                'airline_id' => 6, 
                'number' => '601',
                'departure_airport_id' => 6, 
                'departure_time' => '14:15',
                'arrival_airport_id' => 7, 
                'arrival_time' => '15:45',
                'price' => '190.60',
            ],
            [
                'airline_id' => 7, 
                'number' => '701',
                'departure_airport_id' => 6, 
                'departure_time' => '16:00',
                'arrival_airport_id' => 3, 
                'arrival_time' => '19:30',
                'price' => '500.00',
            ],
            [
                'airline_id' => 8, 
                'number' => '801',
                'departure_airport_id' => 8, 
                'departure_time' => '07:00',
                'arrival_airport_id' => 4, 
                'arrival_time' => '12:30',
                'price' => '650.25',
            ],
            [
                'airline_id' => 9, 
                'number' => '901',
                'departure_airport_id' => 9, 
                'departure_time' => '11:30',
                'arrival_airport_id' => 4, 
                'arrival_time' => '17:00',
                'price' => '720.35',
            ],
        ]);
    }
}
