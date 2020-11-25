import React, { SVGProps } from "react";

import Icon from "@ant-design/icons";
import { ReactComponent as IconArrowLeft } from "../../assets/svg/arrowLeft.svg";
import { ReactComponent as IconArrowRight } from "../../assets/svg/arrowRight.svg";
import { ReactComponent as IconFavorite } from "../../assets/svg/FavouriteInfluencerIcon.svg";
import { ReactComponent as IconHelp } from "../../assets/svg/HelpIcon.svg";
import { ReactComponent as IconList } from "../../assets/svg/List.svg";

export interface CustomIconProps {
  className?: string;
  icon: IconTypes;
}

export type IconTypes =
  | "arrow-left"
  | "arrow-right"
  | "list"
  | "favorite"
  | "help"
  | React.FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>;

// Why to do this in typescript? Better for testing all of icons to do snapshots
export const iconsTypes: { [key: string]: IconTypes } = {
  ARROW_LEFT: "arrow-left",
  ARROW_RIGHT: "arrow-right",
  LIST: "list",
  FAVORITE: "favorite",
  HELP: "help",
};

const getName = (name?: IconTypes) => `icon-${name}`;

export const CustomIcon: React.FC<CustomIconProps> = (props) => {
  const { className, icon } = props;

  const icons = {
    [getName("arrow-left")]: IconArrowLeft,
    [getName("arrow-right")]: IconArrowRight,
    [getName("list")]: IconList,
    [getName("favorite")]: IconFavorite,
    [getName("help")]: IconHelp,
  };

  const IconComponent = icons[getName(icon)] || null;

  return (
    <Icon
      {...props}
      component={IconComponent}
      className={className}
    />
  );
};
