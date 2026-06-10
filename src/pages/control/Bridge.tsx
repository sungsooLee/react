import { useState } from "react";
import { PopupGroup } from "@/components/common/popup/Popup";
import { Button } from "@/components/common/button/Button";
import { MessageBox } from "@/components/ui/messageBox/MessageBox";
import { Badge } from "@/components/common/badge/Badge";
import "./Bridge.scss";
// import { TabGroup } from "@/components/common/tab/Tab";

// tab contents
// const AllCont = () => <div>전체 고객 콘텐츠 (여기에 복잡한 코드 작성)</div>;

const PopContents = () => (
  <>
    {/* table */}
    <div className="table_wrap horizontal">
      <table className="table">
        <caption className="sr_only">AI 집중점검 결과 상세</caption>

        <colgroup>
          <col style={{ width: "160px" }} />
          <col />
          <col style={{ width: "160px" }} />
          <col />
        </colgroup>

        <tbody>
          <tr>
            <th scope="row">관리조치(보고)명</th>
            <td>신탁업무 절차 점검 결과 검토</td>
            <th scope="row">점검주기</th>
            <td>분기별</td>
          </tr>
          <tr>
            <th scope="row">기안부서</th>
            <td>자산관리그룹</td>
            <th scope="row">기안자</th>
            <td>김우리 과장</td>
          </tr>
          <tr>
            <th scope="row">AI 분석일시</th>
            <td>2026-05-07 09:14</td>
            <th scope="row">집중점검 판단 유형</th>
            <td>과거 관리조치 수행 이력 + 감독기관 보도자료</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* MessageBox */}
    <MessageBox
      variant="result"
      title={"AI 종합판단 결과"}
      contents={
        <>
          <p>
            선택한 관리조치 항목은 과거 수행이력에서 반복 보완 이력이 확인되고,
            최근 감독기관 보도자료의 주요 지적사항과도 연결되어 집중점검 필요
            항목으로 표시되었습니다. 아래 근거 영역에서 과거 수행이력과 보도자료
            연결 근거를 각각 확인할 수 있습니다.
          </p>
        </>
      }
    />

    {/* MessageBox */}
    <MessageBox
      variant="summary"
      title={"AI 보도자료 핵심 요약"}
      contents={
        <>
          <p>
            최근 감독기관 보도자료 3건은 모두 승인 절차, 증빙 관리, 사후관리의
            미흡 사례를 공통적으로 다루고 있으며, 현재 관리조치의 점검 절차와
            절차상 유사한 구조를 갖습니다.
          </p>
          <ul>
            <li>
              <strong>승인 단계 누락 및 권한 분리 부족</strong> - 손실사건 등록
              후 책임자 승인이 사후 보완되거나 권한이 일원화된 사례 (2026-04-18
              금감원, 2026-02-14 금감원)
            </li>
            <li>
              <strong>증빙자료 미첨부 지연 첨부</strong> - 손실금액 산정 근거
              자료가 누락되거나 등록 후 익일 이상 경과하여 첨부된 사례
              (2026-04-18 금감원)
            </li>
            <li>
              <strong>후속조치·사후관리 미흡</strong> - 반복 지적사항에 대한
              조치계획 수립 및 이행 모니터링 부재 (2026-03-29 금융위)
            </li>
          </ul>
          <p>
            위 3건 공통 이슈는 현재 관리조치의 점검 항목인 승인 이력 확인 · 증빙
            첨부 여부 · 사후조치 완료 여부에 대해 이번 점검에서는 해당 항목이
            점검 결과에 충분히 반영되었는지 확인을 권장합니다.
          </p>
        </>
      }
    />

    <h2 className="title_h2">연관 보도자료 목록</h2>

    {/* table */}
    <div className="table_wrap">
      <table className="table">
        <caption className="sr_only">연관 보도자료 목록</caption>

        <colgroup>
          <col style={{ width: "120px" }} />
          <col style={{ width: "120px" }} />
          <col />
          <col />
          <col style={{ width: "120px" }} />
          <col style={{ width: "120px" }} />
        </colgroup>

        <thead>
          <tr>
            <th scope="col">보도일</th>
            <th scope="col">기관</th>
            <th scope="col">제목</th>
            <th scope="col">주요키워드</th>
            <th scope="col">연관도</th>
            <th scope="col">상세</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>2026-04-18</td>
            <td>금융감독원</td>
            <td className="left">운영리스크 손실사건 관리 미흡 사례 발표</td>
            <td>
              <Badge
                labels={[
                  {
                    text: "손실사건 등록",                    
                    color: "blue",
                  },
                  {
                    text: "승인 지연",                    
                    color: "blue",
                  },
                  {
                    text: "증빙 누락",                    
                    color: "blue",
                  },
                ]}
              />
            </td>
            <td><p className="point">92%</p></td>
            <td>
              <Button variant="underline">원문 보기</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

const Bridge = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   const [activeMenuIndex, setActiveMenuIndex] = useState(2);

  //   const menuItems = [
  //     {
  //       key: "home",
  //       label: "홈",
  //       iconName: "ic_home",
  //       onClick: () => {
  //         setActiveMenuIndex(0);
  //       },
  //     },
  //     {
  //       key: "search",
  //       label: "기업검색",
  //       iconName: "ic_company",
  //       onClick: () => {
  //         setActiveMenuIndex(1);
  //       },
  //     },
  //     {
  //       key: "customer",
  //       label: "가망 고객 발굴",
  //       iconName: "ic_customer",
  //       onClick: () => {
  //         setActiveMenuIndex(2);
  //       },
  //     },
  //     {
  //       key: "schedule",
  //       label: "일정관리",
  //       iconName: "ic_schedule",
  //       onClick: () => {
  //         setActiveMenuIndex(3);
  //       },
  //     },
  //   ];

  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Modal 열기
      </Button>
      <PopupGroup
        variant="modal"
        title={"AI 집중점검 결과 상세"}
        size="xlarge"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={<PopContents />}
        footer={
          <>
            <button
              type="button"
              className="btn-guide"
              onClick={() => setIsOpen(false)}
            >
              취소
            </button>
            <button
              type="button"
              className="btn-guide"
              onClick={() => setIsOpen(false)}
            >
              확인
            </button>
          </>
        }
      />
    </>
  );
};

export default Bridge;
