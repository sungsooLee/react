import React, { useState } from "react";
import SelectButton from "@/components/common/selectbutton/SelectButton";
import "./guide.scss";

const SelectButtonGuide = () => {
  const [value, setValue] = useState("apple");
  const [multi, setMulti] = useState<string[]>(["apple"]);

  const code = `import SelectButton from "@/components/common/selectbutton/SelectButton";

<SelectButton
  items={[
    { value: "버튼명", content: "버튼1" },
    { value: "버튼명2", content: "버튼2" },
    { value: "버튼명3", content: "버튼3" },
  ]}
  value={["버튼명"]}
  multiple
  onChange={(value) => console.log(value)}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Select Button</h2>
      <p>싱글/멀티 선택이 가능한 버튼 그룹 컴포넌트입니다.</p>

      {/* Preview */}
      <div className="section">
        <h3>Preview</h3>

        {/* SINGLE */}
        <div className="preview-box">
          <h4>Single Select</h4>

          <SelectButton
            items={[
              { value: "버튼명", content: "버튼1" },
              { value: "버튼명2", content: "버튼2" },
              { value: "버튼명3", content: "버튼3" },
            ]}
            value={value}
            onChange={setValue}
          />

          <p>선택값: {value}</p>
        </div>

        {/* MULTI */}
        <div className="preview-box">
          <h4>Multi Select</h4>

          <SelectButton
            multiple
            items={[
              { value: "버튼명", content: "버튼1" },
              { value: "버튼명2", content: "버튼2" },
              { value: "버튼명3", content: "버튼3", disabled: true },
            ]}
            value={multi}
            onChange={setMulti}
          />

          <p>선택값: {multi.join(", ")}</p>
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

export default SelectButtonGuide;
