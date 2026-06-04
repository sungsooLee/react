import { TabGroup } from "@/components/common/tab/Tab";
import "./guide.scss";

const tabItems = [
  { id: "tab1", label: "탭 1", content: <div>탭 1 콘텐츠</div> },
  { id: "tab2", label: "탭 2", content: <div>탭 2 콘텐츠</div> },
  { id: "tab3", label: "탭 3", content: <div>탭 3 콘텐츠</div> },
];

const TabGroupGuide = () => {
  const code = `import { TabGroup } from "@/components/common/tab/Tab";

const tabItems = [
  { id: "tab1", label: "탭 1", content: <div>탭 1 콘텐츠</div> },
  { id: "tab2", label: "탭 2", content: <div>탭 2 콘텐츠</div> },
  { id: "tab3", label: "탭 3", content: <div>탭 3 콘텐츠</div> },
];

// line
<TabGroup
  variant="line"
  items={tabItems}
/>

// rounded
<TabGroup
  variant="rounded"
  items={tabItems}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Tab</h2>
      <p>탭 클릭 시 콘텐츠가 전환되는 탭 컴포넌트입니다.</p>

      <div className="section">
        <h3>Preview</h3>

        <div
          className="preview-box"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <div>
            <h4 style={{ marginBottom: "12px" }}>Line</h4>
            <TabGroup variant="line" items={tabItems} />
          </div>

          <div>
            <h4 style={{ marginBottom: "12px" }}>Rounded</h4>
            <TabGroup variant="rounded" items={tabItems} />
          </div>
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

export default TabGroupGuide;
