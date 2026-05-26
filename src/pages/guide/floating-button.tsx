import React, { useState } from "react";
import cn from "classnames";
import { FloatingButtonGroup } from "@/components/common/fab/floatingButton"
import "./guide.scss";

const FloatingButtonGuide = () => {

  const code = `import { FloatingButtonGroup } from "@/components/common/fab/floatingButton";

  <FloatingButtonGroup />`;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };
  
  return (
    <div className="guide-detail">
      
      <div className="section">
        <FloatingButtonGroup />
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

export default FloatingButtonGuide;
