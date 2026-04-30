import { ListItem } from "../type/guide";

export const guideData: ListItem[] = [
  // 퍼블 작업리스트
  // 완료시 completionDate 에 날짜를 기입해주세요. (ex.2026-05-11)

  // menuName: 메뉴명(공통, 마이페이지 등등)
  // screenName: 화면경로(뎁스표기)
  // pageId: 화면명
  // pageId: 화면아이디
  // pageType: 페이지 타입 Page,Pop-up
  // completionDate: 완료일
  // lastUpdateDate: 수정일
  // remarks: 비고
  {
    id: 1,
    menuName: "공통",
    screenName: "팝업",
    pageLink: "",
    pageId: "",
    pageType: "Page",
    completionDate: "",
    lastUpdateDate: "",
    remarks: "",
  },
  {
    id: 2,
    menuName: "",
    screenName: "헤더",
    pageLink: "",
    pageId: "",
    pageType: "Component",
    completionDate: "2025-04-15",
    lastUpdateDate: "",
    remarks: "완료",
  },
  {
    id: 3,
    menuName: "",
    screenName: "네비게이션",
    pageLink: "",
    pageId: "",
    pageType: "Component",
    completionDate: "",
    lastUpdateDate: "",
    remarks: "작업중",
  },
  {
    id: 4,
    menuName: "",
    screenName: "드롭다운",
    pageLink: "",
    pageId: "",
    pageType: "Component",
    completionDate: "",
    lastUpdateDate: "",
    remarks: "",
  },
  {
    id: 5,
    menuName: "",
    screenName: "서브메뉴",
    pageLink: "",
    pageId: "",
    pageType: "Component",
    completionDate: "",
    lastUpdateDate: "",
    remarks: "",
  },
  {
    id: 6,
    menuName: "",
    screenName: "상세링크",
    pageLink: "/detail",
    pageId: "detail",
    pageType: "Page",
    completionDate: "",
    lastUpdateDate: "",
    remarks: "",
  },
];
