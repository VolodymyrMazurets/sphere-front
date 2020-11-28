import "./HomeMainContent.scss";

import React, { useEffect } from "react";

import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { searchModalActions } from "../../../../store/modules/searchModal";
import { sphereInit } from "../../../../assets/js/three_sphere";
import { useDispatch } from "react-redux";

const sphereBlock = () => {
  return (
    <div className="HomeMainContent__sphere-block">
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
  const dispatch = useDispatch();

  useEffect(() => {
    sphereInit();
  }, []);

  return (
    <div className="HomeMainContent">
      {sphereBlock()}
      <Button
        className="HomeMainContent__btn"
        type="primary"
        shape="round"
        icon={<SearchOutlined />}
        size="large"
        onClick={() => dispatch(searchModalActions["SEARCH_MODAL_SHOW"]())}
      >
        Search Now
      </Button>
      {quotesBlock()}
    </div>
  );
};
