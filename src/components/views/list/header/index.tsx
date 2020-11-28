import "./ListViewHeader.scss";

import { Col, Row } from "antd";

import { ClassValue } from "classnames/types";
import React from "react";
import { TheButton } from "../../../common/buttons";
import classNames from "classnames";

interface ListViewHeaderProps {
  className?: ClassValue;
}

export const ListViewHeader: React.FC<ListViewHeaderProps> = ({
  className,
}) => {
  return (
    <Row
      className={classNames("ListViewHeader", className)}
      justify="space-between"
    >
      <h1 className="ListViewHeader__title">User Influencer List</h1>
      <Row align="middle" gutter={30}>
        <Col>
          <TheButton icon="add" shape="circle" iconSize={18} />
        </Col>
        <Col>
          <TheButton
            icon="settings"
            shape="circle"
            iconSize={20}
            iconColor="#B399FF"
          />
        </Col>
        <Col>
          <TheButton label="Export as CSV" icon="export" />
        </Col>
      </Row>
    </Row>
  );
};
