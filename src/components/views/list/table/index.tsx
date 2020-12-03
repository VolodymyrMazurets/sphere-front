import "./ListViewTable.scss";

import { Col, Divider, Row } from "antd";

import { ClassValue } from "classnames/types";
import { ListType } from "../../../../types/entities";
import { ListViewItem } from "../item";
import React from "react";
import classNames from "classnames";
import { map } from "lodash";

interface ListViewTableProps {
  className?: ClassValue;
  data?: ListType[];
  isSettingsOpen?: boolean;
  deleteClicked: (e: string) => void;
  editClicked: (e: string) => void;
}

export const ListViewTable: React.FC<ListViewTableProps> = ({
  className,
  data,
  isSettingsOpen,
  deleteClicked,
  editClicked,
}) => {
  return (
    <div className={classNames("ListViewTable", className)}>
      <Row className="ListViewTable__head" gutter={20}>
        <Col span={5}>
          <h4 className="ListViewTable__head-name _first">List Name</h4>
        </Col>
        <Col span={5}>
          <h4 className="ListViewTable__head-name">Last Used Date</h4>
        </Col>
        <Col span={5}>
          <h4 className="ListViewTable__head-name">Amount of Influencers</h4>
        </Col>
        <Col span={4}>
          <h4 className="ListViewTable__head-name">Notes</h4>
        </Col>
        <Col span={5}>
          <h4 className="ListViewTable__head-name">Sort By</h4>
        </Col>
      </Row>
      <Divider className="ListViewTable__divider" />
      {map(data, (item) => (
        <ListViewItem
          deleteClicked={(e) => deleteClicked(e)}
          editClicked={(e) => editClicked(e)}
          key={item.ListId}
          data={item}
          className="ListViewTable__item"
          isSetiingsOpen={isSettingsOpen}
        />
      ))}
    </div>
  );
};
