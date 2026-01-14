import { useState } from "react";
import cn from "classnames";
import styles from "./ToggleButton.module.scss";

interface ToggleButtonProps {
  isActive?: boolean;
  label?: string;
  switchMode?: boolean;
  onToggle?: (state: boolean) => void;
  className?: string;
}

export const ToggleButton = ({
  isActive = false,
  label,
  switchMode = false,
  onToggle,
  className,
}: ToggleButtonProps) => {
  const [toggled, setToggled] = useState(isActive);

  const handleClick = () => {
    const newState = !toggled;
    setToggled(newState);
    onToggle?.(newState);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        styles.btn,
        switchMode && styles.switch,
        { [styles.active]: toggled },
        className
      )}
    >
      {label}
    </button>
  );
};
