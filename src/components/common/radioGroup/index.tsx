import "./TheRadioGroup.scss";

import { ClassValue } from "classnames/types";
import { Radio } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import React from "react";
import classNames from "classnames";

interface TheRadioGroupProps {
  className?: ClassValue;
  onChange: (e: RadioChangeEvent) => void;
}

export const TheRadioGroup: React.FC<TheRadioGroupProps> = ({
  onChange,
  className,
}) => {
  return (
    <Radio.Group
      className={classNames("TheRadioGroup", className)}
      onChange={onChange}
      defaultValue="0"
    >
      <Radio.Button value="1">1W</Radio.Button>
      <Radio.Button value="2">3M</Radio.Button>
      <Radio.Button value="3">4M</Radio.Button>
      <Radio.Button value="0">All</Radio.Button>
    </Radio.Group>
  );
};
