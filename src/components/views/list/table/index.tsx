import "./ListViewTable.scss";

import { Col, Divider, Row } from "antd";

import { ClassValue } from "classnames/types";
import { ListViewItem } from "../item";
import React from "react";
import classNames from "classnames";

interface ListViewTableProps {
  className?: ClassValue;
}

export const ListViewTable: React.FC<ListViewTableProps> = ({ className }) => {
  return (
    <div className={classNames("ListViewTable", className)}>
      <Row className="ListViewTable__head" gutter={20}>
        <Col span={5}>
          <h4 className="ListViewTable__head-name _first">List Name</h4>
        </Col>
        <Col span={5}>
          <h4 className="ListViewTable__head-name">Last Used Date</h4>
        </Col>
        <Col span={5}>
          <h4 className="ListViewTable__head-name">Amount of Influencers</h4>
        </Col>
        <Col span={4}>
          <h4 className="ListViewTable__head-name">Notes</h4>
        </Col>
        <Col span={5}>
          <h4 className="ListViewTable__head-name">Sort By</h4>
        </Col>
      </Row>
      <Divider className="ListViewTable__divider" />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <ListViewItem key={item} className="ListViewTable__item" />
      ))}
    </div>
  );
};
