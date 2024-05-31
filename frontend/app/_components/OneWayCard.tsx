import { Backpack, Briefcase, Luggage, PlaneTakeoff } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";
import { OneWayData } from "../types/oneWayData";
import { format, parse } from "date-fns";

interface OneWayCardProp {
  tripDetail: OneWayData;
  dateOneWay: Date | undefined;
}

const OneWayCard = ({ tripDetail, dateOneWay }: OneWayCardProp) => {
  return (
    <Card>
      <CardHeader className="p-0">
        <div className="text-gray-600 h-7 bg-gray-300 rounded-t-md flex justify-between items-center container">
          <div className="flex items-center gap-2 ">
            <PlaneTakeoff size={16} />
            <p className="text-xs font-medium">One Way</p>
          </div>
          <p className="text-xs font-medium">
            {dateOneWay ? format(dateOneWay, "PPP") : "Date not avaliable"}
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex-none py-4 px-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
              <p className="text-sm font-bold text-gray-600">
                {tripDetail.airline.code}
              </p>
            </div>
            <h4 className="font-medium text-gray-600">
              {tripDetail.airline.name}
            </h4>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-gray-600">
              <p className="text-sm font-medium">
                {tripDetail.departure_airport.code}
              </p>
              <p className="text-xs text-gray-500">
                {tripDetail.departure_airport.city}
              </p>
              <p className="font-bold text-gray-600">
                {format(
                  parse(tripDetail.departure_time, "HH:mm:ss", new Date()),
                  "HH:mm"
                )}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-600 text-xs">1 stoped</p>
              <div className="relative">
                <div className="absolute top-1 h-2 w-2 rounded-full bg-white border border-gray-400" />
              </div>
              <Separator className="mt-2 bg-gray-300" />
            </div>
            <div className="text-gray-600">
              <p className="text-sm font-medium">
                {tripDetail.arrival_airport.code}
              </p>
              <p className="text-xs text-gray-500">
                {tripDetail.arrival_airport.city}
              </p>
              <div className="flex items-center gap-1">
                <p className="font-bold text-gray-600">
                  {format(
                    parse(tripDetail.arrival_time, "HH:mm:ss", new Date()),
                    "HH:mm"
                  )}
                </p>

                {format(
                  parse(tripDetail.departure_time, "HH:mm:ss", new Date()),
                  "HH:mm"
                ) >
                format(
                  parse(tripDetail.arrival_time, "HH:mm:ss", new Date()),
                  "HH:mm"
                ) ? (
                  <p className="text-xs text-red-500 font-medium">+1</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <Luggage size={20} />
              <Briefcase size={20} />
              <Backpack size={20} />
            </div>
          </div>
          <Separator className="mt-2" />
          <div className="text-gray-600 mt-2 flex justify-end items-baseline gap-2">
            <p className="text-xs">Total: </p>
            <p className="text-xl font-medium">{tripDetail.price}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OneWayCard;
