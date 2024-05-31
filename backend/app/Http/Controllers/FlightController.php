<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Flight;
use App\Models\Airport;

class FlightController extends Controller
{
    public function index(Request $request)
    {
        $leaving = $request->query('leaving');
        $going = $request->query('going');
        $departingFrom = $request->query('departingFrom');
        $departingTo = $request->query('departingTo');

        \Log::info("Received params: leaving={$leaving}, going={$going}, departingFrom={$departingFrom}, departingTo={$departingTo}");

        $query = Flight::with(['airline', 'departureAirport', 'arrivalAirport']);

        if ($leaving) {
            $departureAirports = Airport::where('name', 'like', '%' . $leaving . '%')
                ->orWhere('city', 'like', '%' . $leaving . '%')
                ->pluck('id');
            if ($departureAirports->isNotEmpty()) {
                $query->whereIn('departure_airport_id', $departureAirports);
            }
        }

        if ($going) {
            $arrivalAirports = Airport::where('name', 'like', '%' . $going . '%')
                ->orWhere('city', 'like', '%' . $going . '%')
                ->pluck('id');
            if ($arrivalAirports->isNotEmpty()) {
                $query->whereIn('arrival_airport_id', $arrivalAirports);
            }
        }

        if ($departingFrom && $departingTo) {
            $query->whereBetween('departure_time', [$departingFrom, $departingTo]);
        } elseif ($departingFrom) {
            $query->whereDate('departure_time', $departingFrom);
        }

        $flights = $query->get();

        return response()->json($flights);
    }

    public function store(Request $request)
    {
        $request->validate([
            'airline_id' => 'required|exists:airlines,id',
            'number' => 'required|string|unique:flights,number',
            'departure_airport_id' => 'required|exists:airports,id',
            'departure_time' => 'required|date_format:H:i',
            'arrival_airport_id' => 'required|exists:airports,id',
            'arrival_time' => 'required|date_format:H:i',
            'price' => 'required|numeric',
        ]);

        return Flight::create($request->all());
    }
}
