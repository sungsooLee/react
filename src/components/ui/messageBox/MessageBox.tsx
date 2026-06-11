import cn from "classnames";
import styles from "./MessageBox.module.scss";
import { Icon } from "@/components/icons/Icon";

interface MessageBoxProps {
  variant?: "result" | "summary";
  title?: string;
  contents?: React.ReactNode;

  className?: string;
}

export const MessageBox = ({
  variant = "result",
  title,
  contents,
  className,
}: MessageBoxProps) => {
  return (
    <div className={cn(styles.message_box, styles[variant], className)}>
      {title && (
        <strong className={styles.tit}>
          {variant === "result" ? (
            <Icon
              name="icon_ai_result"
              size="md"
              fillColor="none"
              strokeColor="none"
            />
          ) : (
            <Icon
              size="md"
              name="icon_ai_summary"
              fillColor="none"
              strokeColor="none"
            />
          )}
          {title}
        </strong>
      )}
      {contents && <div className={styles.contents}>{contents}</div>}
    </div>
  );
};
