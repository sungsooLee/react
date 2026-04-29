import React, { useState } from "react";
import "./guide-page.scss";
import ToggleButton from "./toggle-button";

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
