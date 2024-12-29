import { Calendar } from "lucide-react";
import { Revenue } from "@/app/lib/definitions";

import { fetchRevenue } from "@/app/lib/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RevenueChart from "./revenue-chart";

export default async function RevenueChartCard() {
  const revenue: Revenue[] = await fetchRevenue();

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Recent Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md bg-primary-foreground p-4">
            <RevenueChart chartData={revenue} />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-5 w-5" />
            <span className="ml-2 text-sm">Last 12 months</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
