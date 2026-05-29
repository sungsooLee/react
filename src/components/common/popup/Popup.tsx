import React, { ReactNode, useEffect } from "react";
import cn from "classnames";
import Checkbox from "@/components/common/checkbox/Checkbox";
import styles from "./Popup.module.scss";
export type PopupVariant = "modal" | "layer";
export type PopupSize = "large" | "medium";

interface PopupGroupProps {
  variant?: PopupVariant;
  className?: string;
  title?: string;
  content?: ReactNode;
  footer?: ReactNode;
  size?: PopupSize;
  hideTodayText?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const PopupGroup = ({
  variant = "modal",
  className,
  title,
  content,
  footer,
  size = "medium",
  hideTodayText = "오늘 하루 보지 않기",
  isOpen,
  onClose,
}: PopupGroupProps) => {
  useEffect(() => {
    if (variant !== "modal" || !isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, variant]);

  const isModal = variant === "modal";

  return (
    <div
      className={cn(styles.popup, className, {
        [styles.open]: isOpen,
        [styles.modal]: isModal,
        [styles.layer]: !isModal,
      })}
    >
      {isModal && <div className={styles.dim} onClick={onClose} />}

      {isModal ? (
        <div className={cn(styles.modal_area, styles[size])}>
          <div className={styles.modal_header}>
            <h3>{title}</h3>
            <button
              type="button"
              className={styles.close_btn}
              onClick={onClose}
              aria-label="팝업 닫기"
            >
              닫기
            </button>
          </div>
          <div className={styles.modal_content}>{content}</div>
          {footer && <div className={styles.modal_footer}>{footer}</div>}
        </div>
      ) : (
        <div className={styles.layer_area}>
          <div className={styles.layer_content}>{content}</div>
          <div className={styles.layer_bottom}>
            <Checkbox label={hideTodayText} />
            <button
              type="button"
              className={styles.layer_close_btn}
              onClick={onClose}
              aria-label="팝업 닫기"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupGroup;
