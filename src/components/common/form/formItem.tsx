import React, { InputHTMLAttributes, ReactNode, useId } from "react";

import cn from "classnames";
import styles from "./Form.module.scss";

export type FormItemType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "numeric";

interface RenderPropsArgs {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

interface FormItemProps {
  label?: ReactNode;
  children: (args: RenderPropsArgs) => ReactNode;
  type?: FormItemType;
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
  isRequired = false,
  placeholder = "입력해주세요",
  value,
  guideText,
  errorText,
  successText,
  className,
}: FormItemProps) => {
  const generatedId = useId();

  /**
   * numeric 대응
   */
  const resolvedType = type === "numeric" ? "text" : type;

  const resolvedInputMode = type === "numeric" ? "numeric" : undefined;

  return (
    <div className={cn(styles.formItem, className)}>
      {/* Label */}
      {label && (
        <div className={styles.labelPart}>
          <label htmlFor={generatedId}>
            {label}

            {isRequired && <em className={styles.required}>*</em>}
          </label>
        </div>
      )}

      {/* Field */}
      <div className={styles.fieldPart}>
        {children({
          inputProps: {
            id: generatedId,
            type: resolvedType,
            inputMode: resolvedInputMode,
            placeholder,
            defaultValue: value,
          },
        })}
      </div>

      {/* Message */}
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
