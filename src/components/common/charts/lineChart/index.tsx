import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { IntagramHistoricalType } from "../../../../services/http/types";
import React from "react";

export interface TheLineChartEngagementDataObject {
  name: string;
  engagement: number;
}
export interface TheLineChartFolowersDataObject {
  name: string;
  followers: number;
}
export interface TheLineChartVideosDataObject {
  name: string;
  videos: number;
}
export interface TheLineChartComentsDataObject {
  name: string;
  comments: number;
}

interface TheLineChartProps {
  data:
    | (IntagramHistoricalType | TheLineChartEngagementDataObject)[]
    | (IntagramHistoricalType | TheLineChartFolowersDataObject)[]
    | (IntagramHistoricalType | TheLineChartVideosDataObject)[]
    | (IntagramHistoricalType | TheLineChartComentsDataObject)[];
  dataKey: string;
}

export const TheLineChart: React.FC<TheLineChartProps> = ({
  data,
  dataKey,
}) => {
  return (
    <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 10, left: 8, bottom: 5 }}
      >
        <CartesianGrid stroke="#E3E4E7" vertical={false} strokeWidth={0.5} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tickSize={10}
          axisLine={false}
          tick={{ stroke: "#131F38", fontSize: 10, strokeWidth: 0.3 }}
        />
        <YAxis
          dataKey={dataKey}
          tickLine={false}
          tickSize={10}
          axisLine={false}
          tick={{ stroke: "#131F38", fontSize: 10, strokeWidth: 0.3 }}
        />
        <Tooltip
          contentStyle={{ borderColor: "transparent", borderRadius: 8 }}
        />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="#2E91BD"
          strokeWidth={3}
          fill="#2e92bd80"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
