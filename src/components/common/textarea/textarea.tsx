// @/components/common/textarea/textarea.tsx (또는 FormTextarea.tsx)
import React from "react";
import cn from "classnames";
import styles from "./Textarea.module.scss"; // 또는 해당 scss 경로

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  showCount?: boolean;
  canResize?: boolean;
  placeholder?: string;
  guideText?: string;
}

// 명시적으로 export를 붙여줍니다.
export const Textarea = ({
  showCount,
  canResize = false,
  placeholder = "내용을 입력하세요",
  guideText,
  className,
  ...props
}: TextareaProps) => {
  return (
    <div className={styles.textarea_wrap}>
      <textarea
        placeholder={placeholder}
        className={cn(
          styles.textarea,
          { [styles.noResize]: !canResize },
          className,
        )}
        {...props}
      />
      {(guideText || (showCount && props.maxLength)) && (
        <div className={styles.guide_area}>
          {guideText && <p>{guideText}</p>}

          {showCount && props.maxLength && (
            <>
              <span className={styles.count_view}>
                {String(props.value || "").length}
              </span>

              <span className={styles.max}>/ {props.maxLength}자</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};
