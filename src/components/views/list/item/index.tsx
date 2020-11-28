import "./ListViewItem.scss";

import { Col, Row } from "antd";

import Avatar from "antd/lib/avatar/avatar";
import { ClassValue } from "classnames/types";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import classNames from "classnames";

interface ListViewItemProps {
  className?: ClassValue;
}

export const ListViewItem: React.FC<ListViewItemProps> = ({ className }) => {
  return (
    <div className={classNames("ListViewItem", className)}>
      <Row gutter={20} justify="center">
        <Col className="ListViewItem__col" span={5}>
          <h4 className="ListViewItem__name">List Name</h4>
        </Col>
        <Col className="ListViewItem__col" span={5}>
          <p className="ListViewItem__value">Last Used Date</p>
        </Col>
        <Col className="ListViewItem__col" span={5}>
          <h4 className="ListViewItem__value">Amount of Influencers</h4>
        </Col>
        <Col className="ListViewItem__col" span={4}>
          <h4 className="ListViewItem__value">Notes</h4>
        </Col>
        <Col className="ListViewItem__col" span={5}>
          <Avatar
            size={32}
            icon={<UserOutlined />}
            src="https://i.pravatar.cc/64?img=3"
            className="ListViewItem__avatar"
          />
          <Avatar
            size={32}
            icon={<UserOutlined />}
            src="https://i.pravatar.cc/64?img=4"
            className="ListViewItem__avatar _second"
          />
        </Col>
      </Row>
    </div>
  );
};
