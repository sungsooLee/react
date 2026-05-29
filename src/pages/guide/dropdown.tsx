import { useState } from "react";
import Dropdown from "@/components/common/dropdown/Dropdown";
import "./guide.scss";

const dropdownItems = [
  { value: "option1", label: "텍스트텍스트텍트텍스트텍스트텍텍스트텍스트텍텍스트텍스트텍스트텍스트텍스트" },
  { value: "option2", label: "옵션 2" },
  { value: "option3", label: "옵션 3" },
];

const DropdownGuide = () => {
  const [largeValue, setLargeValue] = useState("");
  const [smallValue, setSmallValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const code = `import { useState } from "react";
import Dropdown from "@/components/common/dropdown/Dropdown";

const [value, setValue] = useState("");

<Dropdown
  items={[
    { value: "option1", label: "텍스트" },
    { value: "option2", label: "옵션 2" },
  ]}
  value={value}
  onChange={setValue}
  size="large"
  placeholder="텍스트"
/>

<Dropdown
  items={items}
  value={value}
  onChange={setValue}
  size="small"
  placeholder="텍스트"
/>

<Dropdown
  items={items}
  value={value}
  onChange={setValue}
  size="text"
  placeholder="텍스트"
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Dropdown</h2>
      <p>
        Large, Small, Text 사이즈를 지원하는 드롭다운 컴포넌트입니다. Text
        사이즈는 선택 전에는 plain 형태이고, 옵션 선택 시 fill 배경이
        적용됩니다.
      </p>

      <div className="section">
        <h3>Preview</h3>

        <div className="preview-box">
          <div className="guide-item">
            <h4>Large</h4>
            <Dropdown
              items={dropdownItems}
              value={largeValue}
              onChange={setLargeValue}
              size="large"
              placeholder="텍스트"
              error={true}
              errorText="에러 입니다."
            />
          </div>

          <div className="guide-item">
            <h4>Small</h4>
            <Dropdown
              items={dropdownItems}
              value={smallValue}
              onChange={setSmallValue}
              size="small"
              placeholder="텍스트"
            />
          </div>

          <div className="guide-item">
            <h4>Text</h4>
            <Dropdown
              items={dropdownItems}
              value={textValue}
              onChange={setTextValue}
              size="text"
              placeholder="텍스트"
            />
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

export default DropdownGuide;
