import { useState } from "react";
import Input from "@/components/common/input/Input";

const Detail = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = (name: keyof typeof form) => {
    setForm((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <>
      <div className="body_large_r">detail</div>

      <Input
        name="name"
        placeholder="이름"
        value={form.name}
        onChange={handleChange}
        onClear={() => handleClear("name")}
      />

      <Input
        name="email"
        placeholder="이메일"
        value={form.email}
        onChange={handleChange}
        onClear={() => handleClear("email")}
      />

      <Input
        name="phone"
        placeholder="전화번호"
        value={form.phone}
        onChange={handleChange}
        onClear={() => handleClear("phone")}
      />

      {/* 규약은 월납, 운용관리 신청서는 분기납 (포함 관계 인정 여부 담당자 확인 필요) 규약은 불허, 운용관리 신청서는 허용  불허(1년 이상 근속 정규직에 한함)  허용(전 직원, 수습 제외) 214-81-35729  1100011-12345678  (주)우리커머스 12/31 */}
    </>
  );
};

export default Detail;
