import "./SearchViewHeader.scss";

import { Button, Col, Divider, Popover, Row, Select } from "antd";
import React, { useState } from "react";

import { CustomIcon } from "../../../CustomIcon";
import { RootState } from "../../../../store/types";
import { useSelector } from "react-redux";

interface SearchViewHeaderProps {
  onChange: (e: string) => void;
  value?: string;
}

export const SearchViewHeader: React.FC<SearchViewHeaderProps> = ({
  onChange,
}) => {
  const { Option } = Select;
  const [filter] = useState<string | undefined>(undefined);
  const { searchPayload } = useSelector(
    ({ searchState }: RootState) => searchState
  );

  const handleChange = (e: string) => {
    onChange(e);
  };

  const content = (
    <Row style={{ padding: 16 }}>
      <Col span={24}>
        <h2 className="SearchViewHeader__title _tooltip">
          Username, Keyword, or Tag:{" "}
          {searchPayload?.SearchString?.length ? (
            <span>{searchPayload?.SearchString}</span>
          ) : (
            <span>not selected</span>
          )}
        </h2>
      </Col>
      <Col span={24}>
        <h2 className="SearchViewHeader__title _tooltip">
          By Location:{" "}
          {searchPayload?.LocationViewport ? (
            <span>{searchPayload?.LocationName}</span>
          ) : (
            <span>not selected</span>
          )}
        </h2>
      </Col>
      <Col span={24}>
        <h2 className="SearchViewHeader__title _tooltip">
          Minimum Following{" "}
          {searchPayload?.MinFollowers ? (
            <span>{searchPayload?.MinFollowers}</span>
          ) : (
            <span>not selected</span>
          )}
        </h2>
      </Col>
      <Col span={24}>
        <h2 className="SearchViewHeader__title _tooltip">
          Maximum Following{" "}
          {searchPayload?.MaxFollowers ? (
            <span>{searchPayload?.MaxFollowers}</span>
          ) : (
            <span>not selected</span>
          )}
        </h2>
      </Col>
      <Col span={24}>
        <h2 className="SearchViewHeader__title _tooltip">
          Minimum Engagement{" "}
          {searchPayload?.MinEngagement ? (
            <span>{searchPayload?.MinEngagement}</span>
          ) : (
            <span>not selected</span>
          )}
        </h2>
      </Col>
      <Col span={24}>
        <h2 className="SearchViewHeader__title _tooltip">
          Minimum Avg. Views{" "}
          {searchPayload?.MinAvgViews ? (
            <span>{searchPayload?.MinAvgViews}</span>
          ) : (
            <span>not selected</span>
          )}
        </h2>
      </Col>
      <Col span={24}>
        <h2 className="SearchViewHeader__title _tooltip">
          Minimum Avg. Comments{" "}
          {searchPayload?.MinAvgComments ? (
            <span>{searchPayload?.MinAvgComments}</span>
          ) : (
            <span>not selected</span>
          )}
        </h2>
      </Col>
    </Row>
  );

  return (
    <Row className="SearchViewHeader" justify="space-between" align="middle">
      <Popover
        overlayClassName="ListViewHeader__popover"
        placement="bottomLeft"
        content={content}
        trigger="hover"
        arrowPointAtCenter
      >
        <Row className="SearchViewHeader__results" align="middle">
          <Col>
            <h2 className="SearchViewHeader__title">
              Username, Keyword, or Tag:{" "}
              {searchPayload?.SearchString?.length ? (
                <span>{searchPayload?.SearchString}</span>
              ) : (
                <span>empty</span>
              )}
            </h2>
          </Col>
          <Col>
            <Divider type="vertical" className="SearchViewHeader__divider" />
          </Col>
          <Col>
            <h2 className="SearchViewHeader__title">
              By location:{" "}
              {searchPayload?.LocationViewport ? (
                <span>{searchPayload?.LocationName}</span>
              ) : (
                <span>not selected</span>
              )}
            </h2>
          </Col>
        </Row>
      </Popover>

      <Row>
        <div className="SearchViewHeader__select">
          <label className="SearchViewHeader__select-label">Sort by</label>
          <Select
            placeholder="Select filter"
            onChange={handleChange}
            value={filter}
            className="SearchViewHeader__select-box"
          >
            <Option value="1">Followers Descending</Option>
            <Option value="2">Followers Ascending</Option>
            <Option value="3">Engagement Descending</Option>
            <Option value="4">Engagement Ascending</Option>
            <Option value="5">Relevance</Option>
          </Select>
        </div>
        <Button
          className="SearchViewHeader__btn"
          type="primary"
          shape="round"
          size="large"
        >
          Export as CSV
          <CustomIcon
            icon="export"
            className="SearchViewHeader__icon"
            style={{ marginLeft: 24 }}
          />
        </Button>
      </Row>
    </Row>
  );
};
