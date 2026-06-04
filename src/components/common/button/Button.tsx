import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "text"
    | "underline"
    | "normal"
    | "line"
    | "line_gray";
  size?: "small" | "medium" | "large";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        styles.btn,
        styles[variant],
        styles[size],
        {
          disabled,
        },
        className,
      )}
    >
      {children}
    </button>
  );
};
