import React from "react";
import cn from "classnames";
import styles from "./Table.module.scss";

type CellAlign = "left" | "center" | "right";
type CellType = "td" | "th";

export interface TableColumn<T extends Record<string, React.ReactNode>> {
  key: keyof T;
  header: React.ReactNode;
  align?: CellAlign;
  width?: string | number;
  className?: string;

  // 추가
  cellType?: CellType;
  scope?: "row" | "col";

  render?: (value: T[keyof T], row: T, rowIndex: number) => React.ReactNode;
}

interface TableProps<T extends Record<string, React.ReactNode>> {
  columns: TableColumn<T>[];
  rows: T[];
  className?: string;
  rowKey?: (row: T, index: number) => string | number;
  emptyText?: React.ReactNode;

  // 추가
  showHeader?: boolean;
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
  showHeader = true,
}: TableProps<T>) {
  return (
    <div className={cn(styles.tableWrap, className)}>
      <table className={styles.table}>
        {showHeader && (
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
        )}

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

                  const CellTag = column.cellType === "th" ? "th" : "td";

                  return (
                    <CellTag
                      key={String(column.key)}
                      className={cn(
                        getAlignClass(column.align),
                        column.className,
                      )}
                      scope={
                        column.cellType === "th"
                          ? (column.scope ?? "row")
                          : undefined
                      }
                    >
                      {cellValue}
                    </CellTag>
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
