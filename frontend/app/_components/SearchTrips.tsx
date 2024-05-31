"use client";

import { Tabs, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import OneWayTrip from "./OneWayTrip";
import RoundTrip from "./RoundTrip";
import { useContext, useState } from "react";
import { CardTripContext } from "../_providers/cardTrips";
import OneWayCard from "./OneWayCard";
import { OneWayData } from "../types/oneWayData";
import { RoundTripData } from "../types/roundTripData";
import RoundTripCard from "./RoundTripCard";
import { Skeleton } from "./ui/skeleton";
import SkeletonCard from "./SkeletonCard";

const SearchTrips = () => {
  const { cardOneWay, dateOneWay, cardRoundTrip, dateRoundTrip, isLoading } =
    useContext(CardTripContext);
  const [selectedTab, setSelectedTab] = useState("roundTrip");

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-xl">
        <span className="font-light">Find </span>
        <span className="font-semibold">your Flights </span>
        <span className="font-light">and Save</span>
      </h1>

      <h2>
        Search you best deals for travel -{" "}
        <span className="font-semibold">Book now!</span>
      </h2>

      <div className="w-full">
        <Tabs
          defaultValue="roundTrip"
          className="pt-8"
          onValueChange={(value) => setSelectedTab(value)}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="roundTrip">Round Trip</TabsTrigger>
            <TabsTrigger value="oneWay">One Way</TabsTrigger>
          </TabsList>

          {selectedTab === "roundTrip" && <RoundTrip />}
          {selectedTab === "oneWay" && <OneWayTrip />}
        </Tabs>
      </div>
      <div className="w-full mt-8 flex flex-col gap-6 mb-8">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <>
            {selectedTab === "oneWay"
              ? cardOneWay &&
                cardOneWay.map((tripDetail: OneWayData) => (
                  <OneWayCard
                    key={tripDetail.id}
                    tripDetail={tripDetail}
                    dateOneWay={dateOneWay}
                  />
                ))
              : selectedTab === "roundTrip"
              ? cardRoundTrip &&
                cardRoundTrip.map((tripDetail: RoundTripData) => (
                  <RoundTripCard
                    key={tripDetail.id}
                    tripDetail={tripDetail}
                    dateRoundTrip={dateRoundTrip}
                  />
                ))
              : null}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchTrips;
