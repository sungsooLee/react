import BridgeLineChart, {
  type LineChartSeries,
} from "@/components/common/echart/BridgeLineChart";

interface ChartData {
  date: string;
  email: number;
  unionAds: number;
  videoAds: number;
  direct: number;
  searchEngine: number;
}

const chartData: ChartData[] = [
  {
    date: "월",
    email: 120,
    unionAds: 220,
    videoAds: 150,
    direct: 320,
    searchEngine: 820,
  },
  {
    date: "화",
    email: 132,
    unionAds: 182,
    videoAds: 232,
    direct: 332,
    searchEngine: 932,
  },
  {
    date: "수",
    email: 101,
    unionAds: 191,
    videoAds: 201,
    direct: 301,
    searchEngine: 901,
  },
  {
    date: "목",
    email: 134,
    unionAds: 234,
    videoAds: 154,
    direct: 334,
    searchEngine: 934,
  },
  {
    date: "금",
    email: 90,
    unionAds: 290,
    videoAds: 190,
    direct: 390,
    searchEngine: 1290,
  },
  {
    date: "토",
    email: 230,
    unionAds: 330,
    videoAds: 330,
    direct: 330,
    searchEngine: 1330,
  },
  {
    date: "일",
    email: 210,
    unionAds: 310,
    videoAds: 410,
    direct: 320,
    searchEngine: 1320,
  },
];

const chartSeries: LineChartSeries<ChartData>[] = [
  {
    name: "Email",
    key: "email",
    color: "#5470C6",
  },
  {
    name: "Union Ads",
    key: "unionAds",
    color: "#91CC75",
  },
  {
    name: "Video Ads",
    key: "videoAds",
    color: "#FAC858",
  },
  {
    name: "Direct",
    key: "direct",
    color: "#EE6666",
  },
  {
    name: "Search Engine",
    key: "searchEngine",
    color: "#73C0DE",
  },
];

function Test8() {
  return (
    <>
      <BridgeLineChart data={chartData} series={chartSeries} xAxisKey="date" />
    </>
  );
}

export default Test8;
