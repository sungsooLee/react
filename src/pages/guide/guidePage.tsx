import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./guide.scss";
import ToggleButton from "./toggle-button";
import form from "./form";
import Icon from "./icon";

type GuideItem = {
  key: string;
  label: string;
  component: React.FC;
};

const guideList: GuideItem[] = [
  {
    key: "toggle",
    label: "ToggleButton",
    component: ToggleButton,
  },
  {
    key: "icons",
    label: "Icons", // 👈 아이콘 가이드 추가
    component: Icon,
  },
  {
    key: "form",
    label: "Form", // 👈 아이콘 가이드 추가
    component: form,
  },
  // 👉 계속 추가
  // { key: "button", label: "Button", component: ButtonGuide },
];

const GuidePage = () => {
  const [activeKey, setActiveKey] = useState(guideList[0].key);

  const CurrentComponent =
    guideList.find((g) => g.key === activeKey)?.component || null;

  return (
    <div className="guide-container">
      {/* 🔥 헤더 */}
      <div className="guide-header">
        <h1>퍼블리싱 가이드</h1>
        <p>컴포넌트 사용법을 확인하고 바로 복사하세요</p>
        <Link to=".." className="btn-guide">
          퍼블 작업리스트 보기
        </Link>
      </div>

      {/* 🔥 탭 */}
      <div className="guide-tabs">
        {guideList.map((item) => (
          <button
            key={item.key}
            className={activeKey === item.key ? "tab active" : "tab"}
            onClick={() => setActiveKey(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 🔥 콘텐츠 */}
      <div className="guide-content">
        {CurrentComponent && <CurrentComponent />}
      </div>
    </div>
  );
};

export default GuidePage;
