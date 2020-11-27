import { useDispatch, useSelector } from "react-redux";

import { Modal } from "antd";
import React from "react";
import { RootState } from "../../store/types";
import { TheHeader } from "../Header";
import { TheMenu } from "../Menu";
import classNames from "classnames";
import { searchModalActions } from "../../store/modules/searchModal";
import { useLocation } from "react-router-dom";

export const MainLayout: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const { isVisible } = useSelector(
    ({ searchModalState }: RootState) => searchModalState
  );
  const { pathname } = useLocation();

  const isHomePage = () => pathname === "/";

  return (
    <>
      <TheHeader showNav={!isHomePage()} />
      <div className={classNames("App__inner", { _home: isHomePage() })}>
        <Modal
          visible={isVisible}
          onCancel={() => dispatch(searchModalActions["SEARCH_MODAL_HIDE"]())}
          getContainer={"#modalContainer"}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <TheMenu
          className={classNames("App__menu", { _expanded: !isHomePage() })}
          expanded={!isHomePage()}
        />
        <div
          id="modalContainer"
          className={classNames("App__modal-container", {
            "_more-padding": !isHomePage(),
          })}
        >
          {children}
        </div>
      </div>
    </>
  );
};
