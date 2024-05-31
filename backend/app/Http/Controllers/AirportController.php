<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AirportController extends Controller
{
    public function index()
    {
        return Airport::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|string|max:3|unique:airports,code',
            'city_code' => 'required|string|max:3',
            'name' => 'required|string',
            'city' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'timezone' => 'required|string',
        ]);

        return Airport::create($request->all());
    }
}
