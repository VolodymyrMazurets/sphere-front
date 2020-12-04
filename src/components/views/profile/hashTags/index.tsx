import "./ProfileViewHashTags.scss";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";

import ReactWordcloud, { OptionsProp, Word } from "react-wordcloud";

import React from "react";
import { TaggsType } from "../../../../services/http/types";
import { map } from "lodash";

const config: OptionsProp = {
  colors: ["#2E91BD"],
  deterministic: true,
  fontFamily: "Poppins",
  fontSizes: [18, 56],
  rotations: 0,
  scale: "sqrt",
  tooltipOptions: { theme: "light" },
};

interface ProfileViewHashTagsInterface {
  data?: TaggsType;
}

export const ProfileViewHashTags: React.FC<ProfileViewHashTagsInterface> = ({
  data,
}) => {
  const mappedData: Word[] = map(
    data,
    (value, key): Word => ({
      text: key,
      value: Number(value.Occurrences),
    })
  );

  return (
    <>
      <span className="ProfileViewHashTags__small-title">
        Display of Most Common Hastags
      </span>

      <ReactWordcloud words={mappedData} options={config} maxWords={40} />
    </>
  );
};
