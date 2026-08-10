import { useState } from "react";
import { WeekPicker } from "@/components/common/datepicker/WeekPicker";

export const Test3 = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  return (
    <div>
      <h1>주간 내역 조회</h1>

      {/* 컴포넌트 호출 */}
      <WeekPicker
        value={currentDate}
        onChange={(date) => {
          console.log("선택된 날짜:", date);
          setCurrentDate(date);
        }}
      />
    </div>
  );
};

export default Test3;
