import { useState } from "react";
import { FloatingButtonGroup } from "@/components/common/fab/FloatingButton";
import "./guide.scss";

const FloatingButtonGuide = () => {
  const code = `import { FloatingButtonGroup } from "@/components/common/fab/FloatingButton";

<FloatingButtonGroup />`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Floating Button</h2>
      <p>화면에 고정되는 플로팅 액션 버튼 그룹 컴포넌트입니다.</p>

      <div className="section">
        <h3>Preview</h3>
        <div className="preview-box">
          <FloatingButtonGroup />
        </div>
      </div>

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
