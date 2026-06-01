import React from "react";
import { iconMap } from "./index";
import type { IconName } from "./index";
import cn from "classnames";
import SummitIcon from "./SummitIcon";
import styles from "./Icon.module.scss";

type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

interface IconProps {
  name: IconName;
  size?: IconSize;
  fillColor?: string;
  strokeColor?: string;
  className?: string;
}

const sizeMap = {
  xs: 16,
  sm: 18,
  md: 24,
  lg: 32,
  xl: 48,
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = "md",
  fillColor = "currentColor",
  strokeColor = "currentColor",
  className,
}) => {
  const SvgIcon = iconMap[name];
  const iconSize = sizeMap[size];

  if (!SvgIcon) {
    console.warn(`Icon "${name}" not found in assets/icons`);
    return null;
  }

  if (name === "summit") {
    return (
      <SummitIcon
        width={iconSize}
        height={iconSize}
        className={cn(styles.svg_icon, styles[size], className)}
      />
    );
  }

  return (
    <SvgIcon
      width={iconSize}
      height={iconSize}
      fill={fillColor}
      stroke={strokeColor}
      className={cn(styles.svg_icon, styles[size], className)}
    />
  );
};
