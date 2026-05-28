import React, { ReactNode, useEffect } from "react";
import cn from "classnames";
import styles from "./Alert.module.scss";

interface AlertProps {
  isOpen?: boolean;
  title?: string;
  message?: ReactNode;
  cancelText?: string;
  confirmText?: string;
  className?: string;
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const Alert = ({
  isOpen = false,
  title = "알림",
  message,
  cancelText = "취소",
  confirmText = "확인",
  className,
  onClose,
  onCancel,
  onConfirm,
}: AlertProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={cn(styles.alert, className, isOpen && styles.open)}>
      <div className={styles.dim}></div>
      <div className={styles.alertArea}>
        <div className={styles.alertHeader}>
          <h3>{title}</h3>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose ?? onConfirm}
            aria-label="알럿 닫기"
          >
            ×
          </button>
        </div>
        <div className={styles.alertContent}>{message}</div>
        <div className={styles.alertFooter}>
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={onCancel ?? onClose}
          >
            {cancelText}
          </button>
          <button type="button" className={styles.confirmBtn} onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
