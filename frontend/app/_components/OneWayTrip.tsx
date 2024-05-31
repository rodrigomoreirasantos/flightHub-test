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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import OneWayCard from "./OneWayCard";
import { OneWayData } from "../types/oneWayData";
import { CardTripContext } from "../_providers/cardTrips";

const OneWayTrip = () => {
  const { setDateOneWay, dateOneWay } = useContext(CardTripContext);
  const [oneWayData, setOneWayData] = useState<OneWayData[]>([]);
  const { setCardOneWay } = useContext(CardTripContext);
  const formSchema = z.object({
    leaving: z.string().min(1, { message: "This field is required" }),
    going: z.string().min(1, { message: "This field is required" }),
    oneWay: z.date().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      leaving: "",
      going: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    const params = new URLSearchParams({
      leaving: data.leaving,
      going: data.going,
      departing: data.oneWay ? format(data.oneWay, "yyyy-MM-dd") : "",
    }).toString();

    try {
      const response = await fetch(`/api/flights?${params}`);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const result = await response.json();
      setOneWayData(result);
      setCardOneWay(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <TabsContent value="oneWay" className="pt-2">
        <Card>
          <CardContent className="flex flex-col gap-3 py-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-3"
              >
                <Label htmlFor="leaving">Leavig from</Label>
                <FormField
                  control={form.control}
                  name="leaving"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Add airport or city"
                          id="leaving"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Label htmlFor="going">Going from</Label>
                <FormField
                  control={form.control}
                  name="going"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Add airport or city"
                          id="going"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Label htmlFor="departing">Departing</Label>
                <FormField
                  control={form.control}
                  name="oneWay"
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className="w-full flex justify-start"
                          >
                            <CalendarIcon className="mr-2" />
                            {dateOneWay ? (
                              format(dateOneWay, "PPP")
                            ) : (
                              <span>Add Date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent>
                        <Calendar
                          mode="single"
                          fromDate={new Date()}
                          selected={dateOneWay}
                          onSelect={(date) => {
                            setDateOneWay(date);
                            field.onChange(date);
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />

                <Button
                  className="w-full flex items-center gap-2 mt-2"
                  type="submit"
                >
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

export default OneWayTrip;
