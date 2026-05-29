import cn from "classnames";
import styles from "./ContentsWrapper.module.scss";

interface ContentsWrapperProps {
  layout?: "full" | "column" | "center";
  columns?: 2 | 3 | 4;
  className?: string;
  children: React.ReactNode;
}

export const ContentsWrapper = ({
  layout = "full",
  columns,
  className,
  children,
}: ContentsWrapperProps) => {
  return (
    <div
      className={cn(
        styles.contents_wrapper,
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
