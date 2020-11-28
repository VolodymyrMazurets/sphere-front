import "./TheCard.scss";

import { Badge, Button, Col, Row } from "antd";
import { CheckCircleFilled, UserOutlined } from "@ant-design/icons";

import Avatar from "antd/lib/avatar/avatar";
import { CustomIcon } from "../../CustomIcon";
import React from "react";
import classNames from "classnames";

interface TheCardProps {
  className?: string;
}

export const TheCard: React.FC<TheCardProps> = ({ className }) => {
  return (
    <div className={classNames("TheCard", className)}>
      <Badge
        offset={[-12, 12]}
        count={
          <CheckCircleFilled
            style={{
              color: "#FF8B8B",
              fontSize: 28,
              background: "#fff",
              borderRadius: "50%",
            }}
          />
        }
      >
        <Avatar
          size={96}
          icon={<UserOutlined />}
          src="https://i.pravatar.cc/180"
          className="TheCard__avatar"
        />
      </Badge>

      <h4 className="TheCard__title">ruben_vetrovs</h4>
      <span className="TheCard__location">United States</span>
      <h6 className="TheCard__name">Ruben Vetrovs</h6>
      <p className="TheCard__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sit
        magna tincidunt viverra ullamcorper sit natoque. At sagittis,
      </p>
      <Row align="middle" style={{ marginBottom: 32 }}>
        <Col span={8}>
          <h2 className="TheCard__value">1.2k</h2>
          <p className="TheCard__value-name">Media</p>
        </Col>
        <Col span={8}>
          <h2 className="TheCard__value">478.3k</h2>
          <p className="TheCard__value-name">Followers</p>
        </Col>
        <Col span={8}>
          <h2 className="TheCard__value">89%</h2>
          <p className="TheCard__value-name">Engagement</p>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={12}>
          <Button
            className="TheCard__btn"
            type="primary"
            shape="round"
            icon={<CustomIcon icon="favorite" style={{ fontSize: 18 }} />}
            size="large"
          >
            Favorite
          </Button>
        </Col>
        <Col span={12}>
          <Button
            className="TheCard__btn _blue"
            type="primary"
            shape="round"
            icon={<CustomIcon icon="list" style={{ fontSize: 18 }} />}
            size="large"
          >
            Add to List
          </Button>
        </Col>
      </Row>
    </div>
  );
};
