import Logo from "../../../assets/png/spinner.png";
import React from "react";
import { Spin } from "antd";

interface TheLoaderProps {
  loading: boolean;
}

export const TheLoader: React.FC<TheLoaderProps> = ({ loading, children }) => {
  return (
    <Spin
      spinning={loading}
      indicator={
        <img
          src={Logo}
          alt=""
          style={{
            width: 80,
            height: 80,
            animation: "spin 1s linear infinite",
          }}
        />
      }
    >
      {children}
    </Spin>
  );
};
