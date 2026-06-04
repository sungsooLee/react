import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import cn from "classnames";
import styles from "./SearchBox.module.scss";
import { Button } from "../../common/button/Button";
import { Icon } from "../../icons/Icon";

interface SearchBoxProps {
  className?: string;
  placeholder?: string;
  onSubmit?: (value: string) => void;
}

export const SearchBox = ({
  className,
  placeholder = "무엇이든 질문해보세요.",
  onSubmit,
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
    </form>
  );
};
