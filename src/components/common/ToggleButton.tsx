import { useState } from "react";
import cn from "classnames";
import styles from "./ToggleButton.module.scss";

interface ToggleButtonProps {
  initial?: boolean;
  label?: string;
  onToggle?: (state: boolean) => void;
  className?: string;
}

export const ToggleButton = ({
  initial = false,
  label,
  onToggle,
  className,
}: ToggleButtonProps) => {
  const [toggled, setToggled] = useState(initial);

  const handleClick = () => {
    const newState = !toggled;
    setToggled(newState);
    onToggle?.(newState);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(styles.btn, { [styles.active]: toggled }, className)}
    >
      {label}
    </button>
  );
};
