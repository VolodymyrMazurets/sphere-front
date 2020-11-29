import "./ProfileViewMain.scss";

import { Badge, Col, Divider, Row } from "antd";
import { CheckCircleFilled, UserAddOutlined } from "@ant-design/icons";

import Avatar from "antd/lib/avatar/avatar";
import { CustomIcon } from "../../../CustomIcon";
import Map from "../../../../assets/jpg/locationBtn.jpg";
import React from "react";
import { TheButton } from "../../../common/buttons";

export const ProfileViewMain: React.FC = () => {
  return (
    <Row justify="center" className="ProfileViewMain" gutter={25}>
      <Col flex={130} style={{ maxWidth: 155 }}>
        <Badge
          offset={[-18, 18]}
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
            size={130}
            icon={<UserAddOutlined />}
            src="https://i.pravatar.cc/260"
            className="ProfileViewMain__avatar"
          />
        </Badge>
      </Col>
      <Col
        flex={1}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <Row className="ProfileViewMain__row" align="middle">
          <h3 className="ProfileViewMain__instagram-name">ruben_vetrows</h3>
          <Divider type="vertical" className="ProfileViewMain__divider" />
          <Row align="middle">
            <h4 className="ProfileViewMain__location-name">Bali, Indonesia</h4>
            <a href="/" className="ProfileViewMain__location-link">
              <img src={Map} alt="" className="ProfileViewMain__img" />
              <span>
                <CustomIcon
                  icon="location"
                  className="ProfileViewMain__location-icon"
                />
              </span>
            </a>
          </Row>
          <Divider type="vertical" className="ProfileViewMain__divider" />
          <TheButton
            shape="circle"
            icon="star"
            iconSize={20}
            className="ProfileViewMain__star-btn"
            type="light"
          />
          <TheButton shape="circle" icon="add" iconSize={18} />
        </Row>
        <Row align="middle" gutter={25}>
          <Col span={4}>
            <h6 className="ProfileViewMain__name">First Name</h6>
            <h4 className="ProfileViewMain__value">Ruben</h4>
          </Col>
          <Col span={5}>
            <h6 className="ProfileViewMain__name">Last Name</h6>
            <h4 className="ProfileViewMain__value">William brown</h4>
          </Col>
          <Col flex={1}>
            <h6 className="ProfileViewMain__name">Influencer Email</h6>
            <h4 className="ProfileViewMain__value">ruben_vetrovs@email.com</h4>
          </Col>
          <Col span={3}>
            <h6 className="ProfileViewMain__name">Following</h6>
            <h4 className="ProfileViewMain__value">1345</h4>
          </Col>
          <Col span={4}>
            <h6 className="ProfileViewMain__name">Engagement %</h6>
            <h4 className="ProfileViewMain__value">70%</h4>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
