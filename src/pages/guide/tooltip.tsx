import { Tooltip } from "@/components/common/tooltip/Tooltip";
import "./guide.scss";

const TooltipGuide = () => {
  const code = `import { Tooltip } from "@/components/common/tooltip/Tooltip";

<Tooltip content="상단 툴팁입니다." placement="top">
  <button type="button" className="btn-guide">Top</button>
</Tooltip>

<Tooltip content="하단 툴팁입니다." placement="bottom">
  <button type="button" className="btn-guide">Bottom</button>
</Tooltip>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Tooltip</h2>
      <p>클릭 시 설명이 열리고, 바깥 영역 클릭 시 닫히는 툴팁 컴포넌트입니다.</p>

      <div className="section">
        <h3>Preview</h3>
        <div className="preview-box">
          <Tooltip content="상단 툴팁입니다." placement="top">
            <button type="button" className="btn-guide">
              Top
            </button>
          </Tooltip>

          <Tooltip content="하단 툴팁입니다." placement="bottom">
            <button type="button" className="btn-guide">
              Bottom
            </button>
          </Tooltip>

          <Tooltip content="왼쪽 툴팁입니다." placement="left">
            <button type="button" className="btn-guide">
              Left
            </button>
          </Tooltip>

          <Tooltip content="오른쪽 툴팁입니다. 길이 체크 길이 체크 길이 체크 길이 체크 길이 체크 길이 체크 길이 체크 길이 체크" placement="right">
            <button type="button" className="btn-guide">
              Right
            </button>
          </Tooltip>
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

export default TooltipGuide;
