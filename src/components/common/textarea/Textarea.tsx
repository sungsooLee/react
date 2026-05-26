// @/components/common/textarea/Textarea.tsx
import React from "react";
import cn from "classnames";
import styles from "./Textarea.module.scss"; // 또는 해당 scss 경로

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  showCount?: boolean;
  canResize?: boolean;
  placeholder?: string;
  id?: string;
  name?: string;
  guideText?: string;
  error?: boolean;
  errorText?: string;
}

// 명시적으로 export를 붙여줍니다.
export const Textarea = ({
  showCount,
  canResize = false,
  placeholder = "내용을 입력하세요",
  id,
  name,
  guideText,
  error = false,
  errorText,
  className,
  ...props
}: TextareaProps) => {
  return (
    <div className={styles.textarea_wrap}>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={cn(
          styles.textarea,
          { [styles.no_resize]: !canResize, [styles.is_error]: error },
          className,
        )}
        {...props}
      />
      {(guideText || errorText || (showCount && props.maxLength)) && (
        <div className={styles.guide_area}>
          {guideText && <p className={styles.guide_text}>{guideText}</p>}
          {errorText && <p className={styles.error_text}>{errorText}</p>}

          {showCount && props.maxLength && (
            <>
              <p className={styles.count_view}>
                {String(props.value || "").length}
                <span className={styles.max_view}>/ {props.maxLength}자</span>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};
