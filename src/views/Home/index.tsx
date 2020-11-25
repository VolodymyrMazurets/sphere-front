import "./Home.scss";

import { Col, Row } from "antd";
import { HomeAsside, HomeMainContent } from "../../components/views";

import React from "react";

export const HomeView: React.FC = () => {
  return (
    <Row className="Home">
      <Col flex={1} className="Home__main-content">
        <HomeMainContent />
      </Col>
      <Col className="Home__asside">
        <HomeAsside />
      </Col>
    </Row>
  );
};
