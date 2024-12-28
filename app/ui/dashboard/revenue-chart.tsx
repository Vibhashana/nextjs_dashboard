import { generateYAxis } from "@/app/lib/utils";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { Revenue } from "@/app/lib/definitions";

import { fetchRevenue } from "@/app/lib/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
  const revenue: Revenue[] = await fetchRevenue();

  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

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
          <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-primary-foreground p-4 md:gap-4">
            <div
              className="mb-6 hidden flex-col justify-between text-sm text-muted-foreground sm:flex"
              style={{ height: `${chartHeight}px` }}
            >
              {yAxisLabels.map((label) => (
                <p key={label}>{label}</p>
              ))}
            </div>

            {revenue.map((month) => (
              <div
                key={month.month}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="w-full rounded-md bg-blue-400"
                  style={{
                    height: `${(chartHeight / topLabel) * month.revenue}px`,
                  }}
                ></div>
                <p className="-rotate-90 text-sm text-muted-foreground sm:rotate-0">
                  {month.month}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-muted-foreground">
            <CalendarIcon className="h-5 w-5" />
            <span className="ml-2 text-sm">Last 12 months</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
