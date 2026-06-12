import { useState } from "react";
import { TextField } from "@/components/common/textfield/TextField";
import "./guide.scss";

const TextFieldGuide = () => {
  const [defaultValue, setDefaultValue] = useState("");
  const [errorValue, setErrorValue] = useState("");

  const code = `import { TextField } from "@/components/common/textfield/TextField";

/* 1. 기본 (입력 시 reset 버튼 자동 표시) */
<TextField
  placeholder="내용을 입력하세요"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

/* 2. variant */
<TextField variant="default" placeholder="default" />
<TextField variant="dark" placeholder="dark" />

/* 3. size */
<TextField size="small" placeholder="small (28px)" />
<TextField size="medium" placeholder="medium (40px)" />

/* 4. 하단 안내 문구 */
<TextField
  guideText="영문, 숫자 조합 8자 이상 입력해주세요."
/>

/* 5. 에러 메시지 */
<TextField
  error
  errorText="올바른 형식이 아닙니다."
/>

/* 6. disabled */
<TextField
  disabled
  value="비활성화된 입력값"
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>TextField</h2>
      <p>
        한 줄 텍스트 입력을 위한 컴포넌트입니다. 입력값이 있으면 reset 버튼이
        자동으로 표시되며, 하단 안내 문구와 에러 메시지를 지원합니다.
      </p>

      <div className="section">
        <h3>Preview</h3>
        <div className="preview-box">
          <div className="guide-item">
            <h4>기본</h4>
            <TextField
              placeholder="내용을 입력하세요"
              value={defaultValue}
              onChange={(e) => setDefaultValue(e.target.value)}
            />
          </div>

          <div className="guide-item">
            <h4>variant</h4>
            <TextField variant="default" placeholder="default" />
            <TextField variant="dark" placeholder="dark" />
          </div>

          <div className="guide-item">
            <h4>size</h4>
            <TextField size="small" placeholder="small (28px)" />
            <TextField size="medium" placeholder="medium (40px)" />
          </div>

          <div className="guide-item">
            <h4>하단 안내 문구</h4>
            <TextField
              placeholder="아이디"
              guideText="영문, 숫자 조합 8자 이상 입력해주세요."
            />
          </div>

          <div className="guide-item">
            <h4>에러 메시지</h4>
            <TextField
              value={errorValue}
              onChange={(e) => setErrorValue(e.target.value)}
              error
              errorText="올바른 형식이 아닙니다."
            />
          </div>

          <div className="guide-item">
            <h4>disabled</h4>
            <TextField disabled value="비활성화된 입력값" />
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

export default TextFieldGuide;
