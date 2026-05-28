import { useState } from "react";
import { PopupGroup } from "@/components/common/popup/Popup";
import "./guide.scss";

const PopupGuide = () => {
  const code = `import { PopupGroup } from "@/components/common/popup/Popup";

const [isOpen, setIsOpen] = useState(false);

<button className="btn-guide" onClick={() => setIsOpen(true)}>미디엄 팝업 열기</button>
<PopupGroup
  title="타이틀"
  size="medium"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  content={<div>중앙 레이어 팝업 내용입니다.</div>}
  footer={
    <>
      <button type="button" className="btn-guide" onClick={() => setIsOpen(false)}>취소</button>
      <button type="button" className="btn-guide" onClick={() => setIsOpen(false)}>확인</button>
    </>
  }
/>`;

  const code2 = `import { PopupGroup } from "@/components/common/popup/Popup";

const [isOpen, setIsOpen] = useState(false);

<button className="btn-guide" onClick={() => setIsOpen(true)}>라지 팝업 열기</button>
<PopupGroup
  title="타이틀"
  size="large"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  content={<div>넓은 중앙 레이어 팝업 내용입니다.</div>}
  footer={
    <>
      <button type="button" className="btn-guide" onClick={() => setIsOpen(false)}>취소</button>
      <button type="button" className="btn-guide" onClick={() => setIsOpen(false)}>저장</button>
    </>
  }
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  const handleCopy2 = () => {
    navigator.clipboard.writeText(code2);
    alert("복사 완료!");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="guide-detail">
      <h2>Popup</h2>
      <p>중앙 레이어 타입 팝업 컴포넌트입니다. 사이즈는 medium, large를 지원합니다.</p>

      <div className="section">
        <h3>Preview (medium)</h3>
        <div className="preview-box">
          <button className="btn-guide" onClick={() => setIsOpen(true)}>
            미디엄 팝업 열기
          </button>
          <PopupGroup
            title="타이틀"
            size="medium"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            content={<div>중앙 레이어 팝업 내용입니다.</div>}
            footer={
              <>
                <button
                  type="button"
                  className="btn-guide"
                  onClick={() => setIsOpen(false)}
                >
                  취소
                </button>
                <button
                  type="button"
                  className="btn-guide"
                  onClick={() => setIsOpen(false)}
                >
                  확인
                </button>
              </>
            }
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
        <h3>Preview (large)</h3>
        <div className="preview-box">
          <button className="btn-guide" onClick={() => setIsOpen2(true)}>
            라지 팝업 열기
          </button>
          <PopupGroup
            title="타이틀"
            size="large"
            isOpen={isOpen2}
            onClose={() => setIsOpen2(false)}
            content={<div>넓은 중앙 레이어 팝업 내용입니다.</div>}
            footer={
              <>
                <button
                  type="button"
                  className="btn-guide"
                  onClick={() => setIsOpen2(false)}
                >
                  취소
                </button>
                <button
                  type="button"
                  className="btn-guide"
                  onClick={() => setIsOpen2(false)}
                >
                  저장
                </button>
              </>
            }
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
    </div>
  );
};

export default PopupGuide;
