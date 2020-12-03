import "./ListDetailsView.scss";

import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { map, minBy, size } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import { CustomIcon } from "../../components";
import { DownOutlined } from "@ant-design/icons";
import { RootState } from "../../store/types";
import { TheCard } from "../../components/common";
import { listActions } from "../../store/modules/list";
import { listDetailsActions } from "../../store/modules/listDetails";
import { useParams } from "react-router-dom";

export const ListDetailsView: React.FC = () => {
  // const { push } = useHistory();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { listDetails } = useSelector(
    ({ listDetailsState }: RootState) => listDetailsState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(listDetailsActions["LIST_DETAILS_REQUEST"](id));
      dispatch(listActions["LIST_REQUEST"]());
    };
    fetchData();
  }, [dispatch, id]);

  return (
    <div className="ListDetailsView">
      <Row className="ListDetailsView__head">
        <h4
          style={{ paddingRight: 10 }}
          className="ListDetailsView__head-value"
        >
          {listDetails.ListName}
        </h4>
        <CustomIcon
          style={{ fontSize: 70, height: 20 }}
          icon="long-arrow"
          className="ListDetailsView__head-arrow"
        />
        <h4
          style={{ paddingRight: 10 }}
          className="ListDetailsView__head-value"
        >
          {listDetails.ListNotes}
        </h4>
        <CustomIcon
          style={{ fontSize: 70, height: 20 }}
          icon="long-arrow"
          className="ListDetailsView__head-arrow"
        />
        <h4 style={{ paddingLeft: 10 }} className="ListDetailsView__head-value">
          {listDetails.Influencers?.length
            ? `${
                minBy(listDetails.Influencers, "Engagement")?.Engagement
              }%+ Engagement`
            : "Add influencers to list"}
        </h4>
      </Row>
      <Row gutter={[30, 30]}>
        {map(listDetails.Influencers, (influencer) => {
          return (
            <Col span={8} key={influencer.InfluencerId}>
              <TheCard data={influencer} />
            </Col>
          );
        })}
      </Row>
      {size(listDetails.Influencers) > 6 && (
        <Row justify="center">
          <Button
            className="ListDetailsView__btn"
            type="primary"
            shape="round"
            size="large"
          >
            Load more
            <DownOutlined
              className="ListDetailsView__icon"
              style={{ marginLeft: 24 }}
            />
          </Button>
        </Row>
      )}
    </div>
  );
};
