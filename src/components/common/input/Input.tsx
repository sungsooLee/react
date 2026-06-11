import { Icon } from "@/components/icons/Icon";
import { Button } from "../button/Button";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  message?: string;
  onClear?: () => void;
}

export default function Input({
  value,
  error,
  message,
  onClear,
  ...props
}: InputProps) {
  return (
    <div className={styles.input_wrap}>
      <div className={styles.input_box}>
        <input
          value={value}
          className={`${styles.input} ${error ? styles.error : ""}`}
          {...props}
        />

        {value && (
          <Button
            variant="normal"
            className={styles.clear_btn}
            onClick={onClear}
          >
            <Icon
              name="icon_ui_text_clear"
              size="xs"
              fillColor="none"
              strokeColor="none"
            />
          </Button>
        )}
      </div>

      {message && (
        <p className={error ? styles.error_text : styles.message}>{message}</p>
      )}
    </div>
  );
}
