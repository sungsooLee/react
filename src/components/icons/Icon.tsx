import React from "react";
import { iconMap } from "./index";
import type { IconName } from "./index";
import cn from "classnames";
import styles from "./Icon.module.scss";

type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: string;
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
  color = "currentColor",
  className,
}) => {
  const SvgIcon = iconMap[name];
  const iconSize = sizeMap[size];

  if (!SvgIcon) {
    console.warn(`Icon "${name}" not found in assets/icons`);
    return null;
  }

  return (
    <SvgIcon
      width={iconSize}
      height={iconSize}
      fill={color}
      className={cn(styles.svg_icon, styles[size], className)}
    />
  );
};
