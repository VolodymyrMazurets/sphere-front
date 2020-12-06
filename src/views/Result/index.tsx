import "./ResultView.scss";

import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DownOutlined } from "@ant-design/icons";
import { RootState } from "../../store/types";
import { SearchViewHeader } from "../../components/views";
import { TheCard } from "../../components/common";
import { listActions } from "../../store/modules/list";
import { map } from "lodash";
import { searchActions } from "../../store/modules/search";
import { size } from "lodash";

interface FilterInterface {
  SortBy?: "Followers" | "Engagement";
  SortOrder?: "ASC" | "DESC";
}

export const ResultView: React.FC = () => {
  const dispatch = useDispatch();
  const { searchResult, searchPayload, loading } = useSelector(
    ({ searchState }: RootState) => searchState
  );
  const getFilter = (value: string): FilterInterface => {
    switch (true) {
      case value === "1":
        return {
          SortBy: "Followers",
          SortOrder: "DESC",
        };
      case value === "2":
        return {
          SortBy: "Followers",
          SortOrder: "ASC",
        };
      case value === "3":
        return {
          SortBy: "Engagement",
          SortOrder: "DESC",
        };
      case value === "4":
        return {
          SortBy: "Engagement",
          SortOrder: "ASC",
        };
      default:
        return {
          SortBy: "Followers",
          SortOrder: "DESC",
        };
    }
  };

  const handleMoreButtonClick = async () => {
    await dispatch(
      searchActions["SEARCH_REQUEST"]({
        ...searchPayload,
        Page: Number(searchPayload.Page) + 1,
      })
    );
  };

  const handleFilter = async (e: string) => {
    const value = getFilter(e);

    dispatch(searchActions["SEARCH_CLEAR"]());
    await dispatch(
      searchActions["SEARCH_REQUEST"]({
        ...searchPayload,
        SortBy: value?.SortBy,
        SortOrder: value?.SortOrder,
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(listActions["LIST_REQUEST"]());
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="ResultView">
      <SearchViewHeader onChange={(e) => handleFilter(e)} />
      {searchResult?.length ? (
        <Row gutter={[30, 30]}>
          {map(searchResult, (e) => {
            return (
              <Col key={e.InfluencerId} span={8}>
                <TheCard data={e} />
              </Col>
            );
          })}
        </Row>
      ) : (
        <h1 className="ResultView__empty">No influencers found</h1>
      )}
      <Row justify="center">
        {size(searchResult) > 8 && (
          <Button
            className="ResultView__btn"
            type="primary"
            shape="round"
            size="large"
            onClick={handleMoreButtonClick}
            loading={loading}
          >
            Load more
            <DownOutlined
              className="ResultView__icon"
              style={{ marginLeft: 24 }}
            />
          </Button>
        )}
      </Row>
    </div>
  );
};
