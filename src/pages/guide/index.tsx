import React, { useMemo, useState } from "react";

import { guideData } from "./data/guideData";
import { ListItem } from "./type/guide";
import { Link } from "react-router-dom";
import cn from "classnames";
import "./guide.scss";

/* 상태 계산 */
const getStatus = (item: ListItem) => {
  if (item.completionDate) return "완료";
  if (item.remarks?.includes("작업중")) return "진행중";
  return "대기";
};

const statusClassMap: Record<string, string> = {
  완료: "status-complete",
  진행중: "status-progress",
  대기: "status-wait",
};

const TaskList: React.FC = () => {
  const [keyword, setKeyword] = useState("");

  /* 검색 */
  const filteredData = useMemo(() => {
    return guideData.filter((item) =>
      item.screenName.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [keyword]);

  /* 통계 */
  const stats = useMemo(() => {
    const total = filteredData.length;
    const completed = filteredData.filter((i) => i.completionDate).length;
    const remaining = total - completed;

    return { total, completed, remaining };
  }, [filteredData]);

  const progress = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

  return (
    <div className="wrapper">
      {/* 🔥 헤더 */}
      <div className="header">
        <div>
          <h2 className="title">퍼블리싱 작업 리스트</h2>
          <p className="sub">작업 진행 현황을 한눈에 확인하세요</p>
        </div>

        <Link to="guidePage" className="btn-guide">
          퍼블 가이드 보기
        </Link>
      </div>

      {/* 🔥 툴바 */}
      <div className="toolbar">
        <input
          className="search"
          placeholder="스크린명 검색..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <div className="statsBox">
          <div className="stat-card">
            <div className="stat-label">총</div>
            <div className="stat-value">{stats.total}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">완료</div>
            <div className="stat-value">{stats.completed}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">남은</div>
            <div className="stat-value">{stats.remaining}</div>
          </div>

          <div className="stat-card">
            <div className="stat-label">완료율</div>
            <div className="stat-value">{progress.toFixed(1)}%</div>
          </div>
        </div>
      </div>

      {/* 🔥 진행바 */}
      <div className="graph">
        <div className="completed" style={{ width: `${progress}%` }} />
      </div>

      {/* 🔥 테이블 */}
      <div className="table-wrap">
        <table className="table">
          <colgroup>
            <col style={{ width: "200px" }} />
            <col />
            <col style={{ width: "300px" }} />
            <col style={{ width: "150px" }} />
            <col style={{ width: "150px" }} />
            <col style={{ width: "150px" }} />
            <col style={{ width: "150px" }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>메뉴명</th>
              <th>화면경로</th>
              <th>화면ID</th>
              <th className={"center"}>타입</th>
              <th className={"center"}>완료일</th>
              <th className={"center"}>수정일</th>
              <th className={"center"}>상태</th>
              <th className={"center"}>비고</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => {
              const status = getStatus(item);

              return (
                <tr key={item.id}>
                  <td>{item.menuName}</td>
                  <td className="name">{item.screenName}</td>

                  <td>
                    {item.pageLink && (
                      <Link to={item.pageLink} className="link">
                        {item.pageLink}
                      </Link>
                    )}
                    {item.pageId && <span> ({item.pageId})</span>}
                  </td>

                  <td className={"center"}>{item.pageType}</td>
                  <td className={"center"}>{item.completionDate || "-"}</td>
                  <td className={"center"}>{item.lastUpdateDate || "-"}</td>
                  <td className={cn(statusClassMap[status], "center")}>
                    {status}
                  </td>
                  <td className={"center"}>{item.remarks}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
