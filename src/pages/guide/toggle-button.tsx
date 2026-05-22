import React, { useState } from "react";
import { ToggleButton } from "@/components/common/togglebutton/ToggleButton";
import "./guide.scss";

const ToggleGuide = () => {
  const [state, setState] = useState(false);

  const code = `import { ToggleButton } from "@/components/common/togglebutton/ToggleButton";

<ToggleButton
  label="토글 버튼"
  isActive={true}
  onToggle={(state) => console.log(state)}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Toggle Button</h2>
      <p>토글 기능이 있는 버튼 컴포넌트입니다.</p>

      {/* Preview */}
      <div className="section">
        <h3>Preview</h3>
        <div className="preview-box">
          <ToggleButton label="기본 토글" onToggle={setState} />
          <ToggleButton switchMode onToggle={setState} />
          <p>토글 상태 : {state ? " ON" : " OFF"}</p>
        </div>
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

export default ToggleGuide;
