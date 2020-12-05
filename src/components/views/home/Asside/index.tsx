import "./HomeAsside.scss";

import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "antd/lib/avatar/avatar";
import { RootState } from "../../../../store/types";
import { UserOutlined } from "@ant-design/icons";
import { format } from "date-fns";
import { map } from "lodash";
import { topicsActions } from "../../../../store/modules/topics";

export const HomeAsside: React.FC = () => {
  const dispatch = useDispatch();
  const { topics } = useSelector(({ topicsState }: RootState) => topicsState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(topicsActions["TOPICS_REQUEST"]("influencers marketing"));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="HomeAsside">
      <h2 className="HomeAsside__title">News Feed</h2>
      <ul className="HomeAsside__list">
        {map(topics?.articles, (e, idx) => {
          return (
            <li className="HomeAsside__item" key={e.content} onClick={() => window.open(e.url, "_blank")}>
              <Row
                style={{ marginBottom: 16 }}
                
              >
                <Col style={{ marginRight: 16 }}>
                  <Avatar
                    size={40}
                    icon={<UserOutlined />}
                    src={`https://i.pravatar.cc/80?img=${idx + 1}`}
                  />
                </Col>
                <Col>
                  <h6 className="HomeAsside__name">{e.author}</h6>
                  <p className="HomeAsside__date">
                    {format(new Date(`${e.publishedAt}`), "PP")}
                  </p>
                </Col>
              </Row>
              <p className="HomeAsside__text">{e.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
