export interface Airline {
  code: string;
  created_at: string | null;
  id: number;
  name: string;
  updated_at: string | null;
}

export interface Airport {
  city: string;
  city_code: string;
  code: string;
  country_code: string;
  created_at: string | null;
  id: number;
  latitude: string;
  longitude: string;
  name: string;
  region_code: string;
  timezone: string;
  updated_at: string | null;
}

export interface OneWayData {
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
