import { StackedBarChart, ChartItem, ChartData } from "./StackedBarChart";

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

export const Test4 = () => {
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
    </div>
  );
};

export default Test4;
