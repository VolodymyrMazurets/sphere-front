import "./ProfileViewEmojisTags.scss";
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

interface ProfileViewEmojisTagsInterface {
  data?: TaggsType;
}

export const ProfileViewEmojisTags: React.FC<ProfileViewEmojisTagsInterface> = ({
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
      <span className="ProfileViewEmojisTags__small-title">
        Display of Most Used Emojis
      </span>

      <ReactWordcloud words={mappedData} options={config} maxWords={40} />
    </>
  );
};
