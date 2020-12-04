import "./ProfileView.scss";

import { Col, Row } from "antd";
import {
  ProfileViewCommentsChart,
  ProfileViewCommonTags,
  ProfileViewEmojisChart,
  ProfileViewEngagementChart,
  ProfileViewFolowersChart,
  ProfileViewHashTags,
  ProfileViewInfo,
  ProfileViewMain,
  ProfileViewMap,
  ProfileViewVideosChart,
} from "../../components/views/profile";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/types";
import { listActions } from "../../store/modules/list";
import { profileActions } from "../../store/modules/profile";
import { useParams } from "react-router-dom";

export const ProfileView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { profile } = useSelector(
    ({ profileState }: RootState) => profileState
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(listActions["LIST_REQUEST"]());
      dispatch(profileActions["PROFILE_REQUEST"](id));
    };
    fetchData();
  }, [dispatch, id]);

  return (
    <div className="ProfileView">
      <Row>
        <Col span={24} className="ProfileView__head">
          <h1 className="ProfileView__title">Mona’s Brain</h1>
        </Col>
        <Col span={24} className="ProfileView__block">
          <ProfileViewMain
            userData={profile?.Instagram?.Profile}
            estimatedLocation={profile?.EstimatedLocation}
            engagement={
              profile?.Instagram?.EngagementMetrics
                ?.AverageEngagementLikesComments
            }
          />
        </Col>
        <Col span={24}>
          <ProfileViewInfo
            bio={profile?.Instagram?.Profile?.Bio}
            comments={profile?.Instagram?.EngagementMetrics?.AverageComments}
            videos={profile?.Instagram?.EngagementMetrics?.MaxVideoViews}
            DaysBetweenPost={
              profile?.Instagram?.EngagementMetrics?.DaysBetweenPost
            }
            className="ProfileView__info"
          />
        </Col>
        <Col span={24} style={{ marginBottom: 15 }}>
          <Row align="stretch" gutter={16}>
            <Col span={12} flex={1}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 300 }}
              >
                <ProfileViewMap
                  Locations={profile?.Instagram?.Locations}
                  EstimatedLocation={profile?.EstimatedLocation}
                />
              </div>
            </Col>
            <Col span={12} flex={1}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 300 }}
              >
                <ProfileViewCommonTags data={profile?.Instagram?.TaggedUsers} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ marginBottom: 15 }}>
          <Row align="stretch" gutter={16}>
            <Col span={8}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 355 }}
              >
                <ProfileViewFolowersChart
                  data={profile?.Instagram?.Historical}
                />
              </div>
            </Col>
            <Col span={8}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 355 }}
              >
                <ProfileViewEngagementChart
                  data={profile?.Instagram?.Historical}
                />
              </div>
            </Col>
            <Col span={8}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 355 }}
              >
                <ProfileViewHashTags data={profile?.Instagram?.Hashtags} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row align="stretch" gutter={16}>
            <Col span={8}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 355 }}
              >
                <ProfileViewVideosChart data={profile?.Instagram?.Historical} />
              </div>
            </Col>
            <Col span={8}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 355 }}
              >
                <ProfileViewCommentsChart
                  data={profile?.Instagram?.Historical}
                />
              </div>
            </Col>
            <Col span={8}>
              <div
                className="ProfileView__block _mb-less"
                style={{ height: 355 }}
              >
                <ProfileViewEmojisChart data={profile?.Instagram?.Emojis} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
