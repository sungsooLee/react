// src/components/layout/Header/HeaderType2.tsx
import { Icon } from "@/components/icons/Icon";
import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { Button } from "@/components/common/button/Button";
import userProfile from "../../../assets/images/rm/sample.png";
interface Props {
  className?: string;
}

const HeaderType2: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <h1 className={"logo"}>
        <Link to={"/"}>
          <Icon name={"ic_logo"} size={"lg"} strokeColor={"none"} />
          <span className={"label"}>WON-SHOT 기업리포트</span>
        </Link>
      </h1>
      <div className={"quick_menu"}>
        <div className={"alarm_view"}>
          <Button variant="normal">
            <Icon
              name={"ic_alarm"}
              size={"md"}
              strokeColor={"#4C4F58"}
              fillColor={"#4C4F58"}
            />
          </Button>
          <span className={"num_view"}>3</span>
        </div>
        <div className={"user_view"}>
          <img src={userProfile} alt={""} className={"img_profile"} />
          <span className={"label"}>김우리</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderType2;
