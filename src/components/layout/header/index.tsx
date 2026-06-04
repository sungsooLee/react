// src/components/layout/Header/index.tsx
import React from "react";
import HeaderType1 from "./HeaderType1";
import HeaderType2 from "./HeaderType2";
import type { HeaderType } from "../Layout";

interface HeaderProps {
  type: HeaderType;
  className?: string;
  headerType2Props?: {
    hasAlarm?: boolean;
    bagCount?: number;
  };
}

const Header: React.FC<HeaderProps> = ({
  type,
  className,
  headerType2Props,
}) => {
  switch (type) {
    case "type1":
      return <HeaderType1 className={className} />;
    case "type2":
      return (
        <HeaderType2
          className={className}
          hasAlarm={headerType2Props?.hasAlarm}
          bagCount={headerType2Props?.bagCount}
        />
      );
    default:
      return null;
  }
};

export default Header;
