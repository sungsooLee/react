import { useState } from "react";
import { PopupGroup } from "@/components/common/popup/Popup";
import "./guide.scss";

const PopupGuide = () => {
  const code = `import { PopupGroup } from "@/components/common/popup/Popup";

const [isOpen, setIsOpen] = useState(false);

<button className="btn-guide" onClick={() => setIsOpen(true)}>바텀 팝업 열기</button>
<PopupGroup
  title="타이틀"
  style="bottom"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  content={<div>바텀 팝업 내용입니다.</div>}
/>`;

  const code2 = `import { PopupGroup } from "@/components/common/popup/Popup";

const [isOpen, setIsOpen] = useState(false);

<button className="btn-guide" onClick={() => setIsOpen(true)}>전체 풀 팝업 열기</button>
<PopupGroup
  title="타이틀"
  style="full"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  content={<div>전체 풀 팝업 내용입니다.</div>}
/>`;

  const code3 = `import { PopupGroup } from "@/components/common/popup/Popup";

const [isOpen, setIsOpen] = useState(false);

<button className="btn-guide" onClick={() => setIsOpen(true)}>중앙 팝업 열기</button>
<PopupGroup
  title="타이틀"
  style="center"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  content={<div>중앙 팝업 내용입니다.</div>}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  const handleCopy2 = () => {
    navigator.clipboard.writeText(code2);
    alert("복사 완료!");
  };

  const handleCopy3 = () => {
    navigator.clipboard.writeText(code3);
    alert("복사 완료!");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="guide-detail">
      <h2>Popup</h2>
      <p>바텀, 풀, 중앙 타입 팝업 컴포넌트입니다.</p>

      <div className="section">
        <h3>Preview (bottom)</h3>
        <div className="preview-box">
          <button className="btn-guide" onClick={() => setIsOpen(true)}>
            바텀 팝업 열기
          </button>
          <PopupGroup
            title="타이틀"
            style="bottom"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            content={<div>바텀 팝업 내용입니다.</div>}
          />
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

      <div className="section">
        <h3>Preview (full)</h3>
        <div className="preview-box">
          <button className="btn-guide" onClick={() => setIsOpen2(true)}>
            전체 풀 팝업 열기
          </button>
          <PopupGroup
            title="타이틀"
            style="full"
            isOpen={isOpen2}
            onClose={() => setIsOpen2(false)}
            content={<div>전체 풀 팝업 내용입니다.</div>}
          />
        </div>
      </div>

      <div className="section">
        <div className="code-header">
          <h3>Code</h3>
          <button onClick={handleCopy2} className="copy-btn">
            복사
          </button>
        </div>
        <pre className="code-block">
          <code>{code2}</code>
        </pre>
      </div>

      <div className="section">
        <h3>Preview (center)</h3>
        <div className="preview-box">
          <button className="btn-guide" onClick={() => setIsOpen3(true)}>
            중앙 팝업 열기
          </button>
          <PopupGroup
            title="타이틀"
            style="center"
            isOpen={isOpen3}
            onClose={() => setIsOpen3(false)}
            content={<div>중앙 팝업 내용입니다.</div>}
          />
        </div>
      </div>

      <div className="section">
        <div className="code-header">
          <h3>Code</h3>
          <button onClick={handleCopy3} className="copy-btn">
            복사
          </button>
        </div>
        <pre className="code-block">
          <code>{code3}</code>
        </pre>
      </div>
    </div>
  );
};

export default PopupGuide;
