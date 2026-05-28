import { useState } from "react";
import Layout from "@/components/layout/Layout";
import cn from "classnames";
import "./index.scss";
import { SearchBox } from "@/components/ui/searchbox/SearchBox";
import { TabGroup } from "@/components/common/tab/Tab";

// tab contents
const AllCont = () => <div>전체 고객 콘텐츠 (여기에 복잡한 코드 작성)</div>;

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
  ];

  return (
    <Layout
      headerType="type2"
      hasAside={true}
      asideMenuItems={menuItems}
      asideActiveMenuIndex={activeMenuIndex}
      footerType="none"
    >
      <div className={cn("contents")}>
        {/* SearchBox */}
        <SearchBox />

        {/* TabGroup  */}
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
        />
      </div>
    </Layout>
  );
};

export default Main;
