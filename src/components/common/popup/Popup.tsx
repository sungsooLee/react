import React, { ReactNode, useEffect } from "react";
import cn from "classnames";
import styles from "./Popup.module.scss";

type PopupSize = "large" | "medium";

interface PopupGroupProps {
  className?: string;
  title?: string;
  content?: ReactNode;
  footer?: ReactNode;
  size?: PopupSize;
  isOpen?: boolean;
  onClose?: () => void;
}

export const PopupGroup = ({
  className,
  title,
  content,
  footer,
  size = "medium",
  isOpen,
  onClose,
}: PopupGroupProps) => {

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const sizeClass = styles[size];
 
  return (
    <div className={cn(styles.popup, className, isOpen && styles.open)}>
      <div className={styles.dim}></div>
      <div className={cn(styles.popup_area, sizeClass)}>
        <div className={styles.popup_header}>
          <h3>{title}</h3>
          <button className={styles.close_btn} onClick={onClose}>
            닫기
          </button>
        </div>
        <div className={styles.popup_content}>
          {content}
        </div>
        {footer && <div className={styles.popup_footer}>{footer}</div>}
      </div>
    </div>
  );
};
