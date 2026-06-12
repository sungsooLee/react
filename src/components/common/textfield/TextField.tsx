import React, { useRef, useState } from "react";
import cn from "classnames";
import { Icon } from "@/components/icons/Icon";
import { Button } from "@/components/common/button/Button";
import "./TextField.scss";

export type TextFieldType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel";

export type TextFieldSize = "small" | "medium";
export type TextFieldVariant = "default" | "dark";

interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  type?: TextFieldType;
  size?: TextFieldSize;
  variant?: TextFieldVariant;
  guideText?: string;
  error?: boolean;
  errorText?: string;
  onClear?: () => void;
}

export const TextField = ({
  type = "text",
  size = "medium",
  variant = "default",
  guideText,
  error = false,
  errorText,
  onClear,
  className,
  value,
  defaultValue,
  disabled = false,
  onChange,
  ...props
}: TextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(
    String(defaultValue ?? ""),
  );

  const currentValue = isControlled ? String(value ?? "") : uncontrolledValue;
  const hasValue = currentValue.length > 0;
  const hasMessage = guideText || errorText;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setUncontrolledValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleClear = () => {
    if (onClear) {
      onClear();
    } else if (onChange) {
      onChange({
        target: { value: "" },
        currentTarget: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }

    if (!isControlled) {
      setUncontrolledValue("");
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className={cn("textfield_wrap", `size_${size}`, `variant_${variant}`)}>
      <div className="input_box">
        <input
          ref={inputRef}
          type={type}
          value={isControlled ? value : undefined}
          defaultValue={isControlled ? undefined : defaultValue}
          className={cn("input", { is_error: error }, className)}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />

        {hasValue && !disabled && (
          <Button
            type="button"
            variant="normal"
            className="clear_btn"
            onClick={handleClear}
            aria-label="입력값 지우기"
          >
            <Icon
              name="icon_ui_text_clear"
              size="xs"
              fillColor="none"
              strokeColor="none"
            />
          </Button>
        )}
      </div>

      {hasMessage && (
        <div className="message_area">
          {errorText ? (
            <p className="error_text">{errorText}</p>
          ) : (
            guideText && <p className="guide_text">{guideText}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TextField;
