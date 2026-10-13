import { useEffect, useRef, useState } from "react";

export default function ScrollBox() {
  const boxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    const content = contentRef.current;

    if (!box || !content) return;

    const checkScroll = () => {
      setHasScroll(box.scrollHeight > box.clientHeight);
    };

    const observer = new ResizeObserver(checkScroll);

    observer.observe(content);
    checkScroll();

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={boxRef}
      className={`max-h-[300px] overflow-y-auto ${hasScroll ? "pr-0" : "pr-4"}`}
    >
      <div ref={contentRef}>
        {/* API 데이터 또는 동적으로 변경되는 컨텐츠 */}
      </div>
    </div>
  );
}
