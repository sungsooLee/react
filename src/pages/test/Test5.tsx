import DonutChart, {
  type DonutChartDataItem,
} from "@/components/common/donutchart";
import { useState } from "react";

const data: DonutChartDataItem[] = [
  {
    name: "미국 반도체",
    percent: 40,
    color: "#4D7ADD",
  },
  {
    name: "대만한국",
    percent: 30,
    color: "#78B3FF",
  },
  {
    name: "일본 · 유럽 장비",
    percent: 15,
    color: "#CB77DA",
  },
  {
    name: "AI 인프라 · SW",
    percent: 10,
    color: "#63D0AE",
  },
  {
    name: "현금성 자산",
    percent: 5,
    color: "#DE7676",
  },
];

const DonutChartExample = () => {
  const [inputValue, setInputValue] = useState<number>(0);

  // 버튼 클릭 시 1 증가
  const handleValueChange = () => {
    setInputValue((prev) => prev + 1);
  };

  // input 직접 입력 시 상태 업데이트
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };
  return (
    <>
      <DonutChart data={data} size={240} lineWidth={48} duration={1000} />
      <div>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <button type="button" onClick={handleValueChange}>
          증가
        </button>
      </div>
    </>
  );
};

export default DonutChartExample;
