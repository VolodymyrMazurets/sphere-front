import "./ProfileViewEmojisChart.scss";

import React, { useEffect, useState } from "react";
import { TheBarChart, TheRadioGroup } from "../../../common";

import { InstagramEmojisType } from "../../../../services/http/types";
import { RadioChangeEvent } from "antd/lib/radio";
import { shuffle } from "lodash";

interface Data {
  name: string;
  emojis: number;
}

const dataTest: Data[] = [
  {
    name: "2010",
    emojis: 20,
  },
  {
    name: "2012",
    emojis: 800,
  },
  {
    name: "2014",
    emojis: 800,
  },
  {
    name: "2016",
    emojis: 1500,
  },
  {
    name: "2018",
    emojis: 1890,
  },
  {
    name: "2020",
    emojis: 2390,
  },
];

interface ProfileViewEmojisChartProps {
  data?: InstagramEmojisType;
}

export const ProfileViewEmojisChart: React.FC<ProfileViewEmojisChartProps> = ({
  data,
}) => {
  const [time, setTime] = useState("1");
  const [chartData, setChartData] = useState<Data[]>([]);

  console.log(data)

  useEffect(() => {
    switch (time) {
      case "1":
        setChartData(dataTest);
        break;
      default:
        setChartData(shuffle(dataTest));
    }
  }, [time]);

  const onChange = (e: RadioChangeEvent) => setTime(e.target.value);

  return (
    <>
      <span className="ProfileViewEmojisChart__small-title">
        Graph of Most Used Emojis
      </span>
      <div className="ProfileViewFolowersChart__controls">
        <TheRadioGroup onChange={onChange} />
      </div>
      <div style={{ margin: "0 0 0 -30px", height: 245 }}>
        <TheBarChart data={chartData} dataKey="emojis" />
      </div>
    </>
  );
};
