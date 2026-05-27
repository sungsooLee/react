import React from "react";
import cn from "classnames";
import styles from "./Table.module.scss";

type CellAlign = "left" | "center" | "right";

export interface TableColumn<T extends Record<string, React.ReactNode>> {
  key: keyof T;
  header: React.ReactNode;
  align?: CellAlign;
  width?: string | number;
  className?: string;
  render?: (value: T[keyof T], row: T, rowIndex: number) => React.ReactNode;
}

interface TableProps<T extends Record<string, React.ReactNode>> {
  columns: TableColumn<T>[];
  rows: T[];
  className?: string;
  rowKey?: (row: T, index: number) => string | number;
  emptyText?: React.ReactNode;
}

const getAlignClass = (align?: CellAlign) => {
  if (align === "center") return styles.center;
  if (align === "right") return styles.right;
  return styles.left;
};

export default function Table<T extends Record<string, React.ReactNode>>({
  columns,
  rows,
  className,
  rowKey,
  emptyText = "데이터가 없습니다.",
}: TableProps<T>) {
  return (
    <div className={cn(styles.tableWrap, className)}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(getAlignClass(column.align), column.className)}
                style={column.width ? { width: column.width } : undefined}
                scope="col"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className={styles.empty}>
                {emptyText}
              </td>
            </tr>
          ) : (
            rows.map((row, rowIndex) => (
              <tr key={String(rowKey?.(row, rowIndex) ?? rowIndex)}>
                {columns.map((column) => {
                  const rawValue = row[column.key];
                  const cellValue = column.render
                    ? column.render(rawValue, row, rowIndex)
                    : rawValue;

                  return (
                    <td
                      key={String(column.key)}
                      className={cn(
                        getAlignClass(column.align),
                        column.className,
                      )}
                    >
                      {cellValue}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
