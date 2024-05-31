export interface Airport {
  id: number;
  code: string;
  city_code: string;
  name: string;
  city: string;
  country_code: string;
  created_at: string | null;
  updated_at: string | null;
  latitude: string;
  longitude: string;
  region_code: string;
  timezone: string;
}

export interface Airline {
  code: string;
  created_at: string | null;
  id: number;
  name: string;
  updated_at: string | null;
}

export interface RoundTripData {
  code: string;
  airline: Airline;
  airline_id: number;
  arrival_airport: Airport;
  arrival_airport_id: number;
  arrival_time: string;
  created_at: string | null;
  departure_airport: Airport;
  departure_airport_id: number;
  departure_time: string;
  id: number;
  number: string;
  price: string;
  updated_at: string | null;
}
