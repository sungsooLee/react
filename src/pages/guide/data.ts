import { ListItem } from "./data/guideData";
import { MenuIn } from "./data/menuIn";
import { MenuWa } from "./data/menuWa";

// 각 파일에서 가져온 배열을 하나의 마스터 배열로 합칩니다.
// 순서대로 출력하기 위해 결합 순서가 중요합니다.
export const allGuideData: ListItem[] = [
  ...MenuIn, // 내부통제
  ...MenuWa, // 업무자동화
];
