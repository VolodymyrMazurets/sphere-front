import "./TheMenu.scss";

import { Link, useHistory } from "react-router-dom";

import { Button } from "antd";
import { ClassValue } from "classnames/types";
import { CustomIcon } from "../CustomIcon";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import classNames from "classnames";

// import { searchModalActions } from "../../store/modules/searchModal";
// import { useDispatch } from "react-redux";

interface TheMenuProps {
  className?: ClassValue;
  expanded?: boolean;
}

export const TheMenu: React.FC<TheMenuProps> = ({ className, expanded }) => {
  // const dispatch = useDispatch();
  const { push, goBack, goForward } = useHistory();

  const renderHomeMenu = () => {
    return (
      <>
        <header className="TheMenu__header">
          <Button
            type="primary"
            shape="circle"
            icon={<CustomIcon icon="arrow-left" />}
            className="TheMenu__btn _white"
            onClick={() => goBack()}
          />
          <Button
            type="primary"
            shape="circle"
            icon={<CustomIcon icon="arrow-right" />}
            className="TheMenu__btn"
            onClick={() => goForward()}
          />
        </header>
        <Button
          className="TheMenu__btn-search"
          type="primary"
          shape="round"
          icon={<SearchOutlined />}
          size="large"
          onClick={() => push("/result")}
          // onClick={() => dispatch(searchModalActions["SEARCH_MODAL_SHOW"]())}
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
        </ul>{" "}
      </>
    );
  };

  const renderExpandedMenu = () => {
    return (
      <ul className="TheMenu__expanded">
        <li className="TheMenu__expanded-item">
          <Link to="/result" className="TheMenu__expanded-link">
            <CustomIcon icon="search" />
          </Link>
        </li>
        <li className="TheMenu__expanded-item">
          <Link to="/list" className="TheMenu__expanded-link _small">
            <CustomIcon icon="list" />
          </Link>
        </li>
        <li className="TheMenu__expanded-item">
          <Link to="/favorite" className="TheMenu__expanded-link _small">
            <CustomIcon icon="favorite" />
          </Link>
        </li>
        <li className="TheMenu__expanded-item">
          <Link to="/help" className="TheMenu__expanded-link _small">
            <CustomIcon icon="help" />
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <div className={classNames("TheMenu", className)}>
      {!expanded ? renderHomeMenu() : renderExpandedMenu()}
    </div>
  );
};
