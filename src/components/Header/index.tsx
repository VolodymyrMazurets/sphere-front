import "./TheHeader.scss";

import { Button, Col, Row } from "antd";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

import Avatar from "antd/lib/avatar/avatar";
import { CustomIcon } from "../CustomIcon";
import Logo from "../../assets/png/logo.png";
import { UserOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { ClassValue } from "classnames/types";

interface TheHeaderProps {
  className?: ClassValue;
  showNav?: boolean;
}

export const TheHeader: React.FC<TheHeaderProps> = ({ className, showNav }) => {
  const [user] = useState("Rehanna");
  const { goBack, goForward } = useHistory();
  return (
    <Row justify="space-between" className={classNames("TheHeader", className)}>
      <Col>
        <Row align="middle">
          <Link to="/">
            <img src={Logo} alt="" className="TheHeader__logo" />
          </Link>
          {showNav && (
            <Row style={{ marginLeft: 85 }}>
              <Button
                type="primary"
                shape="circle"
                icon={<CustomIcon icon="arrow-left" />}
                className="TheHeader__btn _white"
                onClick={() => goBack()}
              />
              <Button
                type="primary"
                shape="circle"
                icon={<CustomIcon icon="arrow-right" />}
                className="TheHeader__btn"
                onClick={() => goForward()}
              />
            </Row>
          )}
        </Row>
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
