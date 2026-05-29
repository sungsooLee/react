import { useState } from "react";
import cn from "classnames";
import Checkbox from "./Checkbox";
import styles from "./CheckboxGroup.module.scss";

export type CheckboxOption = {
  key: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
};

export interface CheckboxGroupProps {
  options: CheckboxOption[];
  className?: string;
}

const getInitialValues = (options: CheckboxOption[]) =>
  Object.fromEntries(
    options.map((option) => [option.key, option.checked ?? false]),
  );

const CheckboxGroup = ({ options, className }: CheckboxGroupProps) => {
  const [values, setValues] = useState(() => getInitialValues(options));

  return (
    <div className={cn(styles.checkbox_group, className)}>
      {options.map(({ key, label, disabled }) => (
        <Checkbox
          key={key}
          label={label}
          checked={values[key]}
          onChange={(checked) =>
            setValues((prev) => ({ ...prev, [key]: checked }))
          }
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
