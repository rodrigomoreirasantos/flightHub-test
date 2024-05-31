<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AirlineController extends Controller
{
    public function index()
    {
        return Airline::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|string|max:2|unique:airlines,code',
            'name' => 'required|string',
        ]);

        return Airline::create($request->all());
    }
}
