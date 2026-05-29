import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { Icon } from "../../icons/Icon";
import styles from "./Dropdown.module.scss";

export type DropdownItem = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type DropdownSize = "large" | "small" | "text";

interface DropdownProps {
  items: DropdownItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  size?: DropdownSize;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  className?: string;
}

export const Dropdown = ({
  items,
  value,
  defaultValue,
  onChange,
  placeholder = "선택해주세요",
  size = "large",
  disabled = false,
  error = false,
  errorText,
  className,
}: DropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const currentValue = value ?? internalValue;
  const selectedItem = items.find((item) => item.value === currentValue);
  const isTextSize = size === "text";
  const isTextFilled = isTextSize && !!selectedItem;

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item: DropdownItem) => {
    if (item.disabled) return;

    if (value === undefined) {
      setInternalValue(item.value);
    }

    onChange?.(item.value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  if (items.length === 0) return null;

  return (
    <div
      className={cn(styles.dropdown_wrap, className, {
        [styles.size_large]: size === "large",
        [styles.size_small]: size === "small",
        [styles.size_text]: isTextSize,
        [styles.text_filled]: isTextFilled,
        [styles.selected]: !!selectedItem,
        [styles.open]: isOpen,
        [styles.error]: error,
        [styles.disabled]: disabled,
      })}
    >
      <div ref={containerRef} className={styles.dropdown}>
        <button
          type="button"
          className={styles.trigger}
          onClick={handleToggle}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-invalid={error}
        >
          <span
            className={cn(styles.label, {
              [styles.placeholder]: !selectedItem,
            })}
          >
            {selectedItem?.label ?? placeholder}
          </span>
          <Icon
            name="arrow_down"
            size="sm"
            className={cn(styles.icon, { [styles.active]: isOpen })}
          />
        </button>

        {isOpen && (
          <ul className={styles.menu} role="listbox">
            {items.map((item) => {
              const isSelected = item.value === currentValue;

              return (
                <li key={item.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    disabled={item.disabled}
                    className={cn(styles.option, {
                      [styles.selected]: isSelected,
                      [styles.optionDisabled]: item.disabled,
                    })}
                    onClick={() => handleSelect(item)}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {error && errorText && (
        <p className={styles.error_text}>{errorText}</p>
      )}
    </div>
  );
};

export default Dropdown;
