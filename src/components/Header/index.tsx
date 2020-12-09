import "./TheHeader.scss";

import { Col, Row } from "antd";
import React, { useState } from "react";

import Avatar from "antd/lib/avatar/avatar";
import { ClassValue } from "classnames/types";
import { Link } from "react-router-dom";
import Logo from "../../assets/png/logo.png";
import User from "../../assets/jpg/11.jpg";
import { UserOutlined } from "@ant-design/icons";
import classNames from "classnames";

interface TheHeaderProps {
  className?: ClassValue;
  showNav?: boolean;
}

export const TheHeader: React.FC<TheHeaderProps> = ({ className }) => {
  const [user] = useState("Shadon");
  return (
    <Row justify="space-between" className={classNames("TheHeader", className)}>
      <Col>
        <Row align="middle">
          <Link to="/">
            <img src={Logo} alt="" className="TheHeader__logo" />
          </Link>
        </Row>
      </Col>
      <Col>
        <Row align="middle" gutter={21}>
          <Col>
            <h4 className="TheHeader__user-name">Hi, {user}</h4>
          </Col>
          <Col>
            <Avatar size={40} icon={<UserOutlined />} src={User} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
