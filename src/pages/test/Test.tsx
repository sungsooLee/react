import { useState, useCallback } from "react";
import { Button } from "@/components/common/button/Button";
import "./Test.scss";

export interface AlarmItemData {
  id: number | string;
  category: string;
  source: string;
  title: string;
  description: string;
  buttonText?: string;
}

const INITIAL_ALARM_LIST: AlarmItemData[] = [
  {
    id: 1,
    category: "작업알림1 (오래됨)",
    source: "WINI",
    title: "운전자금 적정 금리기준 변동 1",
    description: "설명 내용입니다.",
    buttonText: "이동",
  },
  {
    id: 2,
    category: "작업알림2",
    source: "WINI",
    title: "운전자금 적정 금리기준 변동 2",
    description: "설명 내용입니다.",
    buttonText: "이동",
  },
  {
    id: 3,
    category: "작업알림3",
    source: "WINI",
    title: "운전자금 적정 금리기준 변동 3",
    description: "설명 내용입니다.",
    buttonText: "이동",
  },
  {
    id: 4,
    category: "작업알림4 (NEW 최신)",
    source: "WINI",
    title: "운전자금 적정 금리기준 변동 4",
    description: "설명 내용입니다.",
    buttonText: "이동",
  },
];

const STACK_OFFSET = 16;

const Test = () => {
  const [alarmList, setAlarmList] =
    useState<AlarmItemData[]>(INITIAL_ALARM_LIST);
  const [isOpen, setIsOpen] = useState(true);

  const handleDelete = useCallback((id: number | string) => {
    setAlarmList((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const isStacked = alarmList.length >= 4;

  return (
    <div className="floating_hub_wrap">
      {isOpen && (
        <div className={`alarm_item_wrap ${isStacked ? "stacked" : ""}`}>
          {alarmList.map((item, index) => (
            <div
              key={item.id}
              className="alarm_item"
              style={
                isStacked
                  ? { zIndex: index + 1, bottom: index * STACK_OFFSET }
                  : undefined
              }
            >
              <div className="head">
                <strong className="title">
                  <span className="title-item">{item.category}</span>
                  <span className="title-item">{item.source}</span>
                </strong>
                <Button
                  className="btn_close"
                  onClick={() => handleDelete(item.id)}
                >
                  X
                </Button>
              </div>

              <div className="container">
                <strong className="title_cont">{item.title}</strong>
                <p className="guide_text">{item.description}</p>
                <Button className="btn_link">
                  {item.buttonText ?? "업무 시스템으로 이동"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Button onClick={handleToggle}>{isOpen ? "닫기" : "제어버튼"}</Button>
    </div>
  );
};

export default Test;
