import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { allGuideData } from "./data";
import { ListItem } from "./data/guideData";
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

interface RenderListItem extends ListItem {
  autoId: number;
  _displayMenuName: string;
  _searchMenuName: string;
}

const TaskList: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [activeTab, setActiveTab] = useState("전체");

  /* 🔥 데이터 1차 가공 (스프레드시트 구조 상속 및 일련번호 자동 생성) */
  const preparedData = useMemo<RenderListItem[]>(() => {
    let currentMenu = "공통";
    return allGuideData.map((item, index) => {
      if (item.menuName && item.menuName.trim() !== "") {
        currentMenu = item.menuName;
      }
      return {
        ...item,
        autoId: index + 1,
        _displayMenuName: item.menuName,
        _searchMenuName: currentMenu,
      };
    });
  }, []);

  /* 📑 탭 메뉴 목록 동적 추출 */
  const tabList = useMemo<string[]>(() => {
    const menus = preparedData.map((item) => item._searchMenuName);
    return ["전체", ...Array.from(new Set(menus))];
  }, [preparedData]);

  /* 🔍 탭 필터링 + 검색어 필터링 통합 적용 */
  const filteredData = useMemo<RenderListItem[]>(() => {
    const lowerKeyword = keyword.toLowerCase();

    return preparedData.filter((item) => {
      const matchesTab =
        activeTab === "전체" || item._searchMenuName === activeTab;
      const matchesKeyword =
        item.screenName.toLowerCase().includes(lowerKeyword) ||
        item._searchMenuName.toLowerCase().includes(lowerKeyword);

      return matchesTab && matchesKeyword;
    });
  }, [keyword, preparedData, activeTab]);

  /* 📊 통계 */
  const stats = useMemo(() => {
    const total = filteredData.length;
    const completed = filteredData.filter((i) => i.completionDate).length;
    const remaining = total - completed;

    return { total, completed, remaining };
  }, [filteredData]);

  const progress = stats.total > 0 ? (stats.completed / stats.total) * 100 : 0;

  return (
    <div className="wrapper">
      {/* 💻 헤더 */}
      <div className="header">
        <div>
          <h2 className="title">퍼블리싱 작업 리스트</h2>
          <p className="sub">작업 진행 현황을 한눈에 확인하세요</p>
        </div>

        <Link to="guidePage" className="btn-guide">
          퍼블 가이드 보기
        </Link>
      </div>

      {/* 💻 툴바 */}
      <div className="toolbar">
        <input
          className="search"
          placeholder="메뉴명 또는 스크린명 검색..."
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

      <div className="pub-tabs">
        {tabList.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "is-active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 💻 진행바 */}
      <div className="graph">
        <div className="completed" style={{ width: `${progress}%` }} />
      </div>

      {/* 💻 테이블 */}
      <div className="table-wrap">
        <table className="table">
          <colgroup>
            <col style={{ width: "60px" }} />
            <col style={{ width: "150px" }} />
            <col />
            <col style={{ width: "250px" }} />
            <col style={{ width: "120px" }} />
            <col style={{ width: "120px" }} />
            <col style={{ width: "120px" }} />
            <col style={{ width: "120px" }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>메뉴명</th>
              <th>화면경로</th>
              <th>화면ID / 링크</th>
              <th className="center">타입</th>
              <th className="center">완료일</th>
              <th className="center">수정일</th>
              <th className="center">상태</th>
              <th className="center">비고</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => {
              const status = getStatus(item);
              const routerLink = `/pub/${item.pageLink.toLowerCase()}`;
              const hasLink = item.pageLink && item.pageLink.trim() !== "";

              return (
                <tr key={`${item.autoId}_${item.pageId}`}>
                  <td
                    className="center"
                    style={{ color: "#888", fontWeight: "bold" }}
                  >
                    {item.autoId}
                  </td>

                  <td
                    style={{
                      fontWeight: item._displayMenuName ? "bold" : "normal",
                    }}
                  >
                    {item._displayMenuName}
                  </td>

                  <td className="name">{item.screenName}</td>

                  <td>
                    {hasLink ? (
                      <Link
                        to={routerLink}
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.pageLink} ↗
                      </Link>
                    ) : (
                      <span style={{ color: "#ccc", fontSize: "12px" }}>
                        링크 없음
                      </span>
                    )}
                    {item.pageId && (
                      <span style={{ color: "#e01e5a" }}> ({item.pageId})</span>
                    )}
                  </td>

                  <td className="center">{item.pageType}</td>
                  <td
                    className="center"
                    style={{ color: "#2e7d32", fontWeight: "bold" }}
                  >
                    {item.completionDate || "-"}
                  </td>
                  <td className="center" style={{ color: "#c62828" }}>
                    {item.lastUpdateDate || "-"}
                  </td>
                  {/* 템플릿 리터럴을 활용해 외부 라이브러리 없이 유동적인 상태 배지 스타일 결합 */}
                  <td
                    className={`center status-badge ${statusClassMap[status]}`}
                  >
                    <span>{status}</span>
                  </td>
                  <td>{item.remarks || "-"}</td>
                </tr>
              );
            })}
            {filteredData.length === 0 && (
              <tr>
                <td
                  colSpan={9}
                  className="center"
                  style={{ padding: "40px", color: "#999" }}
                >
                  검색 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
