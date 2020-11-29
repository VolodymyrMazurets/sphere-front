import "./TheButton.scss";

import { CustomIcon, IconTypes } from "../../CustomIcon";

import { Button } from "antd";
import { ButtonShape } from "antd/lib/button";
import { ClassValue } from "classnames/types";
import React from "react";
import classNames from "classnames";

interface TheButtonProps {
  className?: ClassValue;
  label?: string;
  icon?: IconTypes;
  shape?: ButtonShape;
  iconSize?: number;
  iconColor?: string;
  type?: "primary" | "danger" | "light";
  onClick?: React.MouseEventHandler<HTMLElement>;
  iconLeft?: boolean;
}
export const TheButton: React.FC<TheButtonProps> = ({
  label,
  className,
  icon,
  shape = "round",
  iconSize = 13,
  iconColor,
  type = "primary",
  onClick,
  iconLeft,
}) => {
  return (
    <Button
      type="primary"
      shape={shape}
      size="large"
      className={classNames("TheButton", className, shape, type)}
      onClick={onClick}
      icon={iconLeft && <CustomIcon icon={icon} />}
    >
      {label}
      {icon && !iconLeft && (
        <CustomIcon
          icon={icon}
          className="TheButton__icon"
          style={{
            marginLeft: label && 24,
            fontSize: iconSize,
            color: iconColor,
          }}
        />
      )}
    </Button>
  );
};
