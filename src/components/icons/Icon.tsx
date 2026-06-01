import React, { useId } from "react";
import { iconMap } from "./index";
import type { IconName } from "./index";
import cn from "classnames";
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

const SummitIconSvg = ({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) => {
  const uid = useId().replace(/:/g, "");
  const circleGradientId = `${uid}-circle`;
  const arrowGradientId = `${uid}-arrow`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      className={cn(className)}
    >
      <path
        d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
        fill={`url(#${circleGradientId})`}
        stroke="none"
      />
      <path
        d="M26.5025 35.876C26.3086 36.328 25.9747 36.6071 25.5007 36.7132C25.0268 36.8192 24.614 36.6963 24.2621 36.3444L20.0846 32.1666C19.8871 31.969 19.8505 31.6619 19.9961 31.4234L24.0575 24.773C24.3884 24.2312 23.7677 23.6104 23.2259 23.9414L16.5761 28.0031C16.3377 28.1487 16.0306 28.1122 15.833 27.9146L11.6555 23.7367C11.3037 23.3849 11.1808 22.9719 11.2868 22.498C11.3929 22.024 11.6719 21.6901 12.1239 21.4961L33.3416 12.8629C33.9173 12.6433 34.4156 12.744 34.8366 13.165C35.2576 13.5861 35.357 14.0832 35.135 14.6565L26.5025 35.876Z"
        fill={`url(#${arrowGradientId})`}
        stroke="none"
      />
      <defs>
        <linearGradient
          id={circleGradientId}
          x1="10"
          y1="10"
          x2="38"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--summit-circle-start, #F1F7FF)" />
          <stop offset="1" stopColor="var(--summit-circle-end, #F1F7FF)" />
        </linearGradient>
        <linearGradient
          id={arrowGradientId}
          x1="11.25"
          y1="24.75"
          x2="35.25"
          y2="24.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--summit-gradient-start, #7C8EE5)" />
          <stop offset="1" stopColor="var(--summit-gradient-end, #48CBFF)" />
        </linearGradient>
      </defs>
    </svg>
  );
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
      <SummitIconSvg
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
