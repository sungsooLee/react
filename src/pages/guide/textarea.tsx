import React, { useState } from "react";
import { Textarea } from "@/components/common/textarea/Textarea";
import "./guide.scss";

const TextareaGuide = () => {
  const [defaultValue, setDefaultValue] = useState("");
  const [countValue, setCountValue] = useState("");
  const [resizeValue, setResizeValue] = useState("");
  const [errorValue, setErrorValue] = useState("");

  const code = `import { Textarea } from "@/components/common/textarea/textarea";

/* 1. 기본 textarea */
<Textarea
  placeholder="내용을 입력하세요"
/>

/* 2. 글자 수 표시 */
<Textarea
  showCount
  maxLength={500}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

/* 3. guideText 사용 */
<Textarea
  guideText="최대 500자까지 입력 가능합니다."
/>

/* 4. resize 허용 */
<Textarea
  canResize
/>

/* 5. 에러 상태 */
<Textarea
  error
  errorText="10자 이상 입력해주세요."
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Textarea</h2>

      <p>
        여러 줄 입력을 위한 textarea 컴포넌트입니다. 글자 수 표시, guideText,
        resize 제어를 지원합니다.
      </p>

      {/* Preview */}
      <div className="section">
        <h3>Preview</h3>

        <div className="preview-box">
          {/* 기본 */}
          <div className="guide-item">
            <h4>기본</h4>

            <Textarea
              id="id1"
              name="id1"
              placeholder="내용을 입력하세요"
              value={defaultValue}
              onChange={(e) => setDefaultValue(e.target.value)}
            />
          </div>

          {/* 글자 수 표시 */}
          <div className="guide-item">
            <h4>글자 수 표시</h4>

            <Textarea
              id="id2"
              name="id2"
              showCount
              maxLength={500}
              value={countValue}
              onChange={(e) => setCountValue(e.target.value)}
            />
          </div>

          {/* guideText */}
          <div className="guide-item">
            <h4>guideText 사용</h4>

            <Textarea
              id="id3"
              name="id3"
              guideText="최대 500자까지 입력 가능합니다."
            />
          </div>

          {/* resize 허용 */}
          <div className="guide-item">
            <h4>resize 허용</h4>

            <Textarea
              id="id4"
              name="id4"
              canResize
              value={resizeValue}
              onChange={(e) => setResizeValue(e.target.value)}
            />
          </div>

          {/* 에러 상태 */}
          <div className="guide-item">
            <h4>에러 상태</h4>

            <Textarea
              id="id5"
              name="id5"
              value={errorValue}
              onChange={(e) => setErrorValue(e.target.value)}
              error
              errorText={"10자 이상 입력해주세요."}
            />
          </div>
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

export default TextareaGuide;
