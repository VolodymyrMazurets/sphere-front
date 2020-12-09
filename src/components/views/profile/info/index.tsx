import "./ProfileViewInfo.scss";

import { Col, Row } from "antd";

import { ClassValue } from "classnames/types";
import React from "react";
import classNames from "classnames";

interface ProfileViewInfoProps {
  className?: ClassValue;
  bio?: string | null;
  comments?: string;
  videos?: string;
  DaysBetweenPost?: string;
}

export const ProfileViewInfo: React.FC<ProfileViewInfoProps> = ({
  className,
  bio,
  comments,
  videos,
  DaysBetweenPost,
}) => {
  return (
    <Row className={classNames("ProfileViewInfo", className)} gutter={15}>
      <Col flex={1}>
        <div className="ProfileViewInfo__card" style={{ minHeight: "50%" }}>
          <span className="ProfileViewInfo__small-title">User Bio</span>
          <p className="ProfileViewInfo__text">{bio}</p>
        </div>
      </Col>
      <Col>
        <div className="ProfileViewInfo__card _mb">
          <span className="ProfileViewInfo__small-title">
            Days Between Post
          </span>
          <h4 className="ProfileViewInfo__value">{DaysBetweenPost}</h4>
        </div>
        <div className="ProfileViewInfo__card _mb">
          <span className="ProfileViewInfo__small-title">
            Average # of Comments
          </span>
          <h4 className="ProfileViewInfo__value">{comments}</h4>
        </div>
        <div className="ProfileViewInfo__card">
          <span className="ProfileViewInfo__small-title">
            Average Number of Video...
          </span>
          <h4 className="ProfileViewInfo__value">{videos}</h4>
        </div>
      </Col>
    </Row>
  );
};
