import React from "react";
import cn from "classnames";

type Item = {
  value: string;
  content: React.ReactNode;
  disabled?: boolean;
};

/* =======================
   SINGLE
======================= */
type SingleProps = {
  multiple?: false;
  items: Item[];
  value: string;
  onChange: (value: string) => void;
};

/* =======================
   MULTI
======================= */
type MultiProps = {
  multiple: true;
  items: Item[];
  value: string[];
  onChange: (value: string[]) => void;
};

type Props = SingleProps | MultiProps;

export default function SelectButton(props: Props) {
  const { items } = props;

  const isSelected = (v: string) =>
    props.multiple ? props.value.includes(v) : props.value === v;

  const handleClick = (item: Item) => {
    if (item.disabled) return;

    const v = item.value;

    if (props.multiple) {
      const current = props.value;

      props.onChange(
        current.includes(v) ? current.filter((x) => x !== v) : [...current, v],
      );
    } else {
      props.onChange(v);
    }
  };

  return (
    <div role="group" aria-multiselectable={props.multiple ?? false}>
      {items.map((item) => {
        const selected = isSelected(item.value);

        return (
          <button
            key={item.value}
            type="button"
            disabled={item.disabled}
            aria-pressed={selected}
            className={cn("btn", {
              active: selected,
              disabled: item.disabled,
            })}
            onClick={() => handleClick(item)}
          >
            {item.content}
          </button>
        );
      })}
    </div>
  );
}
