import "./FavoriteView.scss";

import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { map, minBy, size } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import { CustomIcon } from "../../components";
import { DownOutlined } from "@ant-design/icons";
import { RootState } from "../../store/types";
import { TheCard } from "../../components/common";
import { listDetailsActions } from "../../store/modules/listDetails";

export const FavoriteView: React.FC = () => {
  // const { push } = useHistory();
  const dispatch = useDispatch();
  const { listDetails } = useSelector(
    ({ listDetailsState }: RootState) => listDetailsState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(listDetailsActions["LIST_DETAILS_REQUEST"]('0'));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="FavoriteView">
      <Row className="FavoriteView__head">
        <h4 style={{ paddingRight: 10 }} className="FavoriteView__head-value">
          {listDetails.ListName}
        </h4>
        <CustomIcon
          style={{ fontSize: 70, height: 20 }}
          icon="long-arrow"
          className="FavoriteView__head-arrow"
        />
        <h4 style={{ paddingRight: 10 }} className="FavoriteView__head-value">
          {listDetails.ListNotes}
        </h4>
        <CustomIcon
          style={{ fontSize: 70, height: 20 }}
          icon="long-arrow"
          className="FavoriteView__head-arrow"
        />
        <h4 style={{ paddingLeft: 10 }} className="FavoriteView__head-value">
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
            className="FavoriteView__btn"
            type="primary"
            shape="round"
            size="large"
          >
            Load more
            <DownOutlined
              className="FavoriteView__icon"
              style={{ marginLeft: 24 }}
            />
          </Button>
        </Row>
      )}
    </div>
  );
};
