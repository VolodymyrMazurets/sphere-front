import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import React from "react";

interface TheBarChartDataObject {
  name: string;
  emojis: number;
}

interface TheBarChartProps {
  data: TheBarChartDataObject[];
  dataKey: string;
}

export const TheBarChart: React.FC<TheBarChartProps> = ({ data, dataKey }) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data} margin={{ top: 20, right: 10, left: 8, bottom: 5 }}>
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
        <Bar
          dataKey={dataKey}
          barSize={35}
          fill="#2E91BD"
          radius={[4, 4, 4, 4]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
