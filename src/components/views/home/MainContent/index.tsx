import "./HomeMainContent.scss";

import React, { useEffect } from "react";

import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import "../../../../assets/js/three_sphere";

// const sphere  = require("../../../../assets/js/three_sphere");

const sphereBlock = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
  }, []);
  return (
    <div className="HomeMainContent__sphere-block">
      <h2 className="HomeMainContent__title">SPhere 3js Graphic</h2>
      <div id="canvas" className="HomeMainContent__sphere"></div>
    </div>
  );
};

const quotesBlock = () => {
  return (
    <div className="HomeMainContent__quotes-block">
      <div className="HomeMainContent__label">Quotes of the day</div>
      <p className="HomeMainContent__quote">
        “You’re off to great places, today is your day. Your mountain is
        waiting, so get on your way.”
      </p>
      <span className="HomeMainContent__author">Dr. Seuss</span>
    </div>
  );
};

export const HomeMainContent: React.FC = () => {
  return (
    <div className="HomeMainContent">
      {sphereBlock()}
      <Button
        className="HomeMainContent__btn"
        type="primary"
        shape="round"
        icon={<SearchOutlined />}
        size="large"
      >
        Search Now
      </Button>
      {quotesBlock()}
    </div>
  );
};
