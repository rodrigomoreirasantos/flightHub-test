<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TripController extends Controller
{
    public function index()
    {
        return Trip::with(['departureFlight', 'returnFlight'])->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'departure_flight_id' => 'required|exists:flights,id',
            'return_flight_id' => 'nullable|exists:flights,id',
        ]);

        return Trip::create($request->all());
    }
}
