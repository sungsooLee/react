import { useState } from "react";
import Layout from "@/components/layout/Layout";
// import cn from "classnames";
import "./index.scss";
// import { SearchBox } from "@/components/ui/searchbox/SearchBox";
// import { TabGroup } from "@/components/common/tab/Tab";
import { ContentsWrapper } from "@/components/layout/contents/ContentsWrapper";
import { TopMenu } from "@/components/layout/topmenu/TopMenu";

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

  const [value, setValue] = useState("");

  return (
    <Layout
      headerType="none"
      hasAside={true}
      asideMenuItems={menuItems}
      asideActiveMenuIndex={activeMenuIndex}
      footerType="none"
    >
      <TopMenu
        userName="김우리"
        notificationCount={3}
        dropdownItems={[
          { label: "본부담당자", value: "user1" },
          { label: "본부담당자2", value: "user2" },
        ]}
        dropdownValue={value}
        onDropdownChange={setValue}
        dropdownPlaceholder={"선택"}
      />
      <ContentsWrapper layout={"column"} columns={3}>
        <div style={{ backgroundColor: "rgba(235, 190, 172, 0.20)" }}>1</div>
        <div style={{ backgroundColor: "rgba(235, 190, 172, 0.20)" }}>2</div>
        <div style={{ backgroundColor: "rgba(235, 190, 172, 0.20)" }}>3</div>
        {/* <SearchBox />
        <TabGroup
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
