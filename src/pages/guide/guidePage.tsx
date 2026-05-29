import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import "./guide.scss";
import ToggleButton from "./toggle-button";
import form from "./form";
import Icon from "./icon";
import SelectButton from "./select-button";
import FloatingButton from "./floating-button";
import Textarea from "./textarea";
import Tab from "./tab";
import Popup from "./popup";
import Table from "./table";
import Accordion from "./accordion";
import Tooltip from "./tooltip";
import Alert from "./alert";
import Dropdown from "./dropdown";
import Checkbox from "./checkbox";
import Radio from "./radio";

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
    label: "Icons",
    component: Icon,
  },
  {
    key: "form",
    label: "Form",
    component: form,
  },
  {
    key: "select button",
    label: "SelectButton",
    component: SelectButton,
  },
  {
    key: "floating button",
    label: "FloatingButton",
    component: FloatingButton,
  },
  {
    key: "textarea",
    label: "Textarea",
    component: Textarea,
  },
  {
    key: "tab",
    label: "Tab",
    component: Tab,
  },
  {
    key: "popup",
    label: "Popup",
    component: Popup,
  },
  {
    key: "alert",
    label: "Alert",
    component: Alert,
  },
  {
    key: "table",
    label: "Table",
    component: Table,
  },
  {
    key: "accordion",
    label: "Accordion",
    component: Accordion,
  },
  {
    key: "tooltip",
    label: "Tooltip",
    component: Tooltip,
  },
  {
    key: "dropdown",
    label: "Dropdown",
    component: Dropdown,
  },
  {
    key: "checkbox",
    label: "Checkbox",
    component: Checkbox,
  },
  {
    key: "radio",
    label: "Radio",
    component: Radio,
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
        <p>컴포넌트 사용법을 확인하고 복사해서 사용</p>
        <Link to=".." className="btn-guide">
          퍼블 작업리스트 보기
        </Link>
      </div>

      {/* 🔥 탭 */}
      <div className="guide-tabs">
        {guideList.map((item) => (
          <button
            key={item.key}
            className={cn("tab", {
              active: activeKey === item.key,
            })}
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
