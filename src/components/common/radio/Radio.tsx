import { useId, useState, type ChangeEvent, type ReactNode } from "react";
import cn from "classnames";
import styles from "./Radio.module.scss";

export interface RadioProps {
  label?: ReactNode;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const Radio = ({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  id,
  className,
}: RadioProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked) return;

    if (!isControlled) setInternalChecked(true);
    onChange?.(value);
  };

  return (
    <div
      className={cn(styles.radio_wrap, className, {
        [styles.checked]: isChecked,
        [styles.disabled]: disabled,
      })}
    >
      <label htmlFor={inputId} className={styles.radio}>
        <input
          id={inputId}
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          className={styles.input}
          onChange={handleChange}
        />
        <span className={styles.box} aria-hidden="true">
          <span className={styles.icon} />
        </span>
        {label && <span className={styles.label}>{label}</span>}
      </label>
    </div>
  );
};

export default Radio;
