import { useState } from "react";
import Layout from "@/components/layout/Layout";
// import cn from "classnames";
import "./index.scss";
import { SearchBox } from "@/components/ui/searchbox/SearchBox";
// import { TabGroup } from "@/components/common/tab/Tab";
import { ContentsWrapper } from "@/components/layout/contents/ContentsWrapper";

// tab contents
// const AllCont = () => <div>전체 고객 콘텐츠 (여기에 복잡한 코드 작성)</div>;

const Main = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(2);

  const menuItems = [
    {
      key: "home",
      label: "홈",
      iconName: "ic_home",
      onClick: () => {
        setActiveMenuIndex(0);
      },
    },
    {
      key: "search",
      label: "기업검색",
      iconName: "ic_company",
      onClick: () => {
        setActiveMenuIndex(1);
      },
    },
    {
      key: "customer",
      label: "가망 고객 발굴",
      iconName: "ic_customer",
      onClick: () => {
        setActiveMenuIndex(2);
      },
    },
    {
      key: "schedule",
      label: "일정관리",
      iconName: "ic_schedule",
      onClick: () => {
        setActiveMenuIndex(3);
      },
    },
  ];

  return (
    <Layout
      headerType={"type2"}
      headerType2Props={{
        hasAlarm: true,
        bagCount: 3,
      }}
      hasAside={true}
      hasAsideToggle={false}
      asideMenuItems={menuItems}
      asideActiveMenuIndex={activeMenuIndex}
      footerType="none"
    >
      <ContentsWrapper layout={"center"} className={"menu_rm"}>
        <h2 className="page_title">{"명동금융센터"}</h2>
        <p className="page_text">{"AI 로 보는 우리 지점 가망 고객"}</p>
        {/* <div style={{ backgroundColor: "rgba(235, 190, 172, 0.20)" }}>1</div>
        <div style={{ backgroundColor: "rgba(235, 190, 172, 0.20)" }}>2</div>
        <div style={{ backgroundColor: "rgba(235, 190, 172, 0.20)" }}>3</div> */}
        <SearchBox
          placeholder={"ex) 생산적 금융 기업"}
          chipsItems={[
            { item: "생산적 금융 기업" },
            { item: "시설자금 수요 기업" },
            { item: "외환 거래" },
            { item: "신용등급 높은" },
          ]}
        />
        {/* <TabGroup
          items={[
            { id: "tab1", label: "전체", content: <AllCont /> },
            {
              id: "tab2",
              label: "신규 가망 고객",
              content: <div>탭 2 콘텐츠</div>,
            },
            {
              id: "tab3",
              label: "Cross-Selling 가망 고객",
              content: <div>탭 3 콘텐츠</div>,
            },
            {
              id: "tab4",
              label: "이탈 가망 고객",
              content: <div>탭 4 콘텐츠</div>,
            },
          ]}
        /> */}
      </ContentsWrapper>
    </Layout>
  );
};

export default Main;
