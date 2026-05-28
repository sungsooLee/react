import React, { useState, useRef } from "react";
import cn from "classnames";
import styles from "./Accordion.module.scss";
import { Icon } from "../../icons/Icon";

export interface AccordionItem {
  id?: string;
  title: React.ReactNode;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  multiOpen?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  multiOpen = true,
  className,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    items
      .map((item, index) => (item.defaultOpen ? index : -1))
      .filter((index) => index !== -1),
  );

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    if (multiOpen) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index], 
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn(styles.accordion, className)}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div
            key={item.id ?? index}
            className={cn(styles.accordion_item)}
          >
            <button
              type="button"
              className={styles.accordion_header}
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
            >
              <span>{item.title}</span>

              <span className={cn(styles.icon, isOpen && styles.active)}>
                <Icon name="arrow_down" size="sm" />
              </span>
            </button>

            <div
              ref={(el) => {
                refs.current[index] = el;
              }}
              className={cn(styles.accordion_content, {
                [styles.open]: isOpen,
              })}
              style={{
                height: isOpen
                  ? `${refs.current[index]?.scrollHeight || 0}px`
                  : "0px",
              }}
            >
              <div className={styles.inner}>{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
