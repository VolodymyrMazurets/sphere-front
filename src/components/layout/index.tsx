import { useDispatch, useSelector } from "react-redux";

import { Modal } from "antd";
import React from "react";
import { RootState } from "../../store/types";
import { SearchModalContent } from "../SearchModalContent";
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

  const isNotExpandedView = () => pathname === "/" || pathname === "/list";

  return (
    <>
      <TheHeader />
      <div
        className={classNames("App__inner", {
          _home: isNotExpandedView() && pathname === "/",
        })}
      >
        <Modal
          maskStyle={{
            left: !isNotExpandedView() ? 182 : 300,
            borderRadius: "20px 0 0 20px",
            background: "#131f3873",
          }}
          bodyStyle={{ borderRadius: 20, padding: 30 }}
          wrapClassName="App__modal-wrap"
          visible={isVisible}
          centered
          width={655}
          footer={null}
          onCancel={() => dispatch(searchModalActions["SEARCH_MODAL_HIDE"]())}
          getContainer={"#modalContainer"}
        >
          <SearchModalContent />
        </Modal>
        <TheMenu
          className={classNames("App__menu", {
            _expanded: !isNotExpandedView(),
          })}
          expanded={!isNotExpandedView()}
        />
        <div
          id="modalContainer"
          className={classNames("App__modal-container", {
            "_more-padding": !isNotExpandedView(),
          })}
        >
          {children}
        </div>
      </div>
    </>
  );
};
