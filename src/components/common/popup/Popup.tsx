import React, { ReactNode, useEffect } from "react";
import cn from "classnames";
import styles from "./Popup.module.scss";

type PopupStyle = "bottom" | "full" | "center";

interface PopupGroupProps {
  className?: string;
  title?: string;
  content?: ReactNode;
  style?: PopupStyle;
  isOpen?: boolean;
  onClose?: () => void;
}

export const PopupGroup = ({
  className,
  title,
  content,
  style = "bottom",
  isOpen,
  onClose,
}: PopupGroupProps) => {

  useEffect(() => {
      if (isOpen) {
          document.body.style.overflow = "hidden";
      } else {
          document.body.style.overflow = "auto";
      }
  }, [isOpen]);

  const styleClass = style ? styles[style] : undefined;

  return (
    <div className={cn(styles.popup, className, isOpen && styles.open)}>
        <div className={styles.dim}></div>
        <div className={cn(styles.popup_area, styleClass)}>
            <div className={styles.popup_header}>
                <h3>{title}</h3>
                <button className={styles.close_btn} onClick={onClose}>닫기</button>
            </div>
            <div className={styles.popup_content}>
                {content}
            </div>
        </div>
    </div>
  );
};
