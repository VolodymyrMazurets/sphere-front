import "./HomeMainContent.scss";

import React, { useEffect } from "react";

import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { notes } from "../../../../assets/libs/notes";
import { random } from "lodash";
import { searchModalActions } from "../../../../store/modules/searchModal";
import { sphereInit } from "../../../../assets/libs/three_sphere";
import { useDispatch } from "react-redux";

const sphereBlock = () => {
  return (
    <div className="HomeMainContent__sphere-block">
      <div id="canvas" className="HomeMainContent__sphere"></div>
    </div>
  );
};

const quotesBlock = () => {
  const randomText = notes[random(0, notes.length - 1)];
  return (
    <div className="HomeMainContent__quotes-block">
      <div className="HomeMainContent__label">Quotes of the day</div>
      <p className="HomeMainContent__quote">{randomText.text}</p>
      <span className="HomeMainContent__author"> {randomText.author}</span>
    </div>
  );
};

export const HomeMainContent: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    sphereInit();
  }, [dispatch]);

  return (
    <div className="HomeMainContent">
      {sphereBlock()}
      <Button
        className="HomeMainContent__btn"
        type="primary"
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
