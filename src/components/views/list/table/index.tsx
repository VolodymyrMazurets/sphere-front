import "./ListViewTable.scss";

import { Col, Divider, Dropdown, Menu, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { map, orderBy } from "lodash";

import { ClassValue } from "classnames/types";
import { DownOutlined } from "@ant-design/icons";
import { ListType } from "../../../../types/entities";
import { ListViewItem } from "../item";
import classNames from "classnames";

const { Link } = Typography;
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
  const [filtered, setFilterd] = useState<ListType[] | undefined>([]);
  const [filterNumber, setFilterNumber] = useState<number | undefined>();
  useEffect(() => {
    switch (filterNumber) {
      case 1:
        setFilterd(orderBy(data, ["ListAmount"], ["desc"]));
        break;
      case 2:
        setFilterd(orderBy(data, ["LastUpdated"], ["desc"]));
        break;
      case 3:
        setFilterd(orderBy(data, ["ListName"], ["asc"]));
        break;

      default:
        setFilterd(data);
        break;
    }
  }, [data, filterNumber]);

  const menu = (
    <Menu>
      <Menu.Item key={1}>
        <Link onClick={() => setFilterNumber(1)} style={{ color: "#131f38" }}>
          Amount of influencers
        </Link>
      </Menu.Item>
      <Menu.Item key={2}>
        <Link onClick={() => setFilterNumber(2)} style={{ color: "#131f38" }}>
          Last update
        </Link>
      </Menu.Item>
      <Menu.Item key={3}>
        <Link onClick={() => setFilterNumber(3)} style={{ color: "#131f38" }}>
          Alphabetical
        </Link>
      </Menu.Item>
    </Menu>
  );

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
          <Dropdown overlay={menu} placement="bottomLeft" arrow trigger={['click']}>
            <a
              href=" "
              className="ListViewTable__head-name"
              onClick={(e) => e.preventDefault()}
            >
              Sort By <DownOutlined style={{marginLeft: 10}} />
            </a>
          </Dropdown>
        </Col>
      </Row>
      <Divider className="ListViewTable__divider" />
      {map(filtered, (item) => (
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
