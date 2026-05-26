import React, { useState } from "react";
import { FormGroup } from "@/components/common/form/FormGroup";
import { FormItem } from "@/components/common/form/FormItem";
import { Textarea } from "@/components/common/textarea/Textarea";
import cn from "classnames";
import styles from "@/components/common/form/Form.module.scss";
import "./guide.scss";

const FormGuide = () => {
  const [userId, setUserId] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const code = `import { FormGroup } from "@/components/common/form/FormGroup";
import { FormItem } from "@/components/common/form/FormItem";

/* 1. 기본 텍스트 입력형 */
<FormGroup>
    <FormItem 
    label="아이디" 
    type="text" 
    placeholder="아이디를 입력하세요"
    guideText="영문, 숫자 조합 8자 이상"
    isRequired
    >
    {(fields) => (
        <div className={styles.inputBox}>
        <input {...fields} />
        </div>
    )}
    </FormItem>
</FormGroup>

/* 2. 버튼 결합 및 에러 상태 */
<FormGroup>
    <FormItem 
    label="휴대폰 번호" 
    type="tel"
    placeholder="숫자만 입력"
    errorText="전화번호 형식이 올바르지 않습니다."
    >
    {(fields) => (
        <>
        <div className={styles.inputBox}>
            <input {...fields} className={styles.isError} />
        </div>
        <button type="button" className={styles.sideBtn}>인증번호 발송</button>
        </>
    )}
    </FormItem>
</FormGroup>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Form</h2>
      <p>폼 요소의 그룹화와 고유 ID 자동 매핑을 지원하는 컴포넌트입니다.</p>

      {/* Preview */}
      <div className="section">
        <h3>Preview</h3>
        <div className="preview-box">
          <FormGroup>
            {/* 기본 케이스 */}
            <FormItem
              label={<span>아이디</span>}
              isRequired
              guideText="영문, 숫자 조합 8자 이상 입력해주세요."
              value={userId} // value 제어는 상위에서
            >
              {(fields) => (
                <div className={styles.inputBox}>
                  <input
                    {...fields}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                  {userId && (
                    <div className={styles.innerBtns}>
                      <button
                        onClick={() => setUserId("")}
                        style={{ border: "none", background: "none" }}
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              )}
            </FormItem>

            {/* 버튼 결합 및 에러 케이스 */}
            <FormItem
              label="휴대폰 번호"
              isRequired
              type="tel"
              errorText={
                phone.length > 0 && phone.length < 10
                  ? "올바른 번호를 입력하세요."
                  : ""
              }
            >
              {(fields) => (
                <>
                  <div className={styles.inputBox}>
                    <input
                      {...fields}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={cn({
                        [styles.isError]: phone.length > 0 && phone.length < 10,
                      })}
                    />
                  </div>
                  <button type="button" className={styles.sideBtn}>
                    인증번호 발송
                  </button>
                </>
              )}
            </FormItem>

            {/* textarea 케이스 */}
            <FormItem
              label="상세 의견"
              value={comment} // 현재 입력값 전달
            >
              {(fields) => (
                <Textarea
                  {...fields} // id, placeholder, type, value가 한 번에 전달됨
                  showCount
                  maxLength={500}
                  canResize={false}
                  onChange={(e) => setComment(e.target.value)}
                />
              )}
            </FormItem>
          </FormGroup>
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

export default FormGuide;
