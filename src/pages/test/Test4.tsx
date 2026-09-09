import { useState } from "react";
import { StackedBarChart, ChartItem, ChartData } from "./StackedBarChart";
import { Icon } from "@/components/icons/Icon";
import LottieAnimation from "@/components/common/lottie/Lottie";
import "./Test.scss";
import loading from "../../assets/lottie/loading.json";

const CHART_ITEMS: ChartItem[] = [
  { key: "itemA", label: "RM/기업여신", color: "#1572ED" },
  { key: "itemB", label: "WM", color: "#6AD5D5" },
  { key: "itemC", label: "내부통제", color: "#95BAF6" },
  { key: "itemD", label: "고객상담", color: "#73D1F6" },
  { key: "itemE", label: "업무자동화", color: "#BE69EC" },
  { key: "itemF", label: "기타", color: "#DEE2E6" },
];

const CHART_DATA: ChartData[] = [
  {
    date: "26-12-12",
    values: {
      itemA: 50,
      itemB: 40,
      itemC: 30,
      itemD: 20,
      itemE: 10,
      itemF: 15,
    },
  },
  {
    date: "26-12-13",
    values: {
      itemA: 30,
      itemB: 50,
      itemC: 40,
      itemD: 30,
      itemE: 20,
      itemF: 25,
    },
  },
  {
    date: "26-12-14",
    values: {
      itemA: 70,
      itemB: 40,
      itemC: 50,
      itemD: 20,
      itemE: 30,
      itemF: 10,
    },
  },
  {
    date: "26-12-15",
    values: {
      itemA: 40,
      itemB: 30,
      itemC: 40,
      itemD: 50,
      itemE: 20,
      itemF: 35,
    },
  },
];

type AlignMode = "vertical" | "horizontal";

interface ListItem {
  id: number;
  title: string;
  description: string;
}

const MOCK_ITEMS: ListItem[] = [
  { id: 1, title: "첫 번째 아이템", description: "상세 설명입니다." },
  { id: 2, title: "두 번째 아이템", description: "상세 설명입니다." },
  { id: 3, title: "세 번째 아이템", description: "상세 설명입니다." },
  { id: 4, title: "네 번째 아이템", description: "상세 설명입니다." },
];

export const Test4 = () => {
  const [align, setAlign] = useState<AlignMode>("horizontal");

  const handleAlignChange = (mode: AlignMode) => {
    setAlign(mode);
  };

  return (
    <div className="page_container">
      <section className="chart_section">
        <StackedBarChart
          title="카테고리별 Agent 사용 추이"
          items={CHART_ITEMS}
          data={CHART_DATA}
          maxValue={250}
          yStep={50}
          showTooltip={true}
        />
      </section>
      <section>
        <div
          className="align_btn_wrap"
          role="group"
          aria-label="리스트 정렬 방식 선택"
        >
          <button
            type="button"
            className={align === "horizontal" ? "active" : ""}
            onClick={() => handleAlignChange("horizontal")}
            aria-label="가로 정렬"
            aria-pressed={align === "horizontal"}
          >
            <Icon
              name="icon_ui_row"
              size="xs"
              fillColor="none"
              strokeColor="none"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            className={align === "vertical" ? "active" : ""}
            onClick={() => handleAlignChange("vertical")}
            aria-label="세로 정렬"
            aria-pressed={align === "vertical"}
          >
            <Icon
              name="icon_ui_column"
              size="xs"
              fillColor="none"
              strokeColor="none"
              aria-hidden="true"
            />
          </button>
        </div>

        <ul className={`list list_${align}`}>
          {MOCK_ITEMS.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <LottieAnimation animationData={loading} width={240} height={240} />
    </div>
  );
};

export default Test4;
