import React from "react";
import cn from "classnames";
import styles from "./Divider.module.scss";

interface DividerProps {
  thickness?: "slim" | "thick";
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const Divider = ({
  thickness = "slim",
  orientation = "horizontal",
  className,
}: DividerProps) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        styles.divider,
        styles[thickness],
        styles[orientation],
        className,
      )}
    ></div>
  );
};
