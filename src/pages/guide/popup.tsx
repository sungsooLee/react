import { useState } from "react";
import { PopupGroup } from "@/components/common/popup/Popup";
import "./guide.scss";

const PopupGuide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalLargeOpen, setIsModalLargeOpen] = useState(false);
  const [isLayerOpen, setIsLayerOpen] = useState(false);

  const modalCode = `import { useState } from "react";
import { PopupGroup } from "@/components/common/popup/Popup";

const [isOpen, setIsOpen] = useState(false);

<button className="btn-guide" onClick={() => setIsOpen(true)}>Modal 열기</button>
<PopupGroup
  variant="modal"
  title="타이틀"
  size="medium"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  content={<div>Modal 팝업 내용입니다.</div>}
  footer={
    <>
      <button type="button" className="btn-guide" onClick={() => setIsOpen(false)}>취소</button>
      <button type="button" className="btn-guide" onClick={() => setIsOpen(false)}>확인</button>
    </>
  }
/>`;

  const layerCode = `import { useState } from "react";
import { PopupGroup } from "@/components/common/popup/Popup";

const [isOpen, setIsOpen] = useState(false);

<button className="btn-guide" onClick={() => setIsOpen(true)}>Layer 열기</button>
<PopupGroup
  variant="layer"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  content={<div>Layer 팝업 내용입니다.</div>}
/>`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Popup</h2>
      <p>
        Modal(중앙, dim)과 Layer(중앙, 560×640, dim 없음) 타입을 지원하는
        팝업 컴포넌트입니다.
      </p>

      <div className="section">
        <h3>Preview (Modal)</h3>
        <p>
          헤더·푸터가 있으며, Modal 열릴 때 body 스크롤이 잠깁니다. size는
          medium, large를 사용합니다.
        </p>
        <div className="preview-box">
          <button className="btn-guide" onClick={() => setIsModalOpen(true)}>
            Modal 열기
          </button>
          <button
            className="btn-guide"
            onClick={() => setIsModalLargeOpen(true)}
          >
            Modal Large 열기
          </button>
          <PopupGroup
            variant="modal"
            title="타이틀"
            size="medium"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            content={<div>Modal 팝업 내용입니다.</div>}
            footer={
              <>
                <button
                  type="button"
                  className="btn-guide"
                  onClick={() => setIsModalOpen(false)}
                >
                  취소
                </button>
                <button
                  type="button"
                  className="btn-guide"
                  onClick={() => setIsModalOpen(false)}
                >
                  확인
                </button>
              </>
            }
          />
          <PopupGroup
            variant="modal"
            title="타이틀"
            size="large"
            isOpen={isModalLargeOpen}
            onClose={() => setIsModalLargeOpen(false)}
            content={<div>넓은 Modal 팝업 내용입니다.</div>}
            footer={
              <>
                <button
                  type="button"
                  className="btn-guide"
                  onClick={() => setIsModalLargeOpen(false)}
                >
                  취소
                </button>
                <button
                  type="button"
                  className="btn-guide"
                  onClick={() => setIsModalLargeOpen(false)}
                >
                  저장
                </button>
              </>
            }
          />
        </div>
      </div>

      <div className="section">
        <div className="code-header">
          <h3>Code</h3>
          <button onClick={() => handleCopy(modalCode)} className="copy-btn">
            복사
          </button>
        </div>
        <pre className="code-block">
          <code>{modalCode}</code>
        </pre>
      </div>

      <div className="section">
        <h3>Preview (Layer)</h3>
        <p>
          dim 없음, body 스크롤 잠금 없음. 하단에 「오늘 하루 보지 않기」
          체크박스 UI가 표시되며(표시용), 닫기는 × 버튼(onClose)으로
          합니다. 문구 변경 시 hideTodayText를 사용합니다.
        </p>
        <div className="preview-box">
          <button className="btn-guide" onClick={() => setIsLayerOpen(true)}>
            Layer 열기
          </button>
          <PopupGroup
            variant="layer"
            isOpen={isLayerOpen}
            onClose={() => setIsLayerOpen(false)}
            content={<div>Layer 팝업 내용입니다.</div>}
          />
        </div>
      </div>

      <div className="section">
        <div className="code-header">
          <h3>Code</h3>
          <button onClick={() => handleCopy(layerCode)} className="copy-btn">
            복사
          </button>
        </div>
        <pre className="code-block">
          <code>{layerCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default PopupGuide;
