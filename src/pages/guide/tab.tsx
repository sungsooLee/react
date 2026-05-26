import React, { useState } from "react";
import cn from "classnames";
import { TabGroup } from "@/components/common/tab/Tab"
import "./guide.scss";

const TabGroupGuide = () => {

  const code = `import { TabGroup } from "@/components/common/tab/Tab";

  <TabGroup items={[
      { id: "tab1", label: "탭 1", content: <div>탭 1 콘텐츠</div> },
      { id: "tab2", label: "탭 2", content: <div>탭 2 콘텐츠</div> },
      { id: "tab3", label: "탭 3", content: <div>탭 3 콘텐츠</div> },
    ]} />`;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };
  
  return (
    <div className="guide-detail">
      
      <div className="section">
        <TabGroup items={[
          { id: "tab1", label: "탭 1", content: <div>탭 1 콘텐츠</div> },
          { id: "tab2", label: "탭 2", content: <div>탭 2 콘텐츠</div> },
          { id: "tab3", label: "탭 3", content: <div>탭 3 콘텐츠</div> },
        ]} />
      </div>

      {/* Code */}
      <div className="section">
        <div className="code-header">
          <h3>Code</h3>
          <button onClick={handleCopy} className="copy-btn">
            복사
          </button>
        </div>

        <pre className="code-block">
          <code>{code}</code>
        </pre>
      </div>

    </div>
  );
};

export default TabGroupGuide;
