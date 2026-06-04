// src/components/layout/Header/HeaderType2.tsx
import { Icon } from "@/components/icons/Icon";
import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { Button } from "@/components/common/button/Button";
import cn from "classnames";

export interface HeaderType2Props {
  className?: string;
  hasAlarm?: boolean;
  bagCount?: number;
}

const HeaderType2: React.FC<HeaderType2Props> = ({
  className,
  hasAlarm = false,
  bagCount = 0,
}) => {
  return (
    <header className={className}>
      <h1 className={"logo"}>
        <Link to={"/"}>
          <Icon name={"ic_logo"} size={"lg"} strokeColor={"none"} />
          <span className={"label"}>WON-SHOT 기업리포트</span>
        </Link>
      </h1>

      <div className={"quick_menu"}>
        <div
          className={cn("alarm_view", {
            active: hasAlarm,
          })}
        >
          <Button variant="normal">
            <Icon
              name={"icon_ui_bell"}
              size={"md"}
              strokeColor={"#4C4F58"}
              fillColor={"#4C4F58"}
            />
          </Button>
        </div>

        <div className={cn("bag_view")}>
          <Button variant="normal">
            <Icon name={"icon_ui_bag"} size={"md"} />

            {bagCount > 0 && <span className={"num_view"}>{bagCount}</span>}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeaderType2;
