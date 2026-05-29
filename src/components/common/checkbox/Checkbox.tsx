import { useId, useState, type ReactNode } from "react";
import cn from "classnames";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps {
  label?: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  className,
}: CheckboxProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [internalChecked, setInternalChecked] = useState(false);
  const isChecked =
    checked !== undefined ? (checked ?? false) : internalChecked;

  const handleChange = (next: boolean) => {
    if (checked === undefined) setInternalChecked(next);
    onChange?.(next);
  };

  return (
    <div
      className={cn(styles.checkbox_wrap, className, {
        [styles.checked]: isChecked,
        [styles.disabled]: disabled,
      })}
    >
      <label htmlFor={inputId} className={styles.checkbox}>
        <input
          id={inputId}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          className={styles.input}
          onChange={(e) => handleChange(e.target.checked)}
        />
        <span className={styles.box} aria-hidden="true">
          <span className={styles.icon} />
        </span>
        {label && <span className={styles.label}>{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
