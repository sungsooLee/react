import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import styles from "./Tooltip.module.scss";

export type TooltipPlacement = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  placement?: TooltipPlacement;
  className?: string;
}

export const Tooltip = ({
  content,
  children,
  placement = "top",
  className,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const toggle = () => setVisible((prev) => !prev);

  useEffect(() => {
    if (!visible) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [visible]);

  return (
    <span ref={containerRef} className={cn(styles.tooltip, className)}>
      <span className={styles.trigger} onClick={toggle}>
        {children}
      </span>

      {visible && (
        <span className={cn(styles.tooltipBox, styles[placement])}>
          {content}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
