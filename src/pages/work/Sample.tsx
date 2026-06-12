import { useState } from "react";
import { PopupGroup } from "@/components/common/popup/Popup";
import { Button } from "@/components/common/button/Button";
import Checkbox from "@/components/common/checkbox/Checkbox";
import TextField from "@/components/common/textfield/TextField";
import "./Sample.scss";

interface InformationField {
  id: number;
  label: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
}

interface InformationListItem {
  id: number;
  title: string;
  fields: InformationField[];
}

const informationList: InformationListItem[] = [
  {
    id: 1,
    title: "기본",
    fields: [
      { id: 1, label: "제도 구분", placeholder: "", value: "DC" },
    ],
  },
  {
    id: 2,
    title: "기업정보",
    fields: [
      { id: 1, label: "사업자등록번호", placeholder: "", value:"214-81-35729", disabled: true },
      { id: 2, label: "법인번호", placeholder: "", value:"1100011-12345678" },
      { id: 3, label: "기업명", placeholder: "", value:"(주)우리커머스" },
      { id: 4, label: "기업결산월일", placeholder: "", value:"12/31" },
      { id: 5, label: "기업규모", placeholder: "", value:"중견기업" },
      { id: 6, label: "대표자명", placeholder: "", value:"이우리" },
      { id: 7, label: "대표자 주민번호", placeholder: "", value:"801111-1234567" },
    ],
  },
];

const PopContents = () => {
  return (
    <>
      <div className="information_check_wrap">
        <div className="all_check">
          <div className="all_check_area">
            <div className="all_check_box">
              <Checkbox label="전체 체크" />
              <span className="all_check_count">
                <span className="number">19</span>
                <span>/</span>
                <span>20</span>
              </span>
            </div>
            <div className="all_check_reset">
              <button type="button" className="all_check_reset_btn"></button>
            </div>
          </div>
        </div>

        <div className="information_list_wrap">
          <ul className="information_list">
            {informationList.map((item) => (
              <li key={item.id}>
                <div className="information_item">
                  <div className="information_item_title">
                    <strong>{item.title}</strong>
                  </div>
                  <ul>
                    {item.fields.map((field) => (
                      <li key={field.id}>
                        <div className="box">
                          <div className="box_name">
                            <Checkbox label={field.label} />
                          </div>
                          <div className="box_form">
                            <TextField placeholder={field.placeholder} value={field.value} disabled={field.disabled} />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const Bridge = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Modal 열기
      </Button>
      <PopupGroup
        variant="modal"
        title={"업무 자동화 팝업"}
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
