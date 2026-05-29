import { useState } from "react";
import cn from "classnames";
import Radio from "./Radio";
import styles from "./RadioGroup.module.scss";

export type RadioOption = {
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
};

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  className?: string;
}

const getInitialValue = (options: RadioOption[]) =>
  options.find((option) => option.checked)?.value ?? options[0]?.value ?? "";

const RadioGroup = ({ name, options, className }: RadioGroupProps) => {
  const [value, setValue] = useState(() => getInitialValue(options));

  return (
    <div className={cn(styles.radio_group, className)}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={setValue}
          disabled={option.disabled}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
