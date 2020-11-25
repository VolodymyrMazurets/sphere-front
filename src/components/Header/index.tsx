import "./TheHeader.scss";

import { Col, Row } from "antd";
import React, { useState } from "react";

import Avatar from "antd/lib/avatar/avatar";
import { Link } from "react-router-dom";
import Logo from "../../assets/png/logo.png";
import { UserOutlined } from "@ant-design/icons";

export const TheHeader: React.FC = () => {
  const [user] = useState("Rehanna");
  return (
    <Row justify="space-between" className="TheHeader">
      <Col>
        <Link to="/">
          <img src={Logo} alt="" className="TheHeader__logo" />
        </Link>
      </Col>
      <Col>
        <Row align="middle" gutter={21}>
          <Col>
            <h4 className="TheHeader__user-name">Hello, {user}</h4>
          </Col>
          <Col>
            <Avatar
              size={40}
              icon={<UserOutlined />}
              src="https://i.pravatar.cc/80"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
