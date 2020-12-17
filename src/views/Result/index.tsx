import "./ResultView.scss";

import { ActionTypes, RootState } from "../../store/types";
import { Button, Checkbox, Col, Popover, Row, Select, Typography } from "antd";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import React, { useEffect, useState } from "react";
import { ResultListItem, TheButton, TheCard } from "../../components/common";
import { useDispatch, useSelector } from "react-redux";

import { CheckboxValueType } from "antd/lib/checkbox/Group";
import { DownOutlined } from "@ant-design/icons";
import { ListDetailsInfluencersResponseType } from "../../services/http/types";
import { SearchType } from "../../types/entities";
import { SearchViewHeader } from "../../components/views";
import { listActions } from "../../store/modules/list";
import { map } from "lodash";
import { searchActions } from "../../store/modules/search";
import { size } from "lodash";

const { Option } = Select;
const { Title } = Typography;

interface FilterInterface {
  SortBy?: "Followers" | "Engagement" | null;
  SortOrder?: "ASC" | "DESC" | null;
}

const reorder = (list: SearchType[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const ResultView: React.FC = () => {
  const dispatch = useDispatch();
  const { searchResult, searchPayload, loading } = useSelector(
    ({ searchState }: RootState) => searchState
  );
  const { lists } = useSelector(({ listState }: RootState) => listState);

  const [cardView, setCardView] = useState(true);
  const [groupAdd, setGroupAdd] = useState<SearchType[] | CheckboxValueType[]>(
    []
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
      case value === "5":
        return {
          SortBy: null,
          SortOrder: null,
        };

      default:
        return {
          SortBy: "Followers",
          SortOrder: "DESC",
        };
    }
  };

  const onChange = (checkedValues: CheckboxValueType[] | SearchType[]) => {
    setGroupAdd(checkedValues);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      searchResult,
      result.source.index,
      result.destination.index
    );
    dispatch({
      type: ActionTypes.SEARCH_UPDATE_DRAG,
      payload: items,
    });
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

  const content = (
    <>
      <h2 style={{ marginBottom: 16 }}>Choose list name</h2>
      <Select
        style={{ width: "100%" }}
        onChange={(e) => {
          map(groupAdd, async (item) => {
            await dispatch(
              listActions["LIST_ADD_INFLUENCER"](
                item as ListDetailsInfluencersResponseType,
                e
              )
            );
          });
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
    <div className="ResultView">
      <SearchViewHeader
        onChange={(e) => handleFilter(e)}
        onViewChange={(e) => setCardView(e)}
        checked={cardView}
      />
      {searchResult?.length && cardView ? (
        <Row gutter={[30, 30]}>
          {map(searchResult, (e) => {
            return (
              <Col key={e.InfluencerId} span={8}>
                <TheCard data={e} />
              </Col>
            );
          })}
        </Row>
      ) : searchResult?.length && !cardView ? (
        <>
          <Row className="ResultView__list-head" align="middle" gutter={20}>
            <Col span={7}></Col>
            <Col span={4}>
              <Title level={5}>Country</Title>
            </Col>
            <Col span={3}>
              <Title level={5}>Posts</Title>
            </Col>
            <Col span={3}>
              <Title level={5}>Followers</Title>
            </Col>
            <Col span={3}>
              <Title level={5}>Engagement</Title>
            </Col>
            <Col span={4}>
              <Title level={5}></Title>
            </Col>
          </Row>
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={onChange}
            value={groupAdd as CheckboxValueType[]}
          >
            <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {map(searchResult, (item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={String(item.id)}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <ResultListItem data={item} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Checkbox.Group>
        </>
      ) : (
        <h1 className="ResultView__empty">No influencers found</h1>
      )}
      <Row justify="center">
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
      </Row>
      {!!size(groupAdd) && !cardView && (
        <Popover
          overlayClassName="ResultListItem__popover"
          placement="bottomRight"
          content={content}
          trigger="click"
          arrowPointAtCenter
        >
          <TheButton
            label="Add selected items to list..."
            className="ResultView__add-btn"
            type="danger"
            onClick={() => {}}
          />
        </Popover>
      )}
    </div>
  );
};
