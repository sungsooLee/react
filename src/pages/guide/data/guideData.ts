import { ListItem } from "../type/guide";

export const guideData: ListItem[] = [
  // 퍼블 작업리스트
  // 완료시 completionDate 에 날짜를 기입해주세요. (ex.2026-05-11)

  // screenName: 화면명
  // pageId: 화면 ID
  // screenId: 스크린아이디
  // pageType: 페이지 타입 Page,Pop-up
  // completionDate: 완료일
  // lastUpdateDate: 수정일
  // remarks: 비고
  {
    id: 1,
    // depth: 1,
    screenName: "메인",
    pageId: "",
    screenId: "",
    pageType: "Page",
    completionDate: "",
    lastUpdateDate: "",
    remarks: "",
  },
  {
    id: 2,
    // depth: 2,
    screenName: "헤더",
    pageId: "",
    screenId: "",
    pageType: "Component",
    completionDate: "2025-04-15",
    lastUpdateDate: "",
    remarks: "완료",
  },
  {
    id: 3,
    // depth: 3,
    screenName: "네비게이션",
    pageId: "",
    screenId: "",
    pageType: "Component",
    completionDate: "",
    lastUpdateDate: "",
    remarks: "작업중",
  },
  {
    id: 4,
    // depth: 4,
    screenName: "드롭다운",
    pageId: "",
    screenId: "",
    pageType: "Component",
    completionDate: "",
    lastUpdateDate: "",
    remarks: "",
  },
  {
    id: 5,
    // depth: 5,
    screenName: "서브메뉴",
    pageId: "",
    screenId: "",
    pageType: "Component",
    completionDate: "",
    lastUpdateDate: "",
    remarks: "",
  },
  {
    id: 6,
    // depth: 6,
    screenName: "상세링크",
    pageId: "/detail",
    screenId: "detail",
    pageType: "Page",
    completionDate: "",
    lastUpdateDate: "",
    remarks: "",
  },
];
