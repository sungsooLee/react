import Accordion from "@/components/common/accordion/Accordion";
import "./guide.scss";

const accordionItems = [
  {
    id: "faq-1",
    title: "아코디언이 무엇인가요?",
    content: (
      <p>
        제목을 클릭하면 내용이 펼쳐지거나 접히는 UI 컴포넌트입니다. FAQ,
        약관, 상세 설명 영역에 자주 사용합니다.
      </p>
    ),
    defaultOpen: true,
  },
  {
    id: "faq-2",
    title: "여러 개를 동시에 열 수 있나요?",
    content: (
      <p>
        <code>multiOpen</code> prop을 <code>true</code>로 주면 여러 항목을
        동시에 열 수 있습니다.
      </p>
    ),
  },
  {
    id: "faq-3",
    title: "하나만 열리게 할 수 있나요?",
    content: (
      <p>
        <code>multiOpen=false</code>로 설정하면 한 번에 하나만 열립니다.
      </p>
    ),
  },
];

const AccordionGuide = () => {
  const code = `import Accordion from "@/components/common/accordion/Accordion";

const items = [
  {
    id: "faq-1",
    title: "아코디언이 무엇인가요?",
    content: <p>내용</p>,
    defaultOpen: true,
  },
  {
    id: "faq-2",
    title: "여러 개를 동시에 열 수 있나요?",
    content: <p>multiOpen 사용</p>,
  },
];

<Accordion items={items} multiOpen />`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Accordion</h2>
      <p>제목 클릭 시 내용이 펼쳐지는 아코디언 컴포넌트입니다.</p>

      <div className="section">
        <h3>Preview (multiOpen)</h3>
        <div className="preview-box">
          <Accordion items={accordionItems} multiOpen />
        </div>
      </div>

      <div className="section">
        <h3>Preview (single open)</h3>
        <div className="preview-box">
          <Accordion items={accordionItems} multiOpen={false} />
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

export default AccordionGuide;
