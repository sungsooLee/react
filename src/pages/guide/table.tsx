import Table, { TableColumn } from "@/components/common/table/Table";
import "./guide.scss";

type Row = {
  name: string;
  division: string;
  status: string;
  amount: number;
  abc?: string
};

const columns: TableColumn<Row>[] = [
  { key: "name", header: "이름", align: "left" },
  { key: "division", header: "부서", align: "center", width: 120 },
  { key: "status", header: "상태", align: "center", width: 120 },
  {
    key: "amount",
    header: "금액",
    align: "right",
    render: (value) => `${Number(value).toLocaleString()}원`,
  },
  {
    key: "abc",
    header: "비고",
    align: "center",
  },
];

const rows: Row[] = [
  { name: "정민혁", division: "퍼블", status: "완료", amount: 120000, abc: "비고입니다." },
  { name: "이성수", division: "퍼블", status: "완료", amount: 98000 },
  { name: "???", division: "개발", status: "대기", amount: 45000 },
];

const TableGuide = () => {
    const code = `
    import Table, { TableColumn } from "@/components/common/table/Table";

    type Row = {
    name: string;
      division: string;
      status: string;
      amount: number;
      abc?: number
    };

    const columns: TableColumn<Row>[] = [
      { key: "name", header: "이름", align: "left" },
      { key: "division", header: "부서", align: "center", width: 120 },
      { key: "status", header: "상태", align: "center", width: 120 },
      {
        key: "amount",
        header: "금액",
        align: "right",
        render: (value) => \`\${Number(value).toLocaleString()}원\`,
      },
      {
        key: "abc",
        header: "비고",
        align: "center",
      },
    ];

    const rows: Row[] = [
      { name: "정민혁", division: "퍼블", status: "완료", amount: 120000, abc: 1 },
      { name: "이성수", division: "퍼블", status: "완료", amount: 98000 },
      { name: "???", division: "개발", status: "대기", amount: 45000 },
    ];

        render: (value) => \`\${Number(value).toLocaleString()}원\`,
      },
    ];

    <Table columns={columns} rows={rows} />;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("복사 완료!");
  };

  return (
    <div className="guide-detail">
      <h2>Table</h2>
      <p>컬럼 정의와 데이터 배열을 전달해 표를 렌더링하는 공통 테이블입니다.</p>

      <div className="section">
        <h3>Preview</h3>
        <div className="preview-box">
          <Table columns={columns} rows={rows} />
        </div>
      </div>

      <div className="section">
        <div className="code-header">
          <h3>Code</h3>
          <button onClick={handleCopy} className="copy-btn">
            복사
          </button>
        </div>

        <pre className="code-block">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default TableGuide;
