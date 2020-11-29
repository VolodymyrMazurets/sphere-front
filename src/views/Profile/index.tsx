import "./ProfileView.scss";

import { Col, Row } from "antd";
import {
  ProfileViewCommonTags,
  ProfileViewInfo,
  ProfileViewMain,
  ProfileViewMap,
} from "../../components/views/profile";

import React from "react";

export const ProfileView: React.FC = () => {
  return (
    <div className="ProfileView">
      <Row>
        <Col span={24} className="ProfileView__head">
          <h1 className="ProfileView__title">Mona’s Brain</h1>
        </Col>
        <Col span={24} className="ProfileView__block">
          <ProfileViewMain />
        </Col>
        <Col span={24}>
          <ProfileViewInfo className="ProfileView__info" />
        </Col>
        <Col span={24}>
          <Row align="stretch" gutter={16}>
            <Col span={12} flex={1}>
              <div className="ProfileView__block _mb-less">
                <ProfileViewMap />
              </div>
            </Col>
            <Col span={12} flex={1}>
              <div className="ProfileView__block _mb-less">
                <ProfileViewCommonTags />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
