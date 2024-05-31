"use client";

import { CalendarIcon, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { TabsContent } from "./ui/tabs";
import { Calendar } from "./ui/calendar";
import { useContext, useState } from "react";
import { addDays, format, isBefore, startOfDay } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CardTripContext } from "../_providers/cardTrips";

const RoundTrip = () => {
  const { dateRoundTrip, setDateRoundTrip, setCardRoundTrip, setIsLoading } =
    useContext(CardTripContext);

  const isDateInPast = (date: Date) => {
    const today = startOfDay(new Date());
    return isBefore(date, today);
  };

  const formSchemaRoundTrip = z.object({
    goingRoundTrip: z.string().min(1, { message: "This field is required" }),
    leavingRoundTrip: z.string().min(1, { message: "This field is required" }),
    departingAndReturning: z
      .object({
        to: z.date().optional(),
        from: z.date().optional(),
      })
      .optional(),
  });

  const roundTripForm = useForm({
    resolver: zodResolver(formSchemaRoundTrip),
    defaultValues: {
      leavingRoundTrip: "",
      goingRoundTrip: "",
      departingAndReturning: undefined,
    },
  });

  const handleRoundTripSubmit = async (
    data: z.infer<typeof formSchemaRoundTrip>
  ) => {
    setIsLoading(true);
    const params = new URLSearchParams({
      leaving: data.leavingRoundTrip,
      going: data.goingRoundTrip,
      departingFrom: data.departingAndReturning?.from
        ? format(data.departingAndReturning.from, "yyyy-MM-dd")
        : "",
      departingTo: data.departingAndReturning?.to
        ? format(data.departingAndReturning.to, "yyyy-MM-dd")
        : "",
    }).toString();

    try {
      const response = await fetch(`/api/flights?${params}`);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const result = await response.json();
      setCardRoundTrip(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <TabsContent value="roundTrip" className="pt-2">
        <Card>
          <CardContent className="flex flex-col gap-3 py-4">
            <Form {...roundTripForm}>
              <form
                onSubmit={roundTripForm.handleSubmit(handleRoundTripSubmit)}
                className="flex flex-col gap-3"
              >
                <Label htmlFor="leavingRoundTrip">Leavig from</Label>

                <FormField
                  control={roundTripForm.control}
                  name="leavingRoundTrip"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Add airport or city"
                          id="leavingRoundTrip"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Label htmlFor="goingRoundTrip">Going from</Label>
                <FormField
                  control={roundTripForm.control}
                  name="goingRoundTrip"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Add airport or city"
                          id="goingRoundTrip"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Label htmlFor="departingAndReturning">
                  Departing and Returning
                </Label>
                <FormField
                  control={roundTripForm.control}
                  name="departingAndReturning"
                  render={({ field }) => (
                    <FormItem>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className="w-full flex justify-start"
                            >
                              <CalendarIcon className="mr-2" />
                              {dateRoundTrip?.from ? (
                                dateRoundTrip.to ? (
                                  <>
                                    {format(dateRoundTrip.from, "LLL dd, y")} -{" "}
                                    {format(dateRoundTrip.to, "LLL dd, y")}
                                  </>
                                ) : (
                                  format(dateRoundTrip.from, "LLL dd, y")
                                )
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="range"
                            defaultMonth={dateRoundTrip?.from ?? undefined}
                            selected={
                              dateRoundTrip
                                ? {
                                    from: dateRoundTrip.from!,
                                    to: dateRoundTrip.to!,
                                  }
                                : undefined
                            }
                            onSelect={(date) => {
                              setDateRoundTrip(date);
                              field.onChange(date);
                            }}
                            initialFocus
                            disabled={(date) => isDateInPast(date)}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />

                <Button className="flex items-center gap-2 mt-2" type="submit">
                  <Search />
                  Search
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
    </>
  );
};

export default RoundTrip;
