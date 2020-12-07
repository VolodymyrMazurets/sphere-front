import "./ProfileView.scss";

import { Col, Row } from "antd";
import {
  ProfileViewCommentsChart,
  ProfileViewCommonTags,
  ProfileViewEmojisTags,
  ProfileViewEngagementChart,
  ProfileViewFolowersChart,
  ProfileViewHashTags,
  ProfileViewInfo,
  ProfileViewMain,
  ProfileViewMap,
  ProfileViewVideosChart,
} from "../../components/views/profile";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ListDetailsInfluencersResponseType } from "../../services/http/types";
import { RootState } from "../../store/types";
import { TheLoader } from "../../components/common";
import { listActions } from "../../store/modules/list";
import { profileActions } from "../../store/modules/profile";
import { useParams } from "react-router-dom";

export const ProfileView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { profile, loading } = useSelector(
    ({ profileState }: RootState) => profileState
  );
  const [
    userData,
    setUserData,
  ] = useState<ListDetailsInfluencersResponseType>();

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(listActions["LIST_REQUEST"]());
      dispatch(profileActions["PROFILE_REQUEST"](id));
    };
    fetchData();
    setUserData({
      Bio: profile.Instagram?.Profile?.Bio || null,
      Username: profile.Instagram?.Profile?.Username || null,
      Verified: profile.Instagram?.Profile?.Verified || null,
      Followers: profile.Instagram?.Profile?.Followers || null,
      FullName: profile.Instagram?.Profile?.FullName || null,
      NumPosts: profile.Instagram?.Profile?.NumPosts || null,
      ProfilePicture: profile.Instagram?.Metadata?.ProfilePictureURL || null,
      Engagement:
        Number(
          profile.Instagram?.EngagementMetrics?.AverageEngagementLikesComments
        ) || null,
      EngagementNum:
        Number(profile.Instagram?.EngagementMetrics?.Engagement) || null,
      EstimatedLocation: profile.EstimatedLocation?.FormattedAddress || null,
      InfluencerId: profile.Id,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  return (
    <div className="ProfileView">
      <TheLoader loading={loading}>
        <Row>
          <Col span={24} className="ProfileView__head">
            <h1 className="ProfileView__title">Mona’s Brain</h1>
          </Col>
          <Col span={24} className="ProfileView__block">
            <ProfileViewMain
              userData={userData}
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
                  <ProfileViewCommonTags
                    data={profile?.Instagram?.TaggedUsers}
                  />
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
                  <ProfileViewVideosChart
                    data={profile?.Instagram?.Historical}
                  />
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
                  <ProfileViewEmojisTags data={profile?.Instagram?.Emojis} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </TheLoader>{" "}
    </div>
  );
};
