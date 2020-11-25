import "./TheMenu.scss";

import { Button } from "antd";
import { ClassValue } from "classnames/types";
import { CustomIcon } from "../CustomIcon";
import { Link } from "react-router-dom";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import classNames from "classnames";

interface TheMenuProps {
  className?: ClassValue;
}

export const TheMenu: React.FC<TheMenuProps> = ({ className }) => {
  return (
    <div className={classNames("TheMenu", className)}>
      <header className="TheMenu__header">
        <Button
          type="primary"
          shape="circle"
          icon={<CustomIcon icon="arrow-left" />}
          className="TheMenu__btn _white"
        />
        <Button
          type="primary"
          shape="circle"
          icon={<CustomIcon icon="arrow-right" />}
          className="TheMenu__btn"
        />
      </header>
      <Button
        className="TheMenu__btn-search"
        type="primary"
        shape="round"
        icon={<SearchOutlined />}
        size="large"
      >
        Search
      </Button>
      <ul className="TheMenu__list">
        <li className="TheMenu__item">
          <Link to="/list">
            <CustomIcon icon="list" className="TheMenu__icon" />
            Lists
          </Link>
        </li>
        <li className="TheMenu__item">
          <Link to="/favorite">
            <CustomIcon icon="favorite" className="TheMenu__icon" />
            Favourite Influencer
          </Link>
        </li>
        <li className="TheMenu__item">
          <Link to="/help">
            <CustomIcon icon="help" className="TheMenu__icon" />
            Help
          </Link>
        </li>
      </ul>
    </div>
  );
};
