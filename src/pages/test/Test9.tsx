import { useEffect, useRef, useState } from "react";

export default function ScrollBox() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [hasScroll, setHasScroll] = useState(false);
  const [isShowCont, setIsShowCont] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const checkScroll = () => {
      setHasScroll(el.scrollHeight > el.clientHeight);
    };

    checkScroll();

    const observer = new ResizeObserver(checkScroll);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={boxRef} className="scroll_box max-h-[300px] overflow-y-auto">
        {isShowCont && (
          <>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
            <div>1111</div>
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
