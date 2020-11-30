import "./ProfileViewFolowersChart.scss";

import React, { useEffect, useState } from "react";
import { TheLineChart, TheRadioGroup } from "../../../common";

import { RadioChangeEvent } from "antd/lib/radio";
import { shuffle } from "lodash";

interface Data {
  name: string;
  followers: number;
}

const data: Data[] = [
  {
    name: "2010",
    followers: 20,
  },
  {
    name: "2012",
    followers: 800,
  },
  {
    name: "2014",
    followers: 800,
  },
  {
    name: "2016",
    followers: 1500,
  },
  {
    name: "2018",
    followers: 1890,
  },
  {
    name: "2020",
    followers: 2390,
  },
];

export const ProfileViewFolowersChart: React.FC = () => {
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
      <span className="ProfileViewFolowersChart__small-title">
        Follower Growth Over Time
      </span>
      <div className="ProfileViewFolowersChart__controls">
        <TheRadioGroup onChange={onChange} />
      </div>
      <div style={{ margin: "0 0 0 -30px", height: 245 }}>
        <TheLineChart data={chartData} dataKey="followers" />
      </div>
    </>
  );
};
