import "./ResultView.scss";

import { Button, Col, Row } from "antd";

import React from "react";
import { SearchViewHeader } from "../../components/views";
import { TheCard } from "../../components/common";
import { DownOutlined } from "@ant-design/icons";

export const ResultView: React.FC = () => {
  return (
    <div className="ResultView">
      <SearchViewHeader />
      <Row gutter={[30, 30]}>
        {[1, 2, 3, 4, 5, 6].map((e) => {
          return (
            <Col key={e} span={8}>
              <TheCard />
            </Col>
          );
        })}
      </Row>
      <Row justify="center">
        <Button
          className="ResultView__btn"
          type="primary"
          shape="round"
          size="large"
        >
          Load more
          <DownOutlined
            className="ResultView__icon"
            style={{ marginLeft: 24 }}
          />
        </Button>
      </Row>
    </div>
  );
};
