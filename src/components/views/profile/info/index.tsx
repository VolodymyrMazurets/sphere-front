import "./ProfileViewInfo.scss";

import { Col, Row } from "antd";

import { ClassValue } from "classnames/types";
import React from "react";
import classNames from "classnames";

interface ProfileViewInfoProps {
  className?: ClassValue;
}

export const ProfileViewInfo: React.FC<ProfileViewInfoProps> = ({
  className,
}) => {
  return (
    <Row className={classNames("ProfileViewInfo", className)} gutter={15}>
      <Col>
        <div className="ProfileViewInfo__card" style={{ height: "100%" }}>
          <span className="ProfileViewInfo__small-title">User Bio</span>
          <p className="ProfileViewInfo__text">
            Sed eu tempus ante. Sed vel consectetur eros, id consectetur massa.
            Vivamus ac ante vitae enim blandit iaculis. Fusce eu libero sapien.
            Praesent pretium malesuada tortor, non cursus purus rutrum ut. Nam
            diam elit, commodo quis auctor ut, eleifend sit amet arcu. Fusce a
            placerat odio, et malesuada urna. Suspendisse ac diam in risus
            varius suscipit eget at enim. Aliquam euismod in nisl mattis dictum.
            Suspendisse id sapien vel est vulputate rutrum ac quis dui. Aliquam
            lorem nulla, congue sit amet purus in, congue consequat felis.
          </p>
        </div>
      </Col>
      <Col>
        <div className="ProfileViewInfo__card _mb">
          <span className="ProfileViewInfo__small-title">
            % of Sponsored Content
          </span>
          <h4 className="ProfileViewInfo__value">60%</h4>
        </div>
        <div className="ProfileViewInfo__card _mb">
          <span className="ProfileViewInfo__small-title">
            Average # of Comments
          </span>
          <h4 className="ProfileViewInfo__value">10K</h4>
        </div>
        <div className="ProfileViewInfo__card">
          <span className="ProfileViewInfo__small-title">
            Average Number of Video...
          </span>
          <h4 className="ProfileViewInfo__value">58K</h4>
        </div>
      </Col>
    </Row>
  );
};
