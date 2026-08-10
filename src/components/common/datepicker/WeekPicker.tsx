import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";
import "./WeekPicker.scss";

export interface WeekPickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
}

const getStartOfWeek = (date: Date): Date => {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setDate(d.getDate() - d.getDay());
  return d;
};

const getWeekDays = (startDate: Date): Date[] => {
  return Array.from(
    { length: 7 },
    (_, i) =>
      new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + i,
      ),
  );
};

const getWeekInfo = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const firstDay = new Date(year, date.getMonth(), 1).getDay();
  const week = Math.ceil((date.getDate() + firstDay) / 7);
  return { year, month, week };
};

const getWeeksInMonthList = (targetDate: Date) => {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth();
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const weeks = [];
  let current = getStartOfWeek(new Date(year, month, 1));
  let weekNum = 1;

  while (current <= lastDayOfMonth) {
    const weekEnd = new Date(
      current.getFullYear(),
      current.getMonth(),
      current.getDate() + 6,
    );

    if (current.getMonth() === month || weekEnd.getMonth() === month) {
      weeks.push({
        weekNum,
        startDate: new Date(current),
        endDate: weekEnd,
      });
      weekNum++;
    }
    current = new Date(
      current.getFullYear(),
      current.getMonth(),
      current.getDate() + 7,
    );
  }

  return weeks;
};

const isSameDay = (d1: Date, d2: Date) =>
  d1.toDateString() === d2.toDateString();
const DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"];

interface DayCellProps {
  day: Date;
  isSelected: boolean;
  isToday: boolean;
  onSelect: (day: Date) => void;
}

const DayCell = React.memo(
  ({ day, isSelected, isToday, onSelect }: DayCellProps) => {
    const classNames = [
      "day_btn",
      isToday ? "today" : "",
      isSelected ? "selected" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        type="button"
        onClick={() => onSelect(day)}
        className={classNames}
      >
        <div className="day_name">{DAY_NAMES[day.getDay()]}</div>
        <div className="day_num">{day.getDate()}</div>
      </button>
    );
  },
);

DayCell.displayName = "DayCell";

export const WeekPicker: React.FC<WeekPickerProps> = ({
  value,
  onChange,
  className = "",
}) => {
  const [internalDate, setInternalDate] = useState<Date>(() => new Date());
  const selectedDate = value ?? internalDate;

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [popoverDate, setPopoverDate] = useState<Date>(selectedDate);

  const popoverRef = useRef<HTMLDivElement>(null);
  const today = useMemo(() => new Date(), []);

  const handleDateChange = useCallback(
    (newDate: Date) => {
      if (!value) {
        setInternalDate(newDate);
      }
      onChange?.(newDate);
    },
    [value, onChange],
  );

  const startDate = useMemo(() => getStartOfWeek(selectedDate), [selectedDate]);
  const weekDays = useMemo(() => getWeekDays(startDate), [startDate]);
  const { year, month, week } = useMemo(
    () => getWeekInfo(selectedDate),
    [selectedDate],
  );

  const popoverYear = popoverDate.getFullYear();
  const popoverMonth = popoverDate.getMonth() + 1;
  const popoverWeeks = useMemo(
    () => getWeeksInMonthList(popoverDate),
    [popoverDate],
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setIsPopoverOpen(false);
      }
    };
    if (isPopoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopoverOpen]);

  const handlePrevWeek = useCallback(() => {
    const nextDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate() - 7,
    );
    handleDateChange(nextDate);
  }, [selectedDate, handleDateChange]);

  const handleNextWeek = useCallback(() => {
    const nextDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate() + 7,
    );
    handleDateChange(nextDate);
  }, [selectedDate, handleDateChange]);

  const handleTogglePopover = () => {
    setPopoverDate(selectedDate);
    setIsPopoverOpen((prev) => !prev);
  };

  const handleSelectWeekFromPopover = (targetStartDate: Date) => {
    handleDateChange(targetStartDate);
    setIsPopoverOpen(false);
  };

  return (
    <div className={`week_picker ${className}`.trim()}>
      <div className="header">
        <button
          type="button"
          onClick={handlePrevWeek}
          aria-label="이전 주"
          className="nav_btn"
        >
          이전
        </button>

        <div className="popover_wrapper" ref={popoverRef}>
          <button
            type="button"
            onClick={handleTogglePopover}
            className="title_btn"
          >
            <span>{`${year}년 ${month}월 ${week}주차`}</span>
            <span className="arrow_icon">▼</span>
          </button>

          {isPopoverOpen && (
            <div className="popover">
              <div className="popover_header">
                <button
                  type="button"
                  className="popover_nav_btn"
                  onClick={() =>
                    setPopoverDate(
                      (prev) =>
                        new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
                    )
                  }
                >
                  ◀
                </button>
                <span className="month_title">{`${popoverYear}년 ${popoverMonth}월`}</span>
                <button
                  type="button"
                  className="popover_nav_btn"
                  onClick={() =>
                    setPopoverDate(
                      (prev) =>
                        new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
                    )
                  }
                >
                  ▶
                </button>
              </div>

              <div className="week_option_list">
                {popoverWeeks.map((item) => {
                  const isCurrentSelectedWeek =
                    getStartOfWeek(selectedDate).getTime() ===
                    item.startDate.getTime();

                  const startText = `${item.startDate.getMonth() + 1}/${item.startDate.getDate()}`;
                  const endText = `${item.endDate.getMonth() + 1}/${item.endDate.getDate()}`;

                  return (
                    <button
                      key={item.startDate.getTime()}
                      type="button"
                      className={`week_option_btn ${isCurrentSelectedWeek ? "selected" : ""}`}
                      onClick={() =>
                        handleSelectWeekFromPopover(item.startDate)
                      }
                    >
                      <span>{item.weekNum}주차</span>
                      <span className="week_range">{`(${startText} ~ ${endText})`}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleNextWeek}
          aria-label="다음 주"
          className="nav_btn"
        >
          다음
        </button>
      </div>

      <div className="week_list">
        {weekDays.map((day) => (
          <DayCell
            key={day.getTime()}
            day={day}
            isSelected={isSameDay(day, selectedDate)}
            isToday={isSameDay(day, today)}
            onSelect={handleDateChange}
          />
        ))}
      </div>
    </div>
  );
};

export default WeekPicker;
