import React, { ReactNode } from "react";
import cn from "classnames";
import styles from "./form.module.scss";

interface FormGroupProps {
  children: ReactNode;
  isRow?: boolean;
  className?: string;
}

export const FormGroup = ({ children, isRow, className }: FormGroupProps) => {
  return (
    <div className={cn(styles.formGroup, { [styles.isRow]: isRow }, className)}>
      {children}
    </div>
  );
};
