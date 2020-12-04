import "./ProfileViewVideosChart.scss";

import React, { useEffect, useState } from "react";
import { TheLineChart, TheRadioGroup } from "../../../common";
import { filter, map, sortBy } from "lodash";
import { format, fromUnixTime, isWithinInterval, subMonths } from "date-fns";

import { IntagramHistoricalType } from "../../../../services/http/types";
import { RadioChangeEvent } from "antd/lib/radio";
import { TheLineChartVideosDataObject } from "../../../common/charts";
import { startOfWeek } from "date-fns/esm";

interface ProfileViewVideosChartProps {
  data?: IntagramHistoricalType[];
}

export const ProfileViewVideosChart: React.FC<ProfileViewVideosChartProps> = ({
  data,
}) => {
  const [time, setTime] = useState("0");
  const [dataState, setDataState] = useState<
    (IntagramHistoricalType | TheLineChartVideosDataObject)[]
  >([]);

  useEffect(() => {
    const startOfWeekValue = startOfWeek(new Date());
    const fourMonthesValue = subMonths(new Date(), 4);
    const threeMothesValue = subMonths(new Date(), 3);

    const filteredArray = (): IntagramHistoricalType[] | undefined => {
      switch (true) {
        case time === "1":
          return filter(data, (i) =>
            isWithinInterval(fromUnixTime(Number(i.LastUpdated)!), {
              start: startOfWeekValue,
              end: new Date(),
            })
          );

        case time === "2":
          return filter(data, (i) =>
            isWithinInterval(fromUnixTime(Number(i.LastUpdated)!), {
              start: threeMothesValue,
              end: new Date(),
            })
          );

        case time === "3":
          return filter(data, (i) =>
            isWithinInterval(fromUnixTime(Number(i.LastUpdated)!), {
              start: fourMonthesValue,
              end: new Date(),
            })
          );

        default:
          return data;
      }
    };
    const mappedData = map(
      sortBy(filteredArray(), (i: IntagramHistoricalType) => i.LastUpdated),
      (
        e: IntagramHistoricalType
      ): IntagramHistoricalType | TheLineChartVideosDataObject => {
        return {
          name: format(Number(e.LastUpdated) * 1000, "PP"),
          videos: Number(e.AverageVideoViews),
        };
      }
    );
    setDataState(mappedData);
  }, [data, time]);

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
        <TheLineChart data={dataState} dataKey="videos" />
      </div>
    </>
  );
};
