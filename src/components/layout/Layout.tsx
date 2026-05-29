// src/components/layout/Layout.tsx
import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import TopButton from "../common/topbutton/TopButton";
import cn from "classnames";
import styles from "./layout.module.scss";
import { Button } from "../common/button/Button";
import { Icon } from "../icons/Icon";

export type HeaderType = "type1" | "type2" | "none";
export type FooterType = "type1" | "type2" | "none";

export interface AsideMenuItem {
  key: string;
  label: string;
  iconName: string;
  onClick?: () => void;
}

interface LayoutProps {
  headerType?: HeaderType;
  footerType?: FooterType;
  hasAside?: boolean;
  asideMenuItems?: AsideMenuItem[];
  asideActiveMenuIndex?: number;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  headerType = "type1",
  footerType = "type1",
  hasAside = false,
  asideMenuItems = [],
  asideActiveMenuIndex = 0,

  children,
}) => {
  const [isAsideOpen, setIsAsideOpen] = useState(true);

  const handleAsideToggle = () => {
    setIsAsideOpen((prev) => !prev);
  };

  return (
    <div className={styles.wrap}>
      {/* Header */}
      {headerType !== "none" && (
        <Header
          className={cn(
            headerType === "type2" ? styles.header_type2 : styles.header,
          )}
          type={headerType}
        />
      )}

      {/* Layout */}
      <div className={styles.layout}>
        {/* Aside */}
        {hasAside && (
          <aside className={cn(styles.aside, isAsideOpen && styles.open)}>
            <div className={styles.logo_wrap}>
              <h1 className={styles.logo}>
                <Icon name={"ic_logo"} size={"lg"} strokeColor={"none"} />
                <span className={styles.label}>
                  WON-SHOT
                  <br />
                  기업리포트
                </span>
              </h1>
              {/* Toggle Button */}
              <Button
                variant="normal"
                className={styles.btn_toggle}
                onClick={handleAsideToggle}
              >
                <Icon
                  name={isAsideOpen ? "ic_nav_toggle" : "ic_nav_toggle"}
                  size={"md"}
                />
              </Button>
            </div>

            {/* Nav */}
            <nav className={styles.nav}>
              <ul className={styles.nav_menu}>
                {asideMenuItems.map((item, index) => (
                  <li
                    key={item.key}
                    className={cn(
                      styles.nav_menu_item,
                      asideActiveMenuIndex === index && styles.active,
                    )}
                  >
                    <Button variant="normal" onClick={item.onClick}>
                      <Icon
                        name={item.iconName}
                        size="md"
                        strokeColor="none"
                        fillColor="none"
                        className="nav_icon"
                      />
                      {item.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}

        {/* Main */}
        <main className={styles.container}>{children}</main>
      </div>

      {/* Footer */}
      {footerType !== "none" && (
        <Footer className={styles.footer} type={footerType} />
      )}

      <TopButton />
    </div>
  );
};

export default Layout;
