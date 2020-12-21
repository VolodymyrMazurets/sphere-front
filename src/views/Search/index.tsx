import "./SearchView.scss";

import { Col, Input, InputNumber, Radio, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RadioChangeEvent } from "antd/lib/radio";
import { RootState } from "../../store/types";
import { SearchPayloadType } from "../../services/http/types";
import { TheButton } from "../../components/common";
import { TheSearch } from "../../components/Search";
import { searchActions } from "../../store/modules/search";
import { searchModalActions } from "../../store/modules/searchModal";
import { useHistory } from "react-router-dom";

const initialSearchState: SearchPayloadType = {
  SearchString: null,
  LocationViewport: undefined,
  LocationName: null,
  MinFollowers: 1,
  MaxFollowers: null,
  SortBy: null,
  SortOrder: null,
  MinAvgViews: null,
  MinAvgComments: null,
  Verified: null,
  HasEmail: null,
  Page: 1,
  Language: null,
};

export const SearchView: React.FC = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [formData, setFormData] = useState({ ...initialSearchState });
  const { loading } = useSelector(({ searchState }: RootState) => searchState);

  const onRadiosChange = (e: RadioChangeEvent, name: string) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: e.target.value,
      };
    });
  };

  const onInputsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: e.target.value,
      };
    });
  };

  const onInputTypeNumberChange = (
    e: number | undefined | string,
    name: string
  ) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: e,
      };
    });
  };

  const onLocationChange = (
    viewport?: google.maps.LatLngBounds,
    address?: string
  ) => {
    interface ViewpotCustom {
      Ra: {
        i: number;
        j: number;
      };
      Wa: {
        i: number;
        j: number;
      };
    }
    const shallowCopy = { ...viewport } as ViewpotCustom;
    setFormData((prevState) => {
      return {
        ...prevState,
        LocationViewport: {
          TopLeft: `${shallowCopy.Wa.j},${shallowCopy.Ra.i}`,
          BottomRight: `${shallowCopy.Wa.i},${shallowCopy.Ra.j}`,
        },
        LocationName: address,
      };
    });
  };

  const handleButtonClick = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(searchActions["SEARCH_CLEAR"]());
    await dispatch(searchActions["SEARCH_REQUEST"]({ ...formData }));
    push("/result");
    dispatch(searchModalActions["SEARCH_MODAL_HIDE"]());
  };

  return (
    <form className="SearchView" onSubmit={(e) => handleButtonClick(e)}>
      <h2 className="SearchView__title">Search By</h2>
      <Row gutter={20}>
        <Col span={12} className="SearchView__col">
          <span className="SearchView__label">Username, Keyword, or Tag</span>
          <Input
            onChange={(e) => onInputsChange(e, "SearchString")}
            placeholder="Ex: @Nike, Fitness, #Sports"
            className="SearchView__input"
          />
        </Col>
        <Col span={12} className="SearchView__col">
          <span className="SearchView__label">By Location</span>
          {/* <Input
            disabled
            placeholder="Ex: London or United States"
            className="SearchView__input"
          /> */}
          <TheSearch
            onChange={(e) =>
              onLocationChange(
                e?.getPlaces()[0].geometry?.viewport,
                e?.getPlaces()[0].formatted_address
              )
            }
          />
        </Col>
        <Col span={24} className="SearchView__col">
          <Row gutter={10} style={{flexWrap: 'nowrap'}}>
            <Col style={{width: '100%'}}>
              <span className="SearchView__label">Minimum Following*</span>
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                onChange={(e) => onInputTypeNumberChange(e, "MinFollowers")}
                placeholder="Ex 5,000"
                className="SearchView__input"
              />
            </Col>
            <Col style={{width: '100%'}}>
              <span className="SearchView__label">Maximum Following*</span>
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                onChange={(e) => onInputTypeNumberChange(e, "MaxFollowers")}
                placeholder="Ex 5,000,000"
                className="SearchView__input"
              />
            </Col>
            <Col style={{width: '100%'}}>
              <span className="SearchView__label">Minimum Engagement%</span>
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                onChange={(e) => onInputTypeNumberChange(e, "MinEngagement")}
                placeholder="Ex 1.5%"
                className="SearchView__input"
              />
            </Col>
            <Col style={{width: '100%'}}>
              <span className="SearchView__label">Minimum Avg. Views</span>
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                onChange={(e) => onInputTypeNumberChange(e, "MinAvgViews")}
                placeholder="Ex 10,000"
                className="SearchView__input"
              />
            </Col>
            <Col style={{width: '100%'}}>
              <span className="SearchView__label">Minimum Avg. Comments</span>
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                onChange={(e) => onInputTypeNumberChange(e, "MinAvgComments")}
                placeholder="Ex 10"
                className="SearchView__input"
              />
            </Col>
          </Row>
        </Col>
        <Col span={24} className="SearchView__col">
          <Row gutter={20}>
            <Col style={{maxWidth: '20%', width: '100%'}}>
              <span className="SearchView__label">Has Email?</span>
              <Radio.Group
                value={formData.HasEmail}
                onChange={(e) => onRadiosChange(e, "HasEmail")}
                className="SearchView__radio-group"
              >
                <Radio className="SearchView__radio-btn" value={true}>
                  Yes
                </Radio>
                <Radio className="SearchView__radio-btn" value={false}>
                  No
                </Radio>
              </Radio.Group>
            </Col>
            <Col style={{maxWidth: '20%', width: '100%'}}>
              <span className="SearchView__label">Language</span>
              <Radio.Group
                value={formData.Language}
                onChange={(e) =>
                  setFormData((prevState) => {
                    return {
                      ...prevState,
                      Language: e.target.value,
                    };
                  })
                }
                className="SearchView__radio-group"
              >
                <Radio className="SearchView__radio-btn" value="en">
                  EN
                </Radio>
                <Radio className="SearchView__radio-btn" value="es">
                  SP
                </Radio>
              </Radio.Group>
            </Col>
            <Col style={{maxWidth: '20%', width: '100%'}}>
              <span className="SearchView__label">Verified</span>
              <Radio.Group
                value={formData.Verified}
                onChange={(e) => onRadiosChange(e, "Verified")}
                className="SearchView__radio-group"
              >
                <Radio className="SearchView__radio-btn" value={true}>
                  Yes
                </Radio>
                <Radio className="SearchView__radio-btn" value={false}>
                  No
                </Radio>
              </Radio.Group>
            </Col>
          </Row>
        </Col>
        <Col span={8} offset={8} style={{marginTop: 40}}>
          <TheButton
            loading={loading}
            isForm
            label="Search Now"
            className="SearchView__btn"
            type="danger"
            icon="search"
            iconLeft
            onClick={handleButtonClick}
          />
        </Col>
      </Row>
    </form>
  );
};
