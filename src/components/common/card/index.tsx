import "./TheCard.scss";

import { Badge, Button, Col, Popover, Row, Select } from "antd";
import { CheckCircleFilled, UserOutlined } from "@ant-design/icons";
import { map, slice } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import Avatar from "antd/lib/avatar/avatar";
import { CustomIcon } from "../../CustomIcon";
import { ListDetailsInfluencersResponseType } from "../../../services/http/types";
import NumericLabel from "react-pretty-numbers";
import React from "react";
import { RootState } from "../../../store/types";
import { TheButton } from "../buttons";
import classNames from "classnames";
import { listActions } from "../../../store/modules/list";
import { listDetailsActions } from "../../../store/modules/listDetails";

const { Option } = Select;

interface TheCardProps {
  className?: string;
  data: ListDetailsInfluencersResponseType;
  isList?: boolean;
}

const option = {
  justification: "L",
  shortFormat: true,
  shortFormatMinValue: 1000,
  shortFormatPrecision: 1,
  title: true,
};

export const TheCard: React.FC<TheCardProps> = ({
  className,
  data,
  isList,
}) => {
  const dispatch = useDispatch();
  const { push, location } = useHistory();
  const { id } = useParams<{ id: string }>();

  const { loading, lists } = useSelector(
    ({ listState }: RootState) => listState
  );

  const handleFavoriteClick = () => {
    dispatch(listActions["LIST_ADD_INFLUENCER"](data, "0"));
  };

  const handleDeleteClick = () => {
    if (location.pathname === "/favorite") {
      dispatch(
        listDetailsActions["LIST_DETAILS_DELETE_INFLUENCER"](
          "0",
          data.InfluencerId
        )
      );
    } else {
      dispatch(
        listDetailsActions["LIST_DETAILS_DELETE_INFLUENCER"](
          id,
          data.InfluencerId
        )
      );
    }
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
      <div style={{ width: "100%", cursor: "pointer" }}>
        {isList && (
          <TheButton
            icon="delete"
            shape="circle"
            onClick={handleDeleteClick}
            className="TheCard__delete"
          />
        )}
        <div onClick={() => push(`/profile/${data?.InfluencerId}`)}>
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
              src={`https://i.pravatar.cc/80?img=${slice(
                data?.InfluencerId,
                2
              )}`}
              className="TheCard__avatar"
            />
          )}
        </div>

        <h4
          onClick={() => push(`/profile/${data?.InfluencerId}`)}
          className="TheCard__title"
        >
          {data?.Username}
        </h4>
        <span
          onClick={() => push(`/profile/${data?.InfluencerId}`)}
          className="TheCard__location"
        >
          {data?.EstimatedLocation}
        </span>
        <h6
          onClick={() => push(`/profile/${data?.InfluencerId}`)}
          className="TheCard__name"
        >
          {data?.FullName}
        </h6>
        <p
          onClick={() => push(`/profile/${data?.InfluencerId}`)}
          className="TheCard__text"
        >
          {data?.Bio}
        </p>
      </div>
      <Row gutter={20} style={{ width: "100%" }}>
        <Col span={24}>
          <Row align="middle" style={{ marginBottom: 32, width: "100%" }}>
            <Col span={8}>
              <h2 className="TheCard__value">
                <NumericLabel params={option}>{data?.NumPosts}</NumericLabel>
              </h2>
              <p className="TheCard__value-name">Posts</p>
            </Col>
            <Col span={8}>
              <h2 className="TheCard__value">
                <NumericLabel params={option}>{data?.Followers}</NumericLabel>
              </h2>
              <p className="TheCard__value-name">Followers</p>
            </Col>
            <Col span={8}>
              <h2 className="TheCard__value">
                <NumericLabel params={{ justification: "L", precision: 2 }}>
                  {data?.Engagement}
                </NumericLabel>
                %
              </h2>
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
