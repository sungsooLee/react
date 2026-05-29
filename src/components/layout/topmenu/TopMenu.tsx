import cn from "classnames";
import styles from "./TopMenu.module.scss";
import { Button } from "../../common/button/Button";
import { Icon } from "../../icons/Icon";
import { Dropdown } from "@/components/common/dropdown/Dropdown";

interface DropdownItem {
  label: string;
  value: string;
}

interface TopMenuProps {
  notificationCount?: number;
  profileImg?: string;
  userName?: string;
  className?: string;

  dropdownItems?: DropdownItem[];
  dropdownValue?: string;
  onDropdownChange?: (value: string) => void;
  dropdownPlaceholder?: string;
}

export const TopMenu = ({
  notificationCount,
  profileImg,
  userName,
  className,
  dropdownItems,
  dropdownValue,
  onDropdownChange,
  dropdownPlaceholder,
}: TopMenuProps) => {
  return (
    <div className={cn(styles.top_menu, className)}>
      <div className={styles.alarm_view}>
        <Button variant="normal">
          <Icon
            name={"ic_alarm"}
            size={"md"}
            strokeColor={"#4C4F58"}
            fillColor={"#4C4F58"}
          />
        </Button>

        {notificationCount !== undefined && notificationCount > 0 && (
          <span className={styles.num_view}>{notificationCount}</span>
        )}
      </div>
      <div
        className={cn(styles.user_view, {
          [styles.no_img]: !profileImg,
        })}
      >
        {profileImg && (
          <img
            src={profileImg}
            alt={`${userName} 프로필 이미지`}
            className={styles.img_profile}
          />
        )}

        <span className={styles.label}>{userName}</span>
      </div>

      {dropdownItems && (
        <div className={styles.select_menu}>
          <Dropdown
            items={dropdownItems}
            value={dropdownValue}
            onChange={onDropdownChange}
            size="text"
            placeholder={dropdownPlaceholder}
          />
        </div>
      )}
    </div>
  );
};
