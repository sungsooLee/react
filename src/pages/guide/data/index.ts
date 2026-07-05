import { ListItem } from "./guideData";
import { MenuIn } from "./menuIn";
import { MenuWa } from "./menuWa";

export const allGuideData: ListItem[] = [
  ...MenuIn, // 내부통제
  ...MenuWa, // 업무자동화
];
