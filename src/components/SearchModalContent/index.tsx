import "./SearchModalContent.scss";

import { Col, Input, InputNumber, Radio, Row } from "antd";
import React, { useState } from "react";

import { RadioChangeEvent } from "antd/lib/radio";
import { TheButton } from "../common/buttons";
import { searchModalActions } from "../../store/modules/searchModal";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const SearchModalContent: React.FC = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [radios, setRadios] = useState({ first: 1, second: 1, third: 1 });
  const onChange = (e: RadioChangeEvent, name: string) => {
    console.log("radio checked", e.target.value);
    setRadios((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        [name]: e.target.value,
      };
    });
  };

  return (
    <div className="SearchModalContent">
      <h2 className="SearchModalContent__title">Search By</h2>
      <Row>
        <Col span={24} className="SearchModalContent__col">
          <span className="SearchModalContent__label">
            Username, Keyword, or Tag
          </span>
          <Input
            placeholder="Ex: @Nike, Fitness, #Sports"
            className="SearchModalContent__input"
          />
        </Col>
        <Col span={24} className="SearchModalContent__col">
          <span className="SearchModalContent__label">
            By Location (Using Google Places Autocomplete API)
          </span>
          <Input
            placeholder="Ex: London or United States"
            className="SearchModalContent__input"
          />
        </Col>
        <Col span={24} className="SearchModalContent__col">
          <Row gutter={20}>
            <Col span={8}>
              <span className="SearchModalContent__label">
                Minimum Following*
              </span>
              <InputNumber
                placeholder="Ex 5,000"
                className="SearchModalContent__input"
              />
            </Col>
            <Col span={8}>
              <span className="SearchModalContent__label">
                Maximum Following*
              </span>
              <InputNumber
                placeholder="Ex 5,000,000"
                className="SearchModalContent__input"
              />
            </Col>
            <Col span={8}>
              <span className="SearchModalContent__label">
                Minimum Engagement%
              </span>
              <InputNumber
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
                Minimum Avg.Views
              </span>
              <InputNumber
                placeholder="Ex 10,000"
                className="SearchModalContent__input"
              />
            </Col>
            <Col span={8}>
              <span className="SearchModalContent__label">
                Minimum Average Comments
              </span>
              <InputNumber
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
                value={radios.first}
                onChange={(e) => onChange(e, "first")}
                className="SearchModalContent__radio-group"
              >
                <Radio className="SearchModalContent__radio-btn" value={1}>
                  Yes
                </Radio>
                <Radio className="SearchModalContent__radio-btn" value={0}>
                  No
                </Radio>
              </Radio.Group>
            </Col>
            <Col span={8}>
              <span className="SearchModalContent__label">Has Video?</span>
              <Radio.Group
                value={radios.second}
                onChange={(e) => onChange(e, "second")}
                className="SearchModalContent__radio-group"
              >
                <Radio className="SearchModalContent__radio-btn" value={1}>
                  Yes
                </Radio>
                <Radio className="SearchModalContent__radio-btn" value={0}>
                  No
                </Radio>
              </Radio.Group>
            </Col>
            <Col span={8}>
              <span className="SearchModalContent__label">Verified</span>
              <Radio.Group
                value={radios.third}
                onChange={(e) => onChange(e, "third")}
                className="SearchModalContent__radio-group"
              >
                <Radio className="SearchModalContent__radio-btn" value={1}>
                  Yes
                </Radio>
                <Radio className="SearchModalContent__radio-btn" value={0}>
                  No
                </Radio>
              </Radio.Group>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <TheButton
            label="Search Now"
            className="SearchModalContent__btn"
            type="danger"
            icon="search"
            iconLeft
            onClick={() => {
              push("/result");
              dispatch(searchModalActions["SEARCH_MODAL_HIDE"]());
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
