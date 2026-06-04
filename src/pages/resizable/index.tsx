import { useRef, useState } from "react";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
  type ImperativePanelGroupHandle,
} from "react-resizable-panels";
import Table, { TableColumn } from "@/components/common/table/Table";
import cn from "classnames";
import styles from "./index.module.scss";

type Row = {
  name: string;
  division: string;
  status: string;
  amount: number;
  abc?: number;
};

const DEFAULT_LAYOUT = [33, 34, 33];

const columns: TableColumn<Row>[] = [
  { key: "name", header: "이름", align: "left" },
  { key: "division", header: "부서", align: "center", width: 120 },
  { key: "status", header: "상태", align: "center", width: 120 },
  {
    key: "amount",
    header: "금액",
    align: "right",
    render: (value) => `${Number(value).toLocaleString()}원`,
  },
  { key: "abc", header: "비고", align: "center" },
];

const rowsPanel1: Row[] = [
  { name: "정민혁", division: "퍼블", status: "완료", amount: 120000, abc: 1 },
  { name: "이성수", division: "퍼블", status: "완료", amount: 98000 },
  { name: "???", division: "개발", status: "대기", amount: 45000 },
];

const rowsPanel2: Row[] = [
  { name: "정민혁", division: "기획", status: "진행", amount: 87000 },
  { name: "정민혁", division: "디자인", status: "완료", amount: 156000, abc: 2 },
  { name: "정민혁", division: "개발", status: "대기", amount: 62000 },
  { name: "정민혁", division: "QA", status: "진행", amount: 73000 },
  { name: "정민혁", division: "개발", status: "완료", amount: 110000 },
  { name: "정민혁", division: "기획", status: "진행", amount: 87000 },
  { name: "정민혁", division: "디자인", status: "완료", amount: 156000, abc: 2 },
  { name: "정민혁", division: "개발", status: "대기", amount: 62000 },
  { name: "정민혁", division: "QA", status: "진행", amount: 73000 },
  { name: "정민혁", division: "개발", status: "완료", amount: 110000 },
];

const rowsPanel3: Row[] = [
  { name: "정민혁", division: "마케팅", status: "완료", amount: 54000 },
  { name: "정민혁", division: "영업", status: "진행", amount: 89000, abc: 3 },
];

const ResizablePage = () => {
  const groupRef = useRef<ImperativePanelGroupHandle>(null);
  const [fullIndex, setFullIndex] = useState<number | null>(null);

  const handleFull = (index: number) => {
    if (fullIndex === index) {
      groupRef.current?.setLayout(DEFAULT_LAYOUT);
      setFullIndex(null);
      return;
    }

    const layout = [0, 0, 0];
    layout[index] = 100;
    groupRef.current?.setLayout(layout);
    setFullIndex(index);
  };

  const isFullMode = fullIndex !== null;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Resizable Panels</h1>
      <p className={styles.desc}>
        react-resizable-panels로 영역 크기를 드래그해서 조절할 수 있습니다.
        풀 버튼을 누르면 해당 패널만 전체로 펼쳐집니다.
      </p>

      <div className={styles.demo_wrap}>
        <PanelGroup
          ref={groupRef}
          direction="horizontal"
          className={styles.panel_group}
        >
          <Panel
            id="panel-1"
            defaultSize={DEFAULT_LAYOUT[0]}
            minSize={isFullMode ? 0 : 20}
            collapsible
            className={styles.panel}
          >
            <div className={styles.panel_inner}>
              <Table columns={columns} rows={rowsPanel1} />
              <button
                type="button"
                className={cn(styles.full_btn, {
                  [styles.is_full]: fullIndex === 0,
                })}
                onClick={() => handleFull(0)}
              >
                {fullIndex === 0 ? "복원" : "풀"}
              </button>
            </div>
          </Panel>

          {!isFullMode && (
            <PanelResizeHandle className={styles.resize_handle} />
          )}

          <Panel
            id="panel-2"
            defaultSize={DEFAULT_LAYOUT[1]}
            minSize={isFullMode ? 0 : 20}
            collapsible
            className={styles.panel}
          >
            <div className={styles.panel_inner}>
              <Table columns={columns} rows={rowsPanel2} />
              <button
                type="button"
                className={cn(styles.full_btn, {
                  [styles.is_full]: fullIndex === 1,
                })}
                onClick={() => handleFull(1)}
              >
                {fullIndex === 1 ? "복원" : "풀"}
              </button>
            </div>
          </Panel>

          {!isFullMode && (
            <PanelResizeHandle className={styles.resize_handle} />
          )}

          <Panel
            id="panel-3"
            defaultSize={DEFAULT_LAYOUT[2]}
            minSize={isFullMode ? 0 : 20}
            collapsible
            className={styles.panel}
          >
            <div className={styles.panel_inner}>
              <Table columns={columns} rows={rowsPanel3} />
              <button
                type="button"
                className={cn(styles.full_btn, {
                  [styles.is_full]: fullIndex === 2,
                })}
                onClick={() => handleFull(2)}
              >
                {fullIndex === 2 ? "복원" : "풀"}
              </button>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default ResizablePage;
