import React, { useState } from "react";
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
  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return (
    <span className={cn(styles.tooltip, className)}>
      <span className={styles.trigger} onClick={open}>
        {children}
      </span>

      {visible && (
        <span className={cn(styles.tooltipBox, styles[placement])}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={close}
            aria-label="툴팁 닫기"
          >
            ×
          </button>
          <span className={styles.content}>{content}</span>
        </span>
      )}
    </span>
  );
};

export default Tooltip;
