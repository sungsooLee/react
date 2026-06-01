import React, { ReactNode, useState } from "react";
import cn from "classnames";
import styles from "./Tab.module.scss";

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
};

interface TabGroupProps {
  items: TabItem[];
  activeId?: string;
  defaultActiveId?: string;
  variant?: "line" | "rounded";
  onChange?: (id: string) => void;
  className?: string;
}

export const TabGroup = ({
  items,
  activeId,
  defaultActiveId,
  variant = "line",
  onChange,
  className,
}: TabGroupProps) => {
  const firstId = items[0]?.id ?? "";
  const [internalId, setInternalId] = useState(defaultActiveId ?? firstId);

  const currentId = activeId ?? internalId;
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === currentId),
  );
  const activeItem = items[activeIndex] ?? items[0];

  const handleSelect = (id: string, disabled?: boolean) => {
    if (disabled) return;

    if (activeId === undefined) {
      setInternalId(id);
    }
    onChange?.(id);
  };

  if (items.length === 0) return null;

  return (
    <div className={cn(styles.tab_group, styles[`type_${variant}`], className)}>
      <div className={styles.tab_list} role="tablist">
        {items.map((item) => {
          const isActive = item.id === activeItem?.id;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.id}`}
              disabled={item.disabled}
              className={cn(styles.tab, {
                [styles.active]: isActive,
                [styles.disabled]: item.disabled,
              })}
              onClick={() => handleSelect(item.id, item.disabled)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        className={styles.tab_panel}
        role="tabpanel"
        id={`tabpanel-${activeItem.id}`}
        aria-labelledby={`tab-${activeItem.id}`}
      >
        {activeItem.content}
      </div>
    </div>
  );
};

export default TabGroup;
