import "./SearchViewHeader.scss";

import { Button, Row, Select } from "antd";
import React, { useState } from "react";

import { CustomIcon } from "../../../CustomIcon";

interface SearchViewHeaderProps {
  onChange: (e: string) => void;
}

export const SearchViewHeader: React.FC<SearchViewHeaderProps> = ({
  onChange,
}) => {
  const { Option } = Select;
  const [filter] = useState<string | undefined>(undefined);

  const handleChange = (e: string) => {
    onChange(e);
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
            <Option value="1">Followers High to Low</Option>
            <Option value="2">Followers Low to High</Option>
            <Option value="3">Engagement High to Low</Option>
            <Option value="4">Engagement Low to High</Option>
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
