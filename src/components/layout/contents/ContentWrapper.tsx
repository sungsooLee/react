import cn from "classnames";
import styles from "./ContentWrapper.module.scss";

interface ContentWrapperProps {
  layout?: "full" | "column" | "center";
  columns?: 2 | 3 | 4;
  className?: string;
  children: React.ReactNode;
}

export const ContentWrapper = ({
  layout = "full",
  columns,
  className,
  children,
}: ContentWrapperProps) => {
  return (
    <div
      className={cn(
        styles.content_wrapper,
        styles[layout],
        {
          [styles[`col_${columns}`]]: layout === "column",
        },
        className,
      )}
    >
      {children}
    </div>
  );
};
