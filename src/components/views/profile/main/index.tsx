import "./ProfileViewMain.scss";

import { Badge, Col, Divider, Popover, Row, Select } from "antd";
import { CheckCircleFilled, UserAddOutlined } from "@ant-design/icons";
import {
  EstimatedLocationType,
  ListDetailsInfluencersResponseType,
} from "../../../../services/http/types";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "antd/lib/avatar/avatar";
import { CustomIcon } from "../../../CustomIcon";
import Map from "../../../../assets/jpg/locationBtn.jpg";
import React from "react";
import { RootState } from "../../../../store/types";
import { TheButton } from "../../../common/buttons";
import { listActions } from "../../../../store/modules/list";
import { map } from "lodash";

const { Option } = Select;

interface ProfileViewMainProps {
  userData?: ListDetailsInfluencersResponseType;
  estimatedLocation?: EstimatedLocationType;
  engagement?: string;
}

export const ProfileViewMain: React.FC<ProfileViewMainProps> = ({
  userData,
  estimatedLocation,
  engagement,
}) => {
  const dispatch = useDispatch();

  const { lists } = useSelector(({ listState }: RootState) => listState);

  const content = (
    <>
      <h3 className="ProfileViewMain__value" style={{ margin: "10px 0" }}>
        Select list
      </h3>
      <Select
        placeholder="Choose list by name"
        style={{ width: "100%", marginBottom: 10 }}
        onChange={(e) =>
          dispatch(listActions["LIST_ADD_INFLUENCER"](userData!, e))
        }
        className="TheCard__select"
      >
        {map(lists, (e) => {
          return (
            <Option value={e.ListId || ""} key={e.ListId}>
              {e.ListName}
            </Option>
          );
        })}
      </Select>
    </>
  );

  return (
    <Row justify="center" className="ProfileViewMain" gutter={25}>
      <Col flex={130} style={{ maxWidth: 155 }}>
        {userData?.Verified ? (
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
        ) : (
          <Avatar
            size={130}
            icon={<UserAddOutlined />}
            src="https://i.pravatar.cc/260"
            className="ProfileViewMain__avatar"
          />
        )}
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
          <a
            href={`https://www.instagram.com/${userData?.Username}/`}
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="ProfileViewMain__instagram-name">
              {userData?.Username}
            </h3>
          </a>
          <Divider type="vertical" className="ProfileViewMain__divider" />
          <Row align="middle">
            <h4 className="ProfileViewMain__location-name">
              {estimatedLocation?.FormattedAddress}
            </h4>
            <a
              rel="noreferrer"
              href={`http://www.google.com/maps/place/${estimatedLocation?.Coordinates}`}
              target="_blank"
              className="ProfileViewMain__location-link"
            >
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
            onClick={() =>
              dispatch(listActions["LIST_ADD_INFLUENCER"](userData!, "0"))
            }
          />

          <Popover
            overlayClassName="ListViewHeader__popover"
            placement="bottomRight"
            content={content}
            trigger="click"
            arrowPointAtCenter
          >
            <TheButton shape="circle" icon="add" iconSize={18} />
          </Popover>
        </Row>
        <Row align="middle" gutter={25}>
          <Col span={4}>
            <h6 className="ProfileViewMain__name">Full Name</h6>
            <h4 className="ProfileViewMain__value">{userData?.FullName}</h4>
          </Col>
          {/* <Col span={5}>
            <h6 className="ProfileViewMain__name">Last Name</h6>
            <h4 className="ProfileViewMain__value">William brown</h4>
          </Col> */}
          <Col flex={1}>
            <h6 className="ProfileViewMain__name">Influencer Email</h6>
            <h4 className="ProfileViewMain__value">{userData?.Email}</h4>
          </Col>
          <Col span={4}>
            <h6 className="ProfileViewMain__name">Followers</h6>
            <h4 className="ProfileViewMain__value">{userData?.Followers}</h4>
          </Col>
          <Col span={5}>
            <h6 className="ProfileViewMain__name">Engagement %</h6>
            <h4 className="ProfileViewMain__value">{engagement}%</h4>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
