import "./ListViewItem.scss";

import { Col, Input, Popover, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "antd/lib/avatar/avatar";
import { ClassValue } from "classnames/types";
import { CreateListPayloadType } from "../../../../services/http/types";
import { ListType } from "../../../../types/entities";
import { RootState } from "../../../../store/types";
import { TheButton } from "../../../common";
import { UserOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { format } from "date-fns";
import { isEqual } from "lodash";
import { listActions } from "../../../../store/modules/list";
import { useHistory } from "react-router-dom";

interface ListViewItemProps {
  className?: ClassValue;
  data?: ListType;
  isSetiingsOpen?: boolean;
  deleteClicked: (e: string) => void;
  editClicked: (e: string) => void;
}

export const ListViewItem: React.FC<ListViewItemProps> = ({
  className,
  data,
  isSetiingsOpen,
  editClicked,
  deleteClicked,
}) => {
  const initialState: CreateListPayloadType = {
    ListName: data?.ListName || "",
    ListNotes: data?.ListNotes || "",
  };
  const { push } = useHistory();
  const dispatch = useDispatch();
  const { loading } = useSelector(({ listState }: RootState) => listState);
  const [formData, setFormData] = useState({ ...initialState });

  const onInputsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: e.target.value,
      };
    });
  };

  const handleEditList = () => {
    dispatch(listActions["LIST_EDIT"](formData, data?.ListId || ""));
    setFormData({ ...initialState });
  };

  const content = (
    <div className="ListViewHeader__popover-body">
      <h4 className="ListViewHeader__popover-title">Edit {data?.ListName}</h4>
      <Row>
        <Col span={24} className="ListViewHeader__col">
          <span className="ListViewHeader__label">List Name</span>
          <Input
            value={formData.ListName}
            onChange={(e) => onInputsChange(e, "ListName")}
            placeholder="EX: Lifestyle Influencers, "
            className="ListViewHeader__input"
          />
        </Col>
        <Col span={24} className="ListViewHeader__col">
          <span className="ListViewHeader__label">List Notes</span>
          <Input
            value={formData.ListNotes}
            onChange={(e) => onInputsChange(e, "ListNotes")}
            placeholder="Ex: Influencers with fashionable and active lifestyle  between 50K-250K followers"
            className="ListViewHeader__input"
          />
        </Col>
        <Col span={24} className="ListViewHeader__col">
          <TheButton
            disabled={isEqual(
              { ListName: data?.ListName, ListNotes: data?.ListNotes },
              formData
            )}
            label="Update"
            type="danger"
            className="ListViewHeader__popover-btn"
            loading={loading}
            onClick={handleEditList}
          />
        </Col>
      </Row>
    </div>
  );

  return (
    <div className={classNames("ListViewItem", className)}>
      <Row gutter={20} justify="center">
        <Col
          className="ListViewItem__col"
          span={5}
          onClick={() => push(`/list/${data?.ListId}`)}
        >
          <h4 className="ListViewItem__name">{data?.ListName}</h4>
        </Col>
        <Col className="ListViewItem__col" span={5}>
          <p className="ListViewItem__value">
            {format(Number(data?.LastUpdated) * 1000, "P")}
          </p>
        </Col>
        <Col className="ListViewItem__col" span={5}>
          <h4 className="ListViewItem__value" style={{textAlign: 'center'}}>{data?.ListAmount}</h4>
        </Col>
        <Col className="ListViewItem__col" span={4}>
          <h4 className="ListViewItem__value">{data?.ListNotes}</h4>
        </Col>
        <Col className="ListViewItem__col" span={5}>
          {isSetiingsOpen && Number(data?.ListId) !== 0 ? (
            <Row gutter={10}>
              <Col>
                <TheButton
                  icon="delete"
                  type="danger"
                  shape="circle"
                  iconSize={20}
                  onClick={() => deleteClicked(data?.ListId || "")}
                />
              </Col>
              <Col>
                <Popover
                  overlayClassName="ListViewHeader__popover"
                  placement="bottomRight"
                  content={content}
                  trigger="click"
                  arrowPointAtCenter
                >
                  <TheButton
                    icon="pen"
                    shape="circle"
                    iconSize={20}
                    iconColor="#B399FF"
                    onClick={() => editClicked(data?.ListId || "")}
                  />
                </Popover>
              </Col>
            </Row>
          ) : (
            <>
              <Avatar
                size={32}
                icon={<UserOutlined />}
                src={data?.ListThumbnail}
                className="ListViewItem__avatar"
              />
              <Avatar
                size={32}
                icon={<UserOutlined />}
                src={data?.ListThumbnail}
                className="ListViewItem__avatar _second"
              />
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};
