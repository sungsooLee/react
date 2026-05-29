import Checkbox from "@/components/common/checkbox/Checkbox";
import CheckboxGroup from "@/components/common/checkbox/CheckboxGroup";
import "./guide.scss";

const checkboxOptions = [
  { key: "option1", label: "옵션 1" },
  { key: "option2", label: "옵션 2", checked: true },
  { key: "option3", label: "옵션 3", disabled: true },
  {
    key: "option4",
    label: "옵션 4",
    checked: true,
    disabled: true,
  },
];

const CheckboxGuide = () => {
  const singleCode = `import Checkbox from "@/components/common/checkbox/Checkbox";

<Checkbox label="옵션" />`;

  const groupCode = `import CheckboxGroup from "@/components/common/checkbox/CheckboxGroup";

const checkboxOptions = [
  { key: "option1", label: "옵션 1" },
  { key: "option2", label: "옵션 2", checked: true },
  { key: "option3", label: "옵션 3", disabled: true },
  {
    key: "option4",
    label: "옵션 4",
    checked: true,
    disabled: true,
  },
];

<CheckboxGroup options={checkboxOptions} />`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Checkbox</h2>
      <p>여러 항목을 선택할 수 있는 체크박스 컴포넌트입니다.</p>

      <div className="section">
        <h3>Preview (Single)</h3>
        <div
          className="preview-box"
          style={{ flexDirection: "column", alignItems: "flex-start" }}
        >
          <Checkbox label="옵션" />
        </div>
      </div>

      <div className="section">
        <div className="code-header">
          <h3>Code</h3>
          <button onClick={() => handleCopy(singleCode)} className="copy-btn">
            복사
          </button>
        </div>
        <pre className="code-block">
          <code>{singleCode}</code>
        </pre>
      </div>

      <div className="section">
        <h3>Preview (Group)</h3>
        <div
          className="preview-box"
          style={{ flexDirection: "column", alignItems: "flex-start" }}
        >
          <CheckboxGroup options={checkboxOptions} />
        </div>
      </div>

      <div className="section">
        <div className="code-header">
          <h3>Code</h3>
          <button onClick={() => handleCopy(groupCode)} className="copy-btn">
            복사
          </button>
        </div>
        <pre className="code-block">
          <code>{groupCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default CheckboxGuide;
