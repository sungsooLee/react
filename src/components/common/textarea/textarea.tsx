// @/components/common/textarea/textarea.tsx (또는 FormTextarea.tsx)
import React from "react";
import cn from "classnames";
import styles from "./textarea.module.scss"; // 또는 해당 scss 경로

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  showCount?: boolean;
  canResize?: boolean;
}

// 명시적으로 export를 붙여줍니다.
export const Textarea = ({
  showCount,
  canResize = false,
  className,
  ...props
}: TextareaProps) => {
  return (
    <div className={styles.textarea_wrap}>
      <textarea
        className={cn(
          styles.textarea,
          { [styles.noResize]: !canResize },
          className,
        )}
        {...props}
      />
      {showCount && props.maxLength && (
        <div className={styles.countArea}>
          <span className={styles.current}>
            {String(props.value || "").length}
          </span>
          <span className={styles.max}> / {props.maxLength}자</span>
        </div>
      )}
    </div>
  );
};
