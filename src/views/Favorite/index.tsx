import "./FavoriteView.scss";

import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { TheCard, TheLoader } from "../../components/common";
import { map, minBy } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import { CustomIcon } from "../../components";
import { RootState } from "../../store/types";
import { listDetailsActions } from "../../store/modules/listDetails";

export const FavoriteView: React.FC = () => {
  // const { push } = useHistory();
  const dispatch = useDispatch();
  const { listDetails, loading } = useSelector(
    ({ listDetailsState }: RootState) => listDetailsState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(listDetailsActions["LIST_DETAILS_REQUEST"]("0"));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="FavoriteView">
      <TheLoader loading={loading}>
        <Row className="FavoriteView__head">
          <h4 style={{ paddingRight: 10 }} className="FavoriteView__head-value">
            {listDetails.ListName}
          </h4>
          <CustomIcon
            style={{ fontSize: 18, color: "#6e7b95" }}
            icon="separator"
            className="FavoriteView__head-arrow"
          />
          <h4 style={{ paddingRight: 10 }} className="FavoriteView__head-value">
            {listDetails.ListNotes}
          </h4>
          <CustomIcon
            style={{ fontSize: 18, color: "#6e7b95" }}
            icon="separator"
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
                <TheCard data={influencer} isList />
              </Col>
            );
          })}
        </Row>
      </TheLoader>
    </div>
  );
};
