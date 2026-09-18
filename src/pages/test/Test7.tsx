import { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
  expanded: boolean;
}

const initialData: AccordionItem[] = [
  {
    id: 1,
    title: "첫 번째 항목",
    content: "첫 번째 항목의 상세 내용입니다.",
    expanded: true,
  },
  {
    id: 2,
    title: "두 번째 항목",
    content: "두 번째 항목의 상세 내용입니다.",
    expanded: false,
  },
  {
    id: 3,
    title: "세 번째 항목",
    content: "세 번째 항목의 상세 내용입니다.",
    expanded: true,
  },
];

const Test7 = () => {
  const [list, setList] = useState<AccordionItem[]>(initialData);

  const handleToggle = (id: number) => {
    setList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              expanded: !item.expanded,
            }
          : item,
      ),
    );
  };

  return (
    <ul className="accordion">
      {list.map((item) => {
        const contentId = `accordion-content-${item.id}`;

        return (
          <li className="accordion_item" key={item.id}>
            <div className="accordion_header">
              <h3 className="accordion_title">{item.title}</h3>

              <button
                type="button"
                className="accordion_button"
                aria-expanded={item.expanded}
                aria-controls={contentId}
                onClick={() => handleToggle(item.id)}
              >
                <span className="sr_only">{item.title}</span>
                {item.expanded ? "접기" : "펼치기"}
              </button>
            </div>

            <div
              id={contentId}
              className="accordion_content"
              hidden={!item.expanded}
            >
              <p>{item.content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Test7;
