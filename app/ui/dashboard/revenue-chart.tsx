"use client";

import { Revenue } from "@/app/lib/definitions";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

type PropType = {
  chartData: Revenue[];
};

const chartConfig = {
  revenue: {
    label: "Revenue ($): ",
    color: "red",
  },
};

const RevenueChart = ({ chartData }: PropType) => {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            axisLine={true}
            width={30}
            textAnchor="end"
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="revenue" fill="hsl(var(--bar-chart-fill))" radius={8} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default RevenueChart;
