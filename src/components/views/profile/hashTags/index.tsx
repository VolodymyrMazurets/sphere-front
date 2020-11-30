import "./ProfileViewHashTags.scss";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";

import ReactWordcloud, { OptionsProp } from "react-wordcloud";

import React from "react";

const words = [
  {
    text: "#told",
    value: 64,
  },
  {
    text: "#mistake",
    value: 11,
  },
  {
    text: "#thought",
    value: 16,
  },
  {
    text: "#bad",
    value: 17,
  },
  {
    text: "#mtetestst",
    value: 11,
  },
  {
    text: "#city",
    value: 16,
  },
  {
    text: "#Ukraine",
    value: 98,
  },
  {
    text: "#told",
    value: 64,
  },
  {
    text: "#mistake",
    value: 11,
  },
  {
    text: "#thought",
    value: 16,
  },
  {
    text: "#bad",
    value: 27,
  },
  {
    text: "#mtetestst",
    value: 14,
  },
  {
    text: "#city",
    value: 20,
  },
  {
    text: "#Kremenchuk",
    value: 98,
  },
  {
    text: "#told",
    value: 64,
  },
  {
    text: "#mistake",
    value: 11,
  },
  {
    text: "#thought",
    value: 16,
  },
  {
    text: "#bad",
    value: 17,
  },
  {
    text: "#mtetestst",
    value: 11,
  },
  {
    text: "#city",
    value: 16,
  },
  {
    text: "#Ukraine",
    value: 98,
  },
  {
    text: "#told",
    value: 64,
  },
  {
    text: "#mistake",
    value: 11,
  },
  {
    text: "#thought",
    value: 16,
  },
  {
    text: "#bad",
    value: 27,
  },
  {
    text: "#mtetestst",
    value: 14,
  },
  {
    text: "#city",
    value: 20,
  },
  {
    text: "#Kremenchuk",
    value: 98,
  },
];

const config: OptionsProp = {
  colors: ["#2E91BD"],
  deterministic: true,
  fontFamily: "Poppins",
  fontSizes: [18, 56],
  rotations: 0,
  scale: "sqrt",
  tooltipOptions: { theme: "light" },
};

export const ProfileViewHashTags: React.FC = () => {
  return (
    <>
      <span className="ProfileViewHashTags__small-title">
        Display of Most Common Hastags
      </span>

      <ReactWordcloud words={words} options={config} />
    </>
  );
};
