import { useState } from "react";
import Layout from "@/components/layout/Layout";
import cn from "classnames";

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
      <div className={cn("contents")}></div>
    </Layout>
  );
};

export default Main;
