import Radio from "@/components/common/radio/Radio";
import RadioGroup from "@/components/common/radio/RadioGroup";
import "./guide.scss";

const radioOptions = [
  { value: "option1", label: "옵션 1" },
  { value: "option2", label: "옵션 2" },
  { value: "option3", label: "옵션 3", disabled: true },
  {
    value: "option4",
    label: "옵션 4",
    checked: true,
    disabled: true,
  },
];

const RadioGuide = () => {
  const singleCode = `import Radio from "@/components/common/radio/Radio";

<Radio name="example" value="option1" label="옵션" />`;

  const groupCode = `import RadioGroup from "@/components/common/radio/RadioGroup";

const radioOptions = [
  { value: "option1", label: "옵션 1" },
  { value: "option2", label: "옵션 2" },
  { value: "option3", label: "옵션 3", disabled: true },
  {
    value: "option4",
    label: "옵션 4",
    checked: true,
    disabled: true,
  },
];

<RadioGroup name="guide-radio" options={radioOptions} />`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Radio</h2>
      <p>그룹 내에서 하나만 선택하는 라디오 버튼 컴포넌트입니다.</p>

      <div className="section">
        <h3>Preview (Single)</h3>
        <div
          className="preview-box"
          style={{ flexDirection: "column", alignItems: "flex-start" }}
        >
          <Radio name="guide-radio-single" value="option1" label="옵션" />
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
          <RadioGroup name="guide-radio" options={radioOptions} />
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

export default RadioGuide;
