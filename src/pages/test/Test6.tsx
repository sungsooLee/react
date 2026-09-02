import { useState } from "react";
import "./Test6.scss";

const Test6 = () => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = (group: string) => {
    setActiveGroup(group);
  };

  const handleMouseLeave = () => {
    setActiveGroup(null);
  };

  const getRowClassName = (group: string) =>
    activeGroup === group ? "active" : "";

  return (
    <div className="table_wrap">
      <table>
        <thead>
          <tr>
            <th scope="col">제목1</th>
            <th scope="col">제목2</th>
            <th scope="col">제목3</th>
            <th scope="col">제목4</th>
            <th scope="col">제목5</th>
          </tr>
        </thead>

        <tbody>
          {/* 답1 */}
          <tr
            className={getRowClassName("answer1")}
            onMouseEnter={() => handleMouseEnter("answer1")}
            onMouseLeave={handleMouseLeave}
          >
            <td rowSpan={3}>답1</td>
            <td>답1-1</td>
            <td>답1-2</td>
            <td>답1-3</td>
            <td rowSpan={3}>답1-3</td>
          </tr>

          <tr
            className={getRowClassName("answer1")}
            onMouseEnter={() => handleMouseEnter("answer1")}
            onMouseLeave={handleMouseLeave}
          >
            <td>답1-1-1</td>
            <td>답1-2-2</td>
            <td>답1-3-3</td>
          </tr>

          <tr
            className={getRowClassName("answer1")}
            onMouseEnter={() => handleMouseEnter("answer1")}
            onMouseLeave={handleMouseLeave}
          >
            <td>답1-1-1</td>
            <td>답1-2-2</td>
            <td>답1-3-3</td>
          </tr>

          {/* 펼침 영역 */}
          {isOpen && (
            <>
              {/* 답2 */}
              <tr
                className={getRowClassName("answer2")}
                onMouseEnter={() => handleMouseEnter("answer2")}
                onMouseLeave={handleMouseLeave}
              >
                <td>답2</td>
                <td>답2-1</td>
                <td>답2-2</td>
                <td>답2-3</td>
                <td>답2-3</td>
              </tr>

              {/* 답3 */}
              <tr
                className={getRowClassName("answer3")}
                onMouseEnter={() => handleMouseEnter("answer3")}
                onMouseLeave={handleMouseLeave}
              >
                <td>답3</td>
                <td>답3-1</td>
                <td>답3-2</td>
                <td>답3-3</td>
                <td>답3-3</td>
              </tr>
            </>
          )}
        </tbody>
      </table>

      <button
        type="button"
        className="table_toggle"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{isOpen ? "접기" : "펼치기"}</span>
        <span className={`arrow ${isOpen ? "open" : ""}`} aria-hidden="true">
          ⌄
        </span>
      </button>
    </div>
  );
};

export default Test6;
