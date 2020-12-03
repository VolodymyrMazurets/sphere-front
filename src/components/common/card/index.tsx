import "./TheCard.scss";

import { Badge, Button, Col, Popover, Row, Select } from "antd";
import { CheckCircleFilled, UserOutlined } from "@ant-design/icons";
import { map, slice } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "antd/lib/avatar/avatar";
import { CustomIcon } from "../../CustomIcon";
import { ListDetailsInfluencersResponseType } from "../../../services/http/types";
import React from "react";
import { RootState } from "../../../store/types";
import classNames from "classnames";
import { listActions } from "../../../store/modules/list";
import { useHistory } from "react-router-dom";

const { Option } = Select;

interface TheCardProps {
  className?: string;
  data: ListDetailsInfluencersResponseType;
}

export const TheCard: React.FC<TheCardProps> = ({ className, data }) => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const { loading, lists } = useSelector(
    ({ listState }: RootState) => listState
  );

  const handleFavoriteClick = () => {
    dispatch(listActions["LIST_ADD_INFLUENCER"](data, "0"));
  };

  const content = (
    <Select
      style={{ width: "100%" }}
      onChange={(e) => dispatch(listActions["LIST_ADD_INFLUENCER"](data, e))}
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
  );

  return (
    <div className={classNames("TheCard", className)}>
      <div
        style={{ width: "100%", cursor: "pointer" }}
        onClick={() => push(`/profile/${data?.InfluencerId}`)}
      >
        {data?.Verified ? (
          <Badge
            offset={[-12, 12]}
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
              size={96}
              icon={<UserOutlined />}
              src={`https://i.pravatar.cc/80?img=${slice(
                data?.InfluencerId,
                2
              )}`}
              // src={data?.ProfilePicture}
              className="TheCard__avatar"
            />
          </Badge>
        ) : (
          <Avatar
            size={96}
            icon={<UserOutlined />}
            // src={data?.ProfilePicture || 'https://i.pravatar.cc/80'}
            src={`https://i.pravatar.cc/80?img=${slice(data?.InfluencerId, 2)}`}
            className="TheCard__avatar"
          />
        )}

        <h4 className="TheCard__title">{data?.Username}</h4>
        <span className="TheCard__location">{data?.EstimatedLocation}</span>
        <h6 className="TheCard__name">{data?.FullName}</h6>
        <p className="TheCard__text">{data?.Bio}</p>
      </div>
      <Row gutter={20} style={{ width: "100%" }}>
        <Col span={24}>
          <Row align="middle" style={{ marginBottom: 32, width: "100%" }}>
            <Col span={8}>
              <h2 className="TheCard__value">{data?.NumPosts}</h2>
              <p className="TheCard__value-name">Posts</p>
            </Col>
            <Col span={8}>
              <h2 className="TheCard__value">{data?.Followers}</h2>
              <p className="TheCard__value-name">Followers</p>
            </Col>
            <Col span={8}>
              <h2 className="TheCard__value">{data?.Engagement}%</h2>
              <p className="TheCard__value-name">Engagement</p>
            </Col>
          </Row>
        </Col>
        <Row gutter={20} style={{ flex: 1 }}>
          <Col span={12}>
            <Button
              className="TheCard__btn"
              type="primary"
              shape="round"
              icon={<CustomIcon icon="favorite" style={{ fontSize: 18 }} />}
              size="large"
              onClick={handleFavoriteClick}
              loading={loading}
            >
              Favorite
            </Button>
          </Col>
          <Col span={12}>
            <Popover
              overlayClassName="ListViewHeader__popover"
              placement="bottomRight"
              content={content}
              trigger="click"
              arrowPointAtCenter
            >
              <Button
                className="TheCard__btn _blue"
                type="primary"
                shape="round"
                icon={<CustomIcon icon="list" style={{ fontSize: 18 }} />}
                size="large"
              >
                Add to List
              </Button>
            </Popover>
          </Col>
        </Row>
      </Row>
    </div>
  );
};
