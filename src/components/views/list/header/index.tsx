import "./ListViewHeader.scss";

import { Col, Input, Popover, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ClassValue } from "classnames/types";
import { CreateListPayloadType } from "../../../../services/http/types";
import { RootState } from "../../../../store/types";
import { TheButton } from "../../../common/buttons";
import classNames from "classnames";
import { listActions } from "../../../../store/modules/list";

interface ListViewHeaderProps {
  className?: ClassValue;
  onSettigsClick?: () => void;
}

const initialState: CreateListPayloadType = {
  ListName: "",
  ListNotes: "",
};

export const ListViewHeader: React.FC<ListViewHeaderProps> = ({
  className,
  onSettigsClick,
}) => {
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

  const handleCreateList = () => {
    dispatch(listActions["LIST_CREATE"](formData));
    setFormData({ ...initialState });
  };

  const content = (
    <div className="ListViewHeader__popover-body">
      <h4 className="ListViewHeader__popover-title">Create New List</h4>
      <Row>
        <Col span={24} className="ListViewHeader__col">
          <span className="ListViewHeader__label">List Name</span>
          <Input
            style={{ width: 200 }}
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
            disabled={
              formData.ListName.length === 0 || formData.ListNotes.length === 0
            }
            label="Create"
            type="danger"
            className="ListViewHeader__popover-btn"
            loading={loading}
            onClick={handleCreateList}
          />
        </Col>
      </Row>
    </div>
  );

  return (
    <Row
      className={classNames("ListViewHeader", className)}
      justify="space-between"
      align="middle"
    >
      <h1 className="ListViewHeader__title">User Influencer List</h1>
      <Row align="middle" gutter={30}>
        <Col>
          <Popover
            overlayClassName="ListViewHeader__popover"
            placement="bottomRight"
            content={content}
            trigger="click"
            arrowPointAtCenter
          >
            <TheButton icon="add" shape="circle" iconSize={18} />
          </Popover>
        </Col>
        <Col>
          <TheButton
            icon="settings"
            shape="circle"
            iconSize={20}
            iconColor="#B399FF"
            onClick={onSettigsClick}
          />
        </Col>
        <Col>
          <TheButton label="Export as CSV" icon="export" />
        </Col>
      </Row>
    </Row>
  );
};
