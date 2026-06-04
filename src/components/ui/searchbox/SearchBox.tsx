import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import cn from "classnames";
import styles from "./SearchBox.module.scss";
import { Button } from "../../common/button/Button";
import { Icon } from "../../icons/Icon";

interface ChipsItem {
  item: string;
}

interface SearchBoxProps {
  className?: string;
  placeholder?: string;
  onSubmit?: (value: string) => void;
  chipsItems?: ChipsItem[];
}

export const SearchBox = ({
  className,
  placeholder,
  onSubmit,
  chipsItems,
}: SearchBoxProps) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const resizeTextarea = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    resizeTextarea(e.target);
  };

  const handleClear = () => {
    setValue("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.focus();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const question = value.trim();
    if (!question) return;
    onSubmit?.(question);
    setValue("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  return (
    <form className={cn(styles.search_box, className)} onSubmit={handleSubmit}>
      <div className={styles.search_inner}>
        <div className={styles.search_area}>
          <textarea
            ref={textareaRef}
            value={value}
            rows={1}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </div>

        <div className={styles.btn_area}>
          {value && (
            <Button
              className={styles.btn_clear}
              variant="normal"
              type="button"
              onClick={handleClear}
              aria-label="입력 내용 삭제"
            >
              <Icon name="ic_btn_clear" size="md" strokeColor="none" />
            </Button>
          )}

          <Button
            className={styles.btn_submit}
            variant="normal"
            type="submit"
            size="large"
            disabled={!value.trim()}
            aria-label="질문 전송"
          >
            <Icon name="ic_btn_submit" size="xl" strokeColor="none" />
          </Button>
        </div>
      </div>

      {chipsItems && chipsItems.length > 0 && (
        <div className={styles.chips_area}>
          {chipsItems.map((item, index) => (
            <Button key={index} variant="line_gray" size="small" type="button">
              {item.item}
            </Button>
          ))}
        </div>
      )}
    </form>
  );
};
