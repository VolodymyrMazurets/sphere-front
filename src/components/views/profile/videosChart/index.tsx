import "./ProfileViewVideosChart.scss";

import React, { useEffect, useState } from "react";
import { TheLineChart, TheRadioGroup } from "../../../common";

import { RadioChangeEvent } from "antd/lib/radio";
import { shuffle } from "lodash";

interface Data {
  name: string;
  videos: number;
}

const data: Data[] = [
  {
    name: "2010",
    videos: 200,
  },
  {
    name: "2012",
    videos: 800,
  },
  {
    name: "2014",
    videos: 1000,
  },
  {
    name: "2016",
    videos: 600,
  },
  {
    name: "2018",
    videos: 700,
  },
  {
    name: "2020",
    videos: 200,
  },
];

export const ProfileViewVideosChart: React.FC = () => {
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
    <>
      <span className="ProfileViewVideosChart__small-title">
        Videos Views Growth Over Time
      </span>
      <div className="ProfileViewEngagementChart__controls">
        <TheRadioGroup onChange={onChange} />
      </div>
      <div style={{ margin: "0 0 0 -30px", height: 245 }}>
        <TheLineChart data={chartData} dataKey="videos" />
      </div>
    </>
  );
};
