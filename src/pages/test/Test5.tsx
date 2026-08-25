import DonutChart, {
  type DonutChartDataItem,
} from "@/components/common/donutchart";

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
  return <DonutChart data={data} size={240} lineWidth={48} duration={1000} />;
};

export default DonutChartExample;
