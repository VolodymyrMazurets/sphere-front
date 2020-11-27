import "./SearchViewHeader.scss";

import { Button, Row, Select } from "antd";
import React, { useState } from "react";

import { CustomIcon } from "../../../CustomIcon";

export const SearchViewHeader: React.FC = () => {
  const { Option } = Select;
  const [filter, setFilter] = useState<string | undefined>(undefined);

  const handleChange = (e: string) => {
    setFilter(e);
  };
  return (
    <Row className="SearchViewHeader" justify="space-between" align="middle">
      <h2 className="SearchViewHeader__title">Result</h2>
      <Row>
        <div className="SearchViewHeader__select">
          <label className="SearchViewHeader__select-label">Sort by</label>
          <Select
            
            placeholder="Select filter"
            onChange={handleChange}
            value={filter}
            className="SearchViewHeader__select-box"
          >
            <Option value="1">Engagement High to Low</Option>
            <Option value="2">Engagement Low to Hight</Option>
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
