import { KeyboardEvent, useState } from "react";
import "./Test.scss";

interface RowData {
  id: number;
  name: string;
  age: number;
  job: string;
}

const data1: RowData[] = [
  { id: 1, name: "홍길동", age: 30, job: "개발자" },
  { id: 2, name: "김철수", age: 28, job: "퍼블리셔" },
];

const data2: RowData[] = [
  { id: 3, name: "이영희", age: 35, job: "기획자" },
  { id: 4, name: "박민수", age: 26, job: "디자이너" },
];

const tables = [
  {
    data: data1,
    caption: "사용자 목록",
  },
  {
    data: data2,
    caption: "관리자 목록",
  },
];

export default function Table() {
  const [checkedRows, setCheckedRows] = useState<Set<number>[]>([
    new Set(),
    new Set(),
  ]);

  const [activeRows, setActiveRows] = useState<(number | null)[]>([null, null]);

  const handleAllCheck = (index: number, data: RowData[], checked: boolean) => {
    setCheckedRows((prev) => {
      const next = [...prev];

      if (checked) {
        next[index] = new Set(data.map(({ id }) => id));
      } else {
        next[index] = new Set();
      }

      return next;
    });
  };

  const handleCheck = (index: number, id: number) => {
    setCheckedRows((prev) => {
      const next = [...prev];
      const current = new Set(next[index]);

      if (current.has(id)) {
        current.delete(id);
      } else {
        current.add(id);
      }

      next[index] = current;

      return next;
    });
  };

  const handleRowClick = (index: number, id: number) => {
    setActiveRows((prev) => {
      const next = [...prev];
      next[index] = id;
      return next;
    });
  };

  const handleRowKeyDown = (
    e: KeyboardEvent<HTMLTableRowElement>,
    index: number,
    id: number,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleRowClick(index, id);
    }
  };

  return (
    <>
      <div className="button-area">
        <button
          type="button"
          onClick={() => {
            tables.forEach((table, index) => {
              handleAllCheck(index, table.data, true);
            });
          }}
        >
          전체 체크
        </button>

        <button
          type="button"
          onClick={() => {
            tables.forEach((table, index) => {
              handleAllCheck(index, table.data, false);
            });
          }}
        >
          전체 취소
        </button>
      </div>

      {tables.map((table, index) => (
        <table className="table" key={table.caption}>
          <caption>{table.caption}</caption>

          <colgroup>
            <col width="60px" />
            <col />
            <col width="100px" />
            <col />
          </colgroup>

          <thead>
            <tr>
              <th scope="col">
                <input
                  type="checkbox"
                  aria-label={`${table.caption} 전체 선택`}
                  checked={checkedRows[index].size === table.data.length}
                  onChange={(e) =>
                    handleAllCheck(index, table.data, e.target.checked)
                  }
                />
              </th>

              <th scope="col">이름</th>
              <th scope="col">나이</th>
              <th scope="col">직업</th>
            </tr>
          </thead>

          <tbody>
            {table.data.map((item) => (
              <tr
                key={item.id}
                tabIndex={0}
                className={activeRows[index] === item.id ? "checked" : ""}
                onClick={(e) => {
                  const target = e.target as HTMLElement;

                  if (target.closest("[data-clickable='false']")) {
                    return;
                  }

                  handleRowClick(index, item.id);
                }}
                onKeyDown={(e) => handleRowKeyDown(e, index, item.id)}
              >
                <td data-clickable="false">
                  <input
                    type="checkbox"
                    aria-label={`${item.name} 선택`}
                    checked={checkedRows[index].has(item.id)}
                    onChange={() => handleCheck(index, item.id)}
                  />
                </td>

                <td>{item.name}</td>

                <td>{item.age}</td>

                <td data-clickable="false">
                  <button type="button">{item.job}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}

      <div>체크된 항목 : {checkedRows[0].size + checkedRows[1].size}개</div>
    </>
  );
}
