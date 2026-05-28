import { useState } from "react";
import Alert from "@/components/common/alert/Alert";
import "./guide.scss";

const AlertGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const code = `import { useState } from "react";
import Alert from "@/components/common/alert/Alert";

const [isOpen, setIsOpen] = useState(false);

<button type="button" className="btn-guide" onClick={() => setIsOpen(true)}>
  알럿 열기
</button>

<Alert
  isOpen={isOpen}
  title="알림"
  message="정상적으로 저장되었습니다."
  confirmText="확인"
  onClose={() => setIsOpen(false)}
  onConfirm={() => setIsOpen(false)}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Alert</h2>
      <p>중앙에 노출되는 기본 알럿 컴포넌트입니다.</p>

      <div className="section">
        <h3>Preview</h3>
        <div className="preview-box">
          <button
            type="button"
            className="btn-guide"
            onClick={() => setIsOpen(true)}
          >
            알럿 열기
          </button>

          <Alert
            isOpen={isOpen}
            title="알림"
            message="정상적으로 저장되었습니다."
            confirmText="확인"
            onClose={() => setIsOpen(false)}
            onConfirm={() => setIsOpen(false)}
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

export default AlertGuide;
