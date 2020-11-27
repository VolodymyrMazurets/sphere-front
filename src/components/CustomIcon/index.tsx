import React, { CSSProperties, SVGProps } from "react";

import Icon from "@ant-design/icons";
import { ReactComponent as IconArrowLeft } from "../../assets/svg/arrowLeft.svg";
import { ReactComponent as IconArrowRight } from "../../assets/svg/arrowRight.svg";
import { ReactComponent as IconExport } from "../../assets/svg/Export.svg";
import { ReactComponent as IconFavorite } from "../../assets/svg/FavouriteInfluencerIcon.svg";
import { ReactComponent as IconHelp } from "../../assets/svg/HelpIcon.svg";
import { ReactComponent as IconList } from "../../assets/svg/List.svg";
import { ReactComponent as IconSearch } from "../../assets/svg/Search.svg";

export interface CustomIconProps {
  className?: string;
  icon: IconTypes;
  style?: CSSProperties;
  spin?: boolean;
}

export type IconTypes =
  | "arrow-left"
  | "arrow-right"
  | "list"
  | "favorite"
  | "help"
  | "export"
  | "search"
  | React.FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>;

// Why to do this in typescript? Better for testing all of icons to do snapshots
export const iconsTypes: { [key: string]: IconTypes } = {
  ARROW_LEFT: "arrow-left",
  ARROW_RIGHT: "arrow-right",
  LIST: "list",
  FAVORITE: "favorite",
  HELP: "help",
  EXPORT: "export",
  SEARCH: "search",
};

const getName = (name?: IconTypes) => `icon-${name}`;

export const CustomIcon: React.FC<CustomIconProps> = (props) => {
  const { className, icon, style, spin } = props;

  const icons = {
    [getName("arrow-left")]: IconArrowLeft,
    [getName("arrow-right")]: IconArrowRight,
    [getName("list")]: IconList,
    [getName("favorite")]: IconFavorite,
    [getName("help")]: IconHelp,
    [getName("export")]: IconExport,
    [getName("search")]: IconSearch,
  };

  const IconComponent = icons[getName(icon)] || null;

  return (
    <Icon
      {...props}
      style={style}
      component={IconComponent}
      className={className}
      spin={spin}
    />
  );
};
