import React, { ReactNode, useId } from "react";
import cn from "classnames";
import styles from "./form.module.scss";

// FormItem이 자식(Render Props)에게 넘겨줄 인자들의 타입 정의
interface RenderPropsArgs {
  id: string;
  placeholder: string;
  type: string;
  value?: string;
}

interface FormItemProps {
  label?: ReactNode;
  // children은 위에서 정의한 RenderPropsArgs를 인자로 받는 함수여야 함
  children: (args: RenderPropsArgs) => ReactNode;
  type?: string;
  isRequired?: boolean;
  placeholder?: string;
  value?: string;
  guideText?: string;
  errorText?: string;
  successText?: string;
  className?: string;
}

export const FormItem = ({
  label,
  children,
  type = "text",
  isRequired,
  placeholder = "입력해주세요",
  value,
  guideText,
  errorText,
  successText,
  className,
}: FormItemProps) => {
  const generatedId = useId();

  return (
    <div className={cn(styles.formItem, className)}>
      {/* 1. Label 영역: useId로 생성된 ID를 htmlFor에 연결 */}
      {label && (
        <div className={styles.labelPart}>
          <label htmlFor={generatedId}>
            {label} {isRequired && <em className={styles.required}>*</em>}
          </label>
        </div>
      )}

      {/* 2. Field 영역: Render Props 패턴으로 id, type, placeholder, value 주입 */}
      <div className={styles.fieldPart}>
        {children({
          id: generatedId,
          placeholder: placeholder,
          type: type,
          value: value,
        })}
      </div>

      {/* 3. Message 영역: 에러 -> 성공 -> 가이드 순으로 우선순위 노출 */}
      {(errorText || successText || guideText) && (
        <div className={styles.message_area}>
          {errorText ? (
            <p className={styles.error}>{errorText}</p>
          ) : successText ? (
            <p className={styles.success}>{successText}</p>
          ) : (
            <p className={styles.guide}>{guideText}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FormItem;
