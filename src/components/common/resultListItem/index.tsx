import "./ResultListItem.scss";

import { ActionTypes, RootState } from "../../../store/types";
import { Badge, Checkbox, Col, Popover, Row, Select, Typography } from "antd";
import { CheckCircleFilled, UserAddOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { map, remove, slice } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "antd/lib/avatar/avatar";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { ClassValue } from "classnames/types";
import { ListDetailsInfluencersResponseType } from "../../../services/http/types";
import NumericLabel from "react-pretty-numbers";
import { SearchType } from "../../../types/entities";
import { TheButton } from "../buttons";
import classNames from "classnames";
import { listActions } from "../../../store/modules/list";
import { useHistory } from "react-router-dom";

interface ResultListItemProps {
  className?: ClassValue;
  data?: SearchType;
}

const option = {
  justification: "L",
  shortFormat: true,
  shortFormatMinValue: 1000,
  shortFormatPrecision: 1,
  title: true,
};

const { Text } = Typography;
const { Option } = Select;

export const ResultListItem: React.FC<ResultListItemProps> = ({
  className,
  data,
}) => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [active, setActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const { lists } = useSelector(({ listState }: RootState) => listState);
  const { searchResult } = useSelector(
    ({ searchState }: RootState) => searchState
  );

  const onChangeCheckbox = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
  };

  const deleteItem = () => {
    const shallowCopy = [...searchResult];
    remove(shallowCopy, (item) => {
      return item.InfluencerId === data?.InfluencerId;
    });
    dispatch({
      type: ActionTypes.SEARCH_UPDATE_DRAG,
      payload: shallowCopy,
    });
  };

  const content = (
    <>
      <h2 style={{ marginBottom: 16 }}>Choose list name</h2>
      <Select
        style={{ width: "100%" }}
        onChange={(e) => {
          dispatch(
            listActions["LIST_ADD_INFLUENCER"](
              data as ListDetailsInfluencersResponseType,
              e
            )
          );
        }}
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
    <div className={classNames("ResultListItem", className)}>
      <Row
        className={classNames("ResultListItem__item", { isChecked: isChecked })}
        style={{ height: 80 }}
        align="middle"
        gutter={20}
      >
        <Col span={7}>
          <Row gutter={20} style={{flexWrap: 'nowrap'}}> 
            <Col>
              {data?.Verified ? (
                <Badge
                  offset={[-8, 8]}
                  count={
                    <CheckCircleFilled
                      style={{
                        color: "#FF8B8B",
                        fontSize: 16,
                        background: "#fff",
                        borderRadius: "50%",
                      }}
                    />
                  }
                >
                  <Avatar
                    size={60}
                    icon={<UserAddOutlined />}
                    src={`https://i.pravatar.cc/80?img=${slice(
                      data?.InfluencerId,
                      2
                    )}`}
                    className="ProfileViewMain__avatar"
                  />
                </Badge>
              ) : (
                <Avatar
                  size={60}
                  icon={<UserAddOutlined />}
                  src={`https://i.pravatar.cc/80?img=${slice(
                    data?.InfluencerId,
                    2
                  )}`}
                  className="ProfileViewMain__avatar"
                />
              )}
            </Col>
            <Col span={18}>
              <h4
                onClick={() => push(`/profile/${data?.InfluencerId}`)}
                className="ResultListItem__title"
              >
                {data?.Username}
              </h4>
              <h6
                onClick={() => push(`/profile/${data?.InfluencerId}`)}
                className="ResultListItem__name"
              >
                {data?.FullName}
              </h6>

              <div onClick={() => push(`/profile/${data?.InfluencerId}`)}>
                <Text
                  className="ResultListItem__text"
                  ellipsis
                  style={{ width: "100%" }}
                >
                  {data?.Bio}
                </Text>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <div onClick={() => push(`/profile/${data?.InfluencerId}`)}>
            <Text
              className="ResultListItem__location"
              ellipsis
              style={{ width: "100%" }}
            >
              {data?.EstimatedLocation}
            </Text>
          </div>
        </Col>
        <Col span={3}>
          <h2 className="ResultListItem__value">
            <NumericLabel params={option}>{data?.NumPosts}</NumericLabel>
          </h2>
        </Col>
        <Col span={3}>
          <h2 className="ResultListItem__value">
            <NumericLabel params={option}>{data?.Followers}</NumericLabel>
          </h2>
        </Col>
        <Col span={3}>
          <h2 className="ResultListItem__value">
            <NumericLabel params={{ justification: "L", precision: 2 }}>
              {data?.Engagement}
            </NumericLabel>
            %
          </h2>
        </Col>
        <Col span={4}>
          <Row gutter={10} align="middle">
            <Checkbox
              value={data}
              style={{ marginRight: 10 }}
              onChange={(e) => onChangeCheckbox(e)}
            />
            <TheButton
              shape="circle"
              icon="star"
              iconSize={14}
              className={classNames("ResultListItem__star-btn ResultListItem__small-btn", {
                _active: active,
              })}
              type="light"
              onClick={() => {
                setActive(true);
                dispatch(
                  listActions["LIST_ADD_INFLUENCER"](
                    data as ListDetailsInfluencersResponseType,
                    "0"
                  )
                );
              }}
            />

            <Popover
              overlayClassName="ResultListItem__popover"
              placement="bottomRight"
              content={content}
              trigger="click"
              arrowPointAtCenter
            >
              <TheButton
                shape="circle"
                icon="add"
                iconSize={14}
                className="ResultListItem__add-btn ResultListItem__small-btn"
              />
            </Popover>
            <TheButton
              icon="delete"
              type="danger"
              shape="circle"
              iconSize={14}
              onClick={deleteItem}
              className="ResultListItem__delete-btn ResultListItem__small-btn"
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
};
