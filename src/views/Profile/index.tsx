import "./ProfileView.scss";

import { Col, Row } from "antd";
import {
  ProfileViewCommentsChart,
  ProfileViewCommonTags,
  ProfileViewEmojisChart,
  ProfileViewEngagementChart,
  ProfileViewFolowersChart,
  ProfileViewHashTags,
  ProfileViewInfo,
  ProfileViewMain,
  ProfileViewMap,
  ProfileViewVideosChart,
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
        <Col span={24} style={{ marginBottom: 15 }}>
          <Row align="stretch" gutter={16}>
            <Col span={12} flex={1}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 300 }}
              >
                <ProfileViewMap />
              </div>
            </Col>
            <Col span={12} flex={1}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 300 }}
              >
                <ProfileViewCommonTags />
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ marginBottom: 15 }}>
          <Row align="stretch" gutter={16}>
            <Col span={8}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 355 }}
              >
                <ProfileViewFolowersChart />
              </div>
            </Col>
            <Col span={8}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 355 }}
              >
                <ProfileViewEngagementChart />
              </div>
            </Col>
            <Col span={8}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 355 }}
              >
                <ProfileViewHashTags />
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row align="stretch" gutter={16}>
            <Col span={8}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 355 }}
              >
                <ProfileViewVideosChart />
              </div>
            </Col>
            <Col span={8}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 355 }}
              >
                <ProfileViewCommentsChart />
              </div>
            </Col>
            <Col span={8}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 355 }}
              >
                <ProfileViewEmojisChart />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
