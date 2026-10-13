import { useEffect, useRef, useState } from "react";

export default function ScrollBox() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [hasScroll, setHasScroll] = useState(false);
  const [isShowCont, setIsShowCont] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    setHasScroll(el.scrollHeight > el.clientHeight);
  }, [isShowCont]);

  return (
    <>
      <div
        ref={boxRef}
        className={`scroll_box max-h-[300px] overflow-y-auto ${
          hasScroll ? "pr-0" : "pr-4"
        }`.trim()}
      >
        {isShowCont && (
          <>
            {/* 기존 컨텐츠 */}
            {Array.from({ length: 70 }, (_, i) => (
              <div key={i}>1111</div>
            ))}
          </>
        )}
      </div>

      <p>
        세로 스크롤: {hasScroll ? "있음" : "없음"}
        <button type="button" onClick={() => setIsShowCont(true)}>
          클릭
        </button>
      </p>
    </>
  );
}
