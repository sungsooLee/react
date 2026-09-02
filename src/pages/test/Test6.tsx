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
            <th scope="col">제목6</th>
            <th scope="col">제목7</th>
            <th scope="col">제목8</th>
            <th scope="col">제목9</th>
            <th scope="col">제목10</th>
          </tr>
        </thead>

        <tbody>
          {/* group1 */}
          <tr
            className={getRowClassName("group1")}
            onMouseEnter={() => handleMouseEnter("group1")}
            onMouseLeave={handleMouseLeave}
          >
            <td>요구불예금</td>
            <td>-</td>
            <td>0.10%</td>
            <td>0.10%</td>
            <td>-</td>
            <td>4.09%</td>
            <td>-</td>
            <td>3.52%</td>
            <td>-</td>
            <td></td>
          </tr>
          {/* group2 */}
          <tr
            className={getRowClassName("group2")}
            onMouseEnter={() => handleMouseEnter("group2")}
            onMouseLeave={handleMouseLeave}
          >
            <td>개인MMDA</td>
            <td>30일미만</td>
            <td>0.30%</td>
            <td>0.10%</td>
            <td>-</td>
            <td>4.12%</td>
            <td>-</td>
            <td>3.46%</td>
            <td>-</td>
            <td>0.89%</td>
          </tr>
          {/* group3 */}
          <tr
            className={getRowClassName("group3")}
            onMouseEnter={() => handleMouseEnter("group3")}
            onMouseLeave={handleMouseLeave}
          >
            <td>기업자유</td>
            <td>-</td>
            <td>0.10%</td>
            <td>0.10%</td>
            <td>-</td>
            <td>4.02%</td>
            <td>-</td>
            <td>3.46%</td>
            <td>-</td>
            <td></td>
          </tr>
          {/* group4 */}
          <tr
            className={getRowClassName("group4")}
            onMouseEnter={() => handleMouseEnter("group4")}
            onMouseLeave={handleMouseLeave}
          >
            <td>기업MMDA</td>
            <td>30일미만</td>
            <td>0.30%</td>
            <td>0.30%</td>
            <td>0.90%</td>
            <td>3.15%</td>
            <td>-0.15%</td>
            <td>2.29%</td>
            <td>1.69%</td>
            <td>0.25%</td>
          </tr>
          {/* group5 */}
          <tr
            className={getRowClassName("group5")}
            onMouseEnter={() => handleMouseEnter("group5")}
            onMouseLeave={handleMouseLeave}
          >
            <td rowSpan={6}>정기예금</td>
            <td>1개월이상</td>
            <td>1.80%</td>
            <td>1.80%</td>
            <td>2.60%</td>
            <td>3.14%</td>
            <td>-0.10%</td>
            <td>0.99%</td>
            <td>0.19%</td>
            <td rowSpan={6}>
              평균
              <br />
              0.16%
            </td>
          </tr>
          <tr
            className={getRowClassName("group5")}
            onMouseEnter={() => handleMouseEnter("group5")}
            onMouseLeave={handleMouseLeave}
          >
            <td>2개월이상</td>
            <td>1.80%</td>
            <td>1.80%</td>
            <td>2.73%</td>
            <td>3.22%</td>
            <td>-0.05%</td>
            <td>1.12%</td>
            <td>0.19%</td>
          </tr>
          <tr
            className={getRowClassName("group5")}
            onMouseEnter={() => handleMouseEnter("group5")}
            onMouseLeave={handleMouseLeave}
          >
            <td>3개월이상</td>
            <td>1.85%</td>
            <td>1.85%</td>
            <td>2.86%</td>
            <td>3.30%</td>
            <td>0.00%</td>
            <td>1.20%</td>
            <td>0.19%</td>
          </tr>
          <tr
            className={getRowClassName("group5")}
            onMouseEnter={() => handleMouseEnter("group5")}
            onMouseLeave={handleMouseLeave}
          >
            <td>6개월이상</td>
            <td>1.90%</td>
            <td>1.90%</td>
            <td>3.24%</td>
            <td>3.69%</td>
            <td>0.00%</td>
            <td>1.53%</td>
            <td>0.19%</td>
          </tr>
          <tr
            className={getRowClassName("group5")}
            onMouseEnter={() => handleMouseEnter("group5")}
            onMouseLeave={handleMouseLeave}
          >
            <td>9개월이상</td>
            <td>1.90%</td>
            <td>1.90%</td>
            <td>3.41%</td>
            <td>3.94%</td>
            <td>-0.08%</td>
            <td>1.70%</td>
            <td>0.19%</td>
          </tr>
          <tr
            className={getRowClassName("group5")}
            onMouseEnter={() => handleMouseEnter("group5")}
            onMouseLeave={handleMouseLeave}
          >
            <td>12개월이상</td>
            <td>1.95%</td>
            <td>1.95%</td>
            <td>3.58%</td>
            <td>4.19%</td>
            <td>-0.15%</td>
            <td>1.82%</td>
            <td>0.19%</td>
          </tr>
          {/* group6 */}
          <tr
            className={getRowClassName("group6")}
            onMouseEnter={() => handleMouseEnter("group6")}
            onMouseLeave={handleMouseLeave}
          >
            <td rowSpan={6}>
              CD플러스
              <br />
              (최장2년)
            </td>
            <td>30일이상</td>
            <td>자금부</td>
            <td>자금부</td>
            <td>자금부</td>
            <td>3.14%</td>
            <td>-</td>
            <td>자금부</td>
            <td>자금부</td>
            <td rowSpan={6}>0.17%</td>
          </tr>
          <tr
            className={getRowClassName("group6")}
            onMouseEnter={() => handleMouseEnter("group6")}
            onMouseLeave={handleMouseLeave}
          >
            <td>60일이상</td>
            <td>자금부</td>
            <td>자금부</td>
            <td>자금부</td>
            <td>3.22%</td>
            <td>-</td>
            <td>자금부</td>
            <td>자금부</td>
          </tr>
          <tr
            className={getRowClassName("group6")}
            onMouseEnter={() => handleMouseEnter("group6")}
            onMouseLeave={handleMouseLeave}
          >
            <td>91일이상</td>
            <td>자금부</td>
            <td>자금부</td>
            <td>자금부</td>
            <td>3.30%</td>
            <td>-</td>
            <td>자금부</td>
            <td>자금부</td>
          </tr>
          <tr
            className={getRowClassName("group6")}
            onMouseEnter={() => handleMouseEnter("group6")}
            onMouseLeave={handleMouseLeave}
          >
            <td>180일이상</td>
            <td>자금부</td>
            <td>자금부</td>
            <td>자금부</td>
            <td>3.69%</td>
            <td>-</td>
            <td>자금부</td>
            <td>자금부</td>
          </tr>
          <tr
            className={getRowClassName("group6")}
            onMouseEnter={() => handleMouseEnter("group6")}
            onMouseLeave={handleMouseLeave}
          >
            <td>270일이상</td>
            <td>자금부</td>
            <td>자금부</td>
            <td>자금부</td>
            <td>3.94%</td>
            <td>-</td>
            <td>자금부</td>
            <td>자금부</td>
          </tr>
          <tr
            className={getRowClassName("group6")}
            onMouseEnter={() => handleMouseEnter("group6")}
            onMouseLeave={handleMouseLeave}
          >
            <td>365일이상</td>
            <td>자금부</td>
            <td>자금부</td>
            <td>자금부</td>
            <td>4.19%</td>
            <td>-</td>
            <td>자금부</td>
            <td>자금부</td>
          </tr>

          {/* 펼침 영역 */}
          {isOpen && (
            <>
              {/* group7 */}
              <tr
                className={getRowClassName("group7")}
                onMouseEnter={() => handleMouseEnter("group7")}
                onMouseLeave={handleMouseLeave}
              >
                <td rowSpan={6}>
                  표지어음 <br />
                  (최장270일)
                </td>
                <td>30일이상</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>3.14%</td>
                <td>-</td>
                <td>자금부</td>
                <td>자금부</td>
                <td rowSpan={6}>0.17%</td>
              </tr>
              <tr
                className={getRowClassName("group7")}
                onMouseEnter={() => handleMouseEnter("group7")}
                onMouseLeave={handleMouseLeave}
              >
                <td>60일이상</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>3.22%</td>
                <td>-</td>
                <td>자금부</td>
                <td>자금부</td>
              </tr>
              <tr
                className={getRowClassName("group7")}
                onMouseEnter={() => handleMouseEnter("group7")}
                onMouseLeave={handleMouseLeave}
              >
                <td>91일이상</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>3.30%</td>
                <td>-</td>
                <td>자금부</td>
                <td>자금부</td>
              </tr>
              <tr
                className={getRowClassName("group7")}
                onMouseEnter={() => handleMouseEnter("group7")}
                onMouseLeave={handleMouseLeave}
              >
                <td>180일이상</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>3.69%</td>
                <td>-</td>
                <td>자금부</td>
                <td>자금부</td>
              </tr>
              <tr
                className={getRowClassName("group7")}
                onMouseEnter={() => handleMouseEnter("group6")}
                onMouseLeave={handleMouseLeave}
              >
                <td>270일이상</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>3.94%</td>
                <td>-</td>
                <td>자금부</td>
                <td>자금부</td>
              </tr>
              <tr
                className={getRowClassName("group6")}
                onMouseEnter={() => handleMouseEnter("group6")}
                onMouseLeave={handleMouseLeave}
              >
                <td>365일이상</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>4.19%</td>
                <td>-</td>
                <td>자금부</td>
                <td>자금부</td>
              </tr>
              {/* group8 */}
              <tr
                className={getRowClassName("group8")}
                onMouseEnter={() => handleMouseEnter("group8")}
                onMouseLeave={handleMouseLeave}
              >
                <td rowSpan={6}>
                  RP
                  <br />
                  (최장1년)
                </td>
                <td>30일이상</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>3.14%</td>
                <td>-</td>
                <td>자금부</td>
                <td>자금부</td>
                <td rowSpan={6}>0.09%</td>
              </tr>
              <tr
                className={getRowClassName("group8")}
                onMouseEnter={() => handleMouseEnter("group8")}
                onMouseLeave={handleMouseLeave}
              >
                <td>91일이상</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>3.30%</td>
                <td>-</td>
                <td>자금부</td>
                <td>자금부</td>
              </tr>
              <tr
                className={getRowClassName("group8")}
                onMouseEnter={() => handleMouseEnter("group8")}
                onMouseLeave={handleMouseLeave}
              >
                <td>180일이상</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>3.69%</td>
                <td>-</td>
                <td>자금부</td>
                <td>자금부</td>
              </tr>
              <tr
                className={getRowClassName("group8")}
                onMouseEnter={() => handleMouseEnter("group8")}
                onMouseLeave={handleMouseLeave}
              >
                <td>270일이상</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>3.94%</td>
                <td>-</td>
                <td>자금부</td>
                <td>자금부</td>
              </tr>
              <tr
                className={getRowClassName("group8")}
                onMouseEnter={() => handleMouseEnter("group8")}
                onMouseLeave={handleMouseLeave}
              >
                <td>365일이상</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>자금부</td>
                <td>4.19%</td>
                <td>-</td>
                <td>자금부</td>
                <td>자금부</td>
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
        <span>과목{isOpen ? "접기" : "더보기"}</span>
        <span className={`arrow ${isOpen ? "open" : ""}`} aria-hidden="true">
          ⌄
        </span>
      </button>
    </div>
  );
};

export default Test6;
