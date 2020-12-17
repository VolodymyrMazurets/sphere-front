import "./SearchModalContent.scss";

import { Col, Input, InputNumber, Radio, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RadioChangeEvent } from "antd/lib/radio";
import { RootState } from "../../store/types";
import { SearchPayloadType } from "../../services/http/types";
import { TheButton } from "../common/buttons";
import { TheSearch } from "../Search";
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

export const SearchModalContent: React.FC = () => {
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
    <form className="SearchModalContent" onSubmit={(e) => handleButtonClick(e)}>
      <h2 className="SearchModalContent__title">Search By</h2>
      <Row>
        <Col span={24} className="SearchModalContent__col">
          <span className="SearchModalContent__label">
            Username, Keyword, or Tag
          </span>
          <Input
            onChange={(e) => onInputsChange(e, "SearchString")}
            placeholder="Ex: @Nike, Fitness, #Sports"
            className="SearchModalContent__input"
          />
        </Col>
        <Col span={24} className="SearchModalContent__col">
          <span className="SearchModalContent__label">By Location</span>
          {/* <Input
            disabled
            placeholder="Ex: London or United States"
            className="SearchModalContent__input"
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
        <Col span={24} className="SearchModalContent__col">
          <Row gutter={20}>
            <Col span={8}>
              <span className="SearchModalContent__label">
                Minimum Following*
              </span>
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                onChange={(e) => onInputTypeNumberChange(e, "MinFollowers")}
                placeholder="Ex 5,000"
                className="SearchModalContent__input"
              />
            </Col>
            <Col span={8}>
              <span className="SearchModalContent__label">
                Maximum Following*
              </span>
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                onChange={(e) => onInputTypeNumberChange(e, "MaxFollowers")}
                placeholder="Ex 5,000,000"
                className="SearchModalContent__input"
              />
            </Col>
            <Col span={8}>
              <span className="SearchModalContent__label">
                Minimum Engagement%
              </span>
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                onChange={(e) => onInputTypeNumberChange(e, "MinEngagement")}
                placeholder="Ex 1.5%"
                className="SearchModalContent__input"
              />
            </Col>
          </Row>
        </Col>
        <Col span={24} className="SearchModalContent__col">
          <Row gutter={20}>
            <Col span={8}>
              <span className="SearchModalContent__label">
                Minimum Avg. Views
              </span>
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                onChange={(e) => onInputTypeNumberChange(e, "MinAvgViews")}
                placeholder="Ex 10,000"
                className="SearchModalContent__input"
              />
            </Col>
            <Col span={8}>
              <span className="SearchModalContent__label">
                Minimum Avg. Comments
              </span>
              <InputNumber
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                onChange={(e) => onInputTypeNumberChange(e, "MinAvgComments")}
                placeholder="Ex 10"
                className="SearchModalContent__input"
              />
            </Col>
          </Row>
        </Col>
        <Col span={24} className="SearchModalContent__col">
          <Row gutter={20}>
            <Col span={8}>
              <span className="SearchModalContent__label">Has Email?</span>
              <Radio.Group
                value={formData.HasEmail}
                onChange={(e) => onRadiosChange(e, "HasEmail")}
                className="SearchModalContent__radio-group"
              >
                <Radio className="SearchModalContent__radio-btn" value={true}>
                  Yes
                </Radio>
                <Radio className="SearchModalContent__radio-btn" value={false}>
                  No
                </Radio>
              </Radio.Group>
            </Col>
            <Col span={8}>
              <span className="SearchModalContent__label">Language</span>
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
                className="SearchModalContent__radio-group"
              >
                <Radio className="SearchModalContent__radio-btn" value="en">
                  EN
                </Radio>
                <Radio className="SearchModalContent__radio-btn" value="es">
                  SP
                </Radio>
              </Radio.Group>
            </Col>
            <Col span={8}>
              <span className="SearchModalContent__label">Verified</span>
              <Radio.Group
                value={formData.Verified}
                onChange={(e) => onRadiosChange(e, "Verified")}
                className="SearchModalContent__radio-group"
              >
                <Radio className="SearchModalContent__radio-btn" value={true}>
                  Yes
                </Radio>
                <Radio className="SearchModalContent__radio-btn" value={false}>
                  No
                </Radio>
              </Radio.Group>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <TheButton
            loading={loading}
            isForm
            label="Search Now"
            className="SearchModalContent__btn"
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
