import "./ProfileViewCommentsChart.scss";

import React, { useEffect, useState } from "react";
import { TheLineChart, TheRadioGroup } from "../../../common";

import { RadioChangeEvent } from "antd/lib/radio";
import { shuffle } from "lodash";

interface Data {
  name: string;
  comments: number;
}

const data: Data[] = [
  {
    name: "2010",
    comments: 400,
  },
  {
    name: "2012",
    comments: 300,
  },
  {
    name: "2014",
    comments: 200,
  },
  {
    name: "2016",
    comments: 800,
  },
  {
    name: "2018",
    comments: 700,
  },
  {
    name: "2020",
    comments: 500,
  },
];

export const ProfileViewCommentsChart: React.FC = () => {
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
      <span className="ProfileViewCommentsChart__small-title">
        Comment Growth Over TIme
      </span>
      <div className="ProfileViewEngagementChart__controls">
        <TheRadioGroup onChange={onChange} />
      </div>
      <div style={{ margin: "0 0 0 -30px", height: 245 }}>
        <TheLineChart data={chartData} dataKey="comments" />
      </div>
    </>
  );
};
