import "./HomeAsside.scss";

import { Col, Row } from "antd";

import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

export const HomeAsside: React.FC = () => {
  return (
    <div className="HomeAsside">
      <h2 className="HomeAsside__title">News Feed</h2>
      <ul className="HomeAsside__list">
        {[1, 2, 3, 4, 5, 6].map((e) => {
          return (
            <li className="HomeAsside__item" key={e}>
              <Row style={{ marginBottom: 16 }}>
                <Col style={{ marginRight: 16 }}>
                  <Avatar
                    size={40}
                    icon={<UserOutlined />}
                    src={`https://i.pravatar.cc/80?img=${e}`}
                  />
                </Col>
                <Col>
                  <h6 className="HomeAsside__name">Ruben Venrovs</h6>
                  <p className="HomeAsside__date">{e} hours ago</p>
                </Col>
              </Row>
              <p className="HomeAsside__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus sit magna tincidunt viverra ullamcorper sit natoque. At
                sagittis,
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
