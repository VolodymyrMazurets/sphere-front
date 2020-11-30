import "./ProfileViewEngagementChart.scss";

import React, { useEffect, useState } from "react";
import { TheLineChart, TheRadioGroup } from "../../../common";

import { RadioChangeEvent } from "antd/lib/radio";
import { shuffle } from "lodash";

interface Data {
  name: string;
  engagement: number;
}

const data: Data[] = [
  {
    name: "2010",
    engagement: 20,
  },
  {
    name: "2012",
    engagement: 400,
  },
  {
    name: "2014",
    engagement: 500,
  },
  {
    name: "2016",
    engagement: 2780,
  },
  {
    name: "2018",
    engagement: 1890,
  },
  {
    name: "2020",
    engagement: 2390,
  },
];

export const ProfileViewEngagementChart: React.FC = () => {
  const [time, setTime] = useState("1");
  const [chartData, setChartData] = useState<Data[]>([]);

  useEffect(() => {
    switch (time) {
      case "1":
        setChartData(data);
        break;
      default:
        setChartData(shuffle(data));
    }
  }, [time]);

  const onChange = (e: RadioChangeEvent) => setTime(e.target.value);

  return (
    <div className="ProfileViewEngagementChart">
      <span className="ProfileViewEngagementChart__small-title">
        Engagement Growth Over Time
      </span>
      <div className="ProfileViewEngagementChart__controls">
        <TheRadioGroup onChange={onChange} />
      </div>
      <div style={{ margin: "0 0 0 -30px", height: 245 }}>
        <TheLineChart data={chartData} dataKey="engagement" />
      </div>
    </div>
  );
};
