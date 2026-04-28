// TaskList.tsx (더 심플 & 실무형 리팩토링 버전)
import React, { useMemo, useState } from "react";
import "./guide.scss";
import { guideData } from "./data/guideData";
import { ListItem } from "./type/guide";
import { Link } from "react-router-dom";

// 상태 계산 함수 (순수 함수로 분리)
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

  // 검색 필터
  const filteredData = useMemo(() => {
    return guideData.filter((item) =>
      item.screenName.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [keyword]);

  // 통계 (state 제거 → 자동 계산)
  const stats = useMemo(() => {
    const total = filteredData.length;
    const completed = filteredData.filter((i) => i.completionDate).length;
    const remaining = total - completed;

    return { total, completed, remaining };
  }, [filteredData]);

  const progress = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

  return (
    <div className="wrapper">
      <h2 className="title">퍼블리싱 작업 리스트</h2>

      {/* 검색 */}
      <input
        className="search"
        placeholder="검색..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* 통계 */}
      <div className="statsBox">
        <span>총: {stats.total}</span>
        <span>완료: {stats.completed}</span>
        <span>남은: {stats.remaining}</span>
        <span>완료율: {progress.toFixed(1)}%</span>
      </div>

      {/* 그래프 */}
      <div className="graph">
        <div className="completed" style={{ width: `${progress}%` }} />
        <div className="remaining" style={{ width: `${100 - progress}%` }} />
      </div>

      {/* 테이블 */}
      <table className="table">
        <thead>
          <tr>
            <th>스크린명</th>
            <th>페이지</th>
            <th>타입</th>
            <th>완료일</th>
            <th>수정일</th>
            <th>비고</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => {
            const status = getStatus(item);

            return (
              <tr key={item.id}>
                <td className="name">
                  {/* {item.depth} */}
                  {item.screenName}
                </td>

                <td>
                  {item.pageId && (
                    // <a href={item.pageId} target="_blank" rel="noreferrer">
                    //   {item.pageId}
                    // </a>
                    <Link to={item.pageId}>{item.pageId}</Link>
                  )}
                  {item.screenId && <span> ({item.screenId})</span>}
                </td>

                <td>{item.pageType}</td>
                <td>{item.completionDate || "-"}</td>
                <td>{item.lastUpdateDate || "-"}</td>
                <td>{item.remarks}</td>

                <td className={statusClassMap[status]}>{status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
