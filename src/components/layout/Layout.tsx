// src/components/layout/Layout.tsx
import React from "react";
import Header from "./header/index";
import Footer from "./footer/index";
import styles from "./layout.module.scss";
import TopButton from "../common/TopButton";

export type HeaderType = "type1" | "type2" | "none";
export type FooterType = "type1" | "type2" | "none";

interface LayoutProps {
  headerType?: HeaderType;
  footerType?: FooterType;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  headerType = "type1",
  footerType = "type1",
  children,
}) => {
  return (
    <div className={styles.layout__wrap}>
      {headerType !== "none" && (
        <Header className={styles.layout__header} type={headerType} />
      )}
      <main className={styles.layout__container}>{children}</main>
      {footerType !== "none" && (
        <Footer className={styles.layout__footer} type={footerType} />
      )}
      <TopButton />
    </div>
  );
};

export default Layout;
