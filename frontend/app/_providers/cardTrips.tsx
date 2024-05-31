"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { RoundTripData } from "../types/roundTripData";
import { OneWayData } from "../types/oneWayData";
import { addDays } from "date-fns";

interface CardTripsContextProps {
  cardOneWay: OneWayData[];
  setCardOneWay: Dispatch<SetStateAction<OneWayData[]>>;
  cardRoundTrip: RoundTripData[];
  setCardRoundTrip: Dispatch<SetStateAction<RoundTripData[]>>;
  dateOneWay: Date | undefined;
  setDateOneWay: Dispatch<SetStateAction<Date | undefined>>;
  dateRoundTrip: any | undefined;
  setDateRoundTrip: Dispatch<SetStateAction<any | undefined>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const CardTripContext = createContext({} as CardTripsContextProps);

const CardTripProvider = ({ children }: { children: ReactNode }) => {
  const [cardOneWay, setCardOneWay] = useState<OneWayData[]>([]);
  const [cardRoundTrip, setCardRoundTrip] = useState<RoundTripData[]>([]);
  const [dateOneWay, setDateOneWay] = useState<Date | undefined>(new Date());
  const [dateRoundTrip, setDateRoundTrip] = useState<any | undefined>({
    from: new Date(),
    to: addDays(new Date(), 10),
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CardTripContext.Provider
      value={{
        cardOneWay,
        setCardOneWay,
        cardRoundTrip,
        setCardRoundTrip,
        dateOneWay,
        setDateOneWay,
        dateRoundTrip,
        setDateRoundTrip,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CardTripContext.Provider>
  );
};

export default CardTripProvider;
