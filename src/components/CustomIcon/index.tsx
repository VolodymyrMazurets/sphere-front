import React, { CSSProperties, SVGProps } from "react";

import Icon from "@ant-design/icons";
import { ReactComponent as IconAdd } from "../../assets/svg/Add.svg";
import { ReactComponent as IconArrowLeft } from "../../assets/svg/arrowLeft.svg";
import { ReactComponent as IconArrowRight } from "../../assets/svg/arrowRight.svg";
import { ReactComponent as IconDelete } from "../../assets/svg/delete.svg";
import { ReactComponent as IconExport } from "../../assets/svg/Export.svg";
import { ReactComponent as IconFavorite } from "../../assets/svg/FavouriteInfluencerIcon.svg";
import { ReactComponent as IconHelp } from "../../assets/svg/HelpIcon.svg";
import { ReactComponent as IconList } from "../../assets/svg/List.svg";
import { ReactComponent as IconLocation } from "../../assets/svg/Location.svg";
import { ReactComponent as IconLogo } from "../../assets/svg/logo.svg";
import { ReactComponent as IconLongArrow } from "../../assets/svg/LongArrow.svg";
import { ReactComponent as IconPen } from "../../assets/svg/pen.svg";
import { ReactComponent as IconSearch } from "../../assets/svg/Search.svg";
import { ReactComponent as IconSeparator } from "../../assets/svg/separator.svg";
import { ReactComponent as IconSettings } from "../../assets/svg/Settings.svg";
import { ReactComponent as IconStar } from "../../assets/svg/Star.svg";

export interface CustomIconProps {
  className?: string;
  icon: IconTypes | undefined;
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
  | "add"
  | "settings"
  | "location"
  | "star"
  | "long-arrow"
  | "pen"
  | "delete"
  | "logo"
  | "separator"
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
  ADD: "add",
  SETTINGS: "settings",
  LOCATION: "location",
  STAR: "star",
  LONG_ARROW: "long-arrow",
  PEN: "pen",
  DELETE: "delete",
  LOGO: "logo",
  SEPARATOR: 'separator',
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
    [getName("add")]: IconAdd,
    [getName("settings")]: IconSettings,
    [getName("location")]: IconLocation,
    [getName("star")]: IconStar,
    [getName("long-arrow")]: IconLongArrow,
    [getName("pen")]: IconPen,
    [getName("delete")]: IconDelete,
    [getName("logo")]: IconLogo,
    [getName('separator')]: IconSeparator,
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
