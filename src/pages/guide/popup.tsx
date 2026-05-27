import React, { useState } from "react";
import cn from "classnames";
import { PopupGroup } from "@/components/common/popup/Popup"
import "./guide.scss";

const TabGroupGuide = () => {

  const code = `import { PopupGroup } from "@/components/common/popup/Popup";

  const [isOpen, setIsOpen] = useState(false);
  const handleClosePopup = () => {
    setIsOpen(false);
  }

  <button className="btn-guide" onClick={() => setIsOpen(true)}>바텀 팝업 열기</button>
  <PopupGroup
    title="타이틀" 
    style="bottom"
    isOpen={isOpen}
    onClose={handleClosePopup}
    content={
    <div>바텀 팝업 내용입니다.</div>
  } />`;

  const code2 = `import { PopupGroup } from "@/components/common/popup/Popup";

  const [isOpen2, setIsOpen2] = useState(false);
  const handleClosePopup2 = () => {
    setIsOpen2(false);
  }

  <button className="btn-guide" onClick={() => setIsOpen2(true)}>전체 풀 팝업 열기</button>
  <PopupGroup
    title="타이틀" 
    style="full"
    isOpen={isOpen2}
    onClose={handleClosePopup2}
    content={
    <div>전체 풀 팝업 내용입니다.</div>
  } />`;

  const code3 = `import { PopupGroup } from "@/components/common/popup/Popup";

  const [isOpen3, setIsOpen3] = useState(false);
  const handleClosePopup3 = () => {
    setIsOpen3(false);
  }

  <button className="btn-guide" onClick={() => setIsOpen3(true)}>중앙 팝업 열기</button>
  <PopupGroup
    title="타이틀" 
    style="center"
    isOpen={isOpen3}
    onClose={handleClosePopup3}
    content={
    <div>중앙 팝업 내용입니다.</div>
  } />`;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  const handleCopy2 = () => {
    navigator.clipboard.writeText(code2);
    alert("복사 완료!");
  };

  const handleCopy3 = () => {
    navigator.clipboard.writeText(code3);
    alert("복사 완료!");
  };


  const [isOpen, setIsOpen] = useState(false);
  const handleClosePopup = () => {
    setIsOpen(false);
  }

  const [isOpen2, setIsOpen2] = useState(false);
  const handleClosePopup2 = () => {
    setIsOpen2(false);
  }

  const [isOpen3, setIsOpen3] = useState(false);
  const handleClosePopup3 = () => {
    setIsOpen3(false);
  }
  
  return (
    <div className="guide-detail">
      
      <div className="section">
        <button className="btn-guide" onClick={() => setIsOpen(true)}>바텀 팝업 열기</button>
        <PopupGroup
          title="타이틀" 
          style="bottom"
          isOpen={isOpen}
          onClose={handleClosePopup}
          content={
            <div>바텀 팝업 내용입니다.</div>
          }
        />
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

      <div className="section">
        <button className="btn-guide" onClick={() => setIsOpen2(true)}>전체 풀 팝업 열기</button>
          <PopupGroup
          title="타이틀" 
          style="full"
          isOpen={isOpen2}
          onClose={handleClosePopup2}
          content={
            <div>전체 풀 팝업 내용입니다.</div>
          }
        />
      </div>

      {/* Code */}
      <div className="section">
        <div className="code-header">
          <h3>Code</h3>
          <button onClick={handleCopy2} className="copy-btn">
            복사
          </button>
        </div>

        <pre className="code-block">
          <code>{code2}</code>
        </pre>
      </div>

      <div className="section">
        <button className="btn-guide" onClick={() => setIsOpen3(true)}>중앙 팝업 열기</button>
          <PopupGroup
          title="타이틀" 
          style="center"
          isOpen={isOpen3}
          onClose={handleClosePopup3}
          content={
            <div>중앙 팝업 내용입니다.</div>
          }
        />
      </div>

      {/* Code */}
      <div className="section">
        <div className="code-header">
          <h3>Code</h3>
          <button onClick={handleCopy3} className="copy-btn">
            복사
          </button>
        </div>

        <pre className="code-block">
          <code>{code3}</code>
        </pre>
      </div>

    </div>
  );
};

export default TabGroupGuide;
