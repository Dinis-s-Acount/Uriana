"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { DayTotalRevenueDto } from "@/app/_data-access/dashboard/get-last-14-days-revenue";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig: ChartConfig = {
  totalRevenue: {
    label: "Receita",
  },
};

interface RevenueChartProps {
  data: DayTotalRevenueDto[];
}
const RevenueChart = ({ data }: RevenueChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[250px] w-full sm:min-h-[300px]">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          angle={-45}
          textAnchor="end"
          height={60}
          className="text-xs"
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="totalRevenue" radius={4} fill="#10b981" />
      </BarChart>
    </ChartContainer>
  );
};

export default RevenueChart;
