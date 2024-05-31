<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AirlinesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('airlines')->insert([
            [
                'code' => 'AC',
                'name' => 'Air Canada',
            ],
            [
                'code' => 'AA',
                'name' => 'American Airlines',
            ],
            [
                'code' => 'DL',
                'name' => 'Delta Air Lines',
            ],
            [
                'code' => 'UA',
                'name' => 'United Airlines',
            ],
            [
                'code' => 'BA',
                'name' => 'British Airways',
            ],
            [
                'code' => 'LH',
                'name' => 'Lufthansa',
            ],
            [
                'code' => 'AF',
                'name' => 'Air France',
            ],
            [
                'code' => 'EK',
                'name' => 'Emirates',
            ],
            [
                'code' => 'SQ',
                'name' => 'Singapore Airlines',
            ],
            [
                'code' => 'QF',
                'name' => 'Qantas',
            ],
        ]);
    }
}
