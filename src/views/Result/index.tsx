import "./ResultView.scss";

import { Col, Row } from "antd";

import React from "react";
import { SearchViewHeader } from "../../components/views";
import { TheCard } from "../../components/common";

export const ResultView: React.FC = () => {
  return (
    <div className="ResultView">
      <SearchViewHeader />
      <Row gutter={[30, 30]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => {
          return (
            <Col key={e} span={8}>
              <TheCard />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
