<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AirportsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('airports')->insert([
            [
                'code' => 'YUL',
                'city_code' => 'YMQ',
                'name' => 'Pierre Elliott Trudeau International',
                'city' => 'Montreal',
                'country_code' => 'CA',
                'region_code' => 'QC',
                'latitude' => 45.457714,
                'longitude' => -73.749908,
                'timezone' => 'America/Montreal',
            ],
            [
                'code' => 'YVR',
                'city_code' => 'YVR',
                'name' => 'Vancouver International',
                'city' => 'Vancouver',
                'country_code' => 'CA',
                'region_code' => 'BC',
                'latitude' => 49.194698,
                'longitude' => -123.179192,
                'timezone' => 'America/Vancouver',
            ],
            [
                'code' => 'JFK',
                'city_code' => 'NYC',
                'name' => 'John F. Kennedy International Airport',
                'city' => 'New York City',
                'country_code' => 'US',
                'region_code' => 'NY',
                'latitude' => 40.6413111,
                'longitude' => -73.7781391,
                'timezone' => 'America/New_York',
            ],
            [
                'code' => 'LAX',
                'city_code' => 'LAX',
                'name' => 'Los Angeles International Airport',
                'city' => 'Los Angeles',
                'country_code' => 'US',
                'region_code' => 'CA',
                'latitude' => 33.9416,
                'longitude' => -118.4085,
                'timezone' => 'America/Los_Angeles',
            ],
            [
                'code' => 'CDG',
                'city_code' => 'PAR',
                'name' => 'Charles de Gaulle Airport',
                'city' => 'Paris',
                'country_code' => 'FR',
                'region_code' => 'IDF',
                'latitude' => 49.0097,
                'longitude' => 2.5478,
                'timezone' => 'Europe/Paris',
            ],
            [
                'code' => 'SYD',
                'city_code' => 'SYD',
                'name' => 'Sydney Airport',
                'city' => 'Sydney',
                'country_code' => 'AU',
                'region_code' => 'NSW',
                'latitude' => -33.9399,
                'longitude' => 151.1753,
                'timezone' => 'Australia/Sydney',
            ],
            [
                'code' => 'NRT',
                'city_code' => 'TYO',
                'name' => 'Narita International Airport',
                'city' => 'Tokyo',
                'country_code' => 'JP',
                'region_code' => 'KANTO',
                'latitude' => 35.7639,
                'longitude' => 140.3886,
                'timezone' => 'Asia/Tokyo',
            ],
            [
                'code' => 'DXB',
                'city_code' => 'DXB',
                'name' => 'Dubai International Airport',
                'city' => 'Dubai',
                'country_code' => 'AE',
                'region_code' => 'DU',
                'latitude' => 25.2528,
                'longitude' => 55.3644,
                'timezone' => 'Asia/Dubai',
            ],
            [
                'code' => 'HKG',
                'city_code' => 'HKG',
                'name' => 'Hong Kong International Airport',
                'city' => 'Hong Kong',
                'country_code' => 'HK',
                'region_code' => 'HK',
                'latitude' => 22.3080,
                'longitude' => 113.9185,
                'timezone' => 'Asia/Hong_Kong',
            ],
            [
                'code' => 'ICN',
                'city_code' => 'SEL',
                'name' => 'Incheon International Airport',
                'city' => 'Seoul',
                'country_code' => 'KR',
                'region_code' => '41',
                'latitude' => 37.4602,
                'longitude' => 126.4407,
                'timezone' => 'Asia/Seoul',
            ],
        ]);
    }
}
