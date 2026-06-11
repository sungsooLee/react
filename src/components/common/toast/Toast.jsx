import { useEffect } from "react";
import cn from "classnames";
import styles from "./Toast.module.scss";

export const Toast = ({
  isOpen = false,
  message,
  variant = "default",
  position = "bottom",
  duration = 3000,
  className,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen || !duration || !onClose) return;

    const timer = window.setTimeout(onClose, duration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isOpen, duration, onClose]);

  return (
    <div
      className={cn(styles.toast, className, {
        [styles.open]: isOpen,
        [styles[variant]]: true,
        [styles[position]]: true,
      })}
      role="alert"
      aria-live="polite"
    >
      <div className={styles.toastArea}>
        <div className={cn(styles.toastIcon, styles[variant])}></div>
        <div className={styles.toastContent}>
          {message && <p className={styles.toastMessage}>{message}</p>}
        </div>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="토스트 닫기"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
