import { useState } from "react";
import Toast from "@/components/common/toast/Toast";
import "./guide.scss";

const ToastGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState("default");

  const code = `import { useState } from "react";
import Toast from "@/components/common/toast/Toast";

const [isOpen, setIsOpen] = useState(false);

<button type="button" className="btn-guide" onClick={() => setIsOpen(true)}>
  토스트 열기
</button>

<Toast
  isOpen={isOpen}
  message="정상적으로 저장되었습니다."
  variant="success"
  position="bottom"
  duration={3000}
  onClose={() => setIsOpen(false)}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  const handleOpen = (nextVariant) => {
    setVariant(nextVariant);
    setIsOpen(true);
  };

  return (
    <div className="guide-detail">
      <h2>Toast</h2>
      <p>화면 하단 또는 상단에 잠시 노출되는 토스트 컴포넌트입니다.</p>

      <div className="section">
        <h3>Preview</h3>
        <div className="preview-box">
          <button
            type="button"
            className="btn-guide"
            onClick={() => handleOpen("default")}
          >
            기본 토스트
          </button>
          <button
            type="button"
            className="btn-guide"
            onClick={() => handleOpen("success")}
          >
            성공 토스트
          </button>
          <button
            type="button"
            className="btn-guide"
            onClick={() => handleOpen("error")}
          >
            오류 토스트
          </button>
          <button
            type="button"
            className="btn-guide"
            onClick={() => handleOpen("warning")}
          >
            경고 토스트
          </button>

          <Toast
            isOpen={isOpen}
            message="정상적으로 저장되었습니다."
            variant={variant}
            position="bottom"
            duration={3000}
            onClose={() => setIsOpen(false)}
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
    </div>
  );
};

export default ToastGuide;
