import { useState } from "react";
import cn from "classnames";
import { Icon } from "@/components/icons/Icon";
import styles from "./index.module.scss";

const SamplePage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Summit Icon Sample</h1>
      <p className={styles.desc}>
        className을 넣으면 hover·click 애니메이션이 적용되고, className 없이
        쓰면 SVG 기본 모습만 표시됩니다.
      </p>
      <div className={styles.icon_wrap}>
        <div className={styles.icon_item}>
          <button
            type="button"
            className={cn(styles.summit_btn, isActive && styles.is_active)}
            aria-label="전송"
            aria-pressed={isActive}
            onClick={() => setIsActive((prev) => !prev)}
          >
            <Icon name="summit" size="xl" className={styles.summit_icon} />
          </button>
          <span className={styles.icon_label}>className 적용</span>
        </div>

        <div className={styles.icon_item}>
          <Icon name="summit" size="xl" />
          <span className={styles.icon_label}>className 없음</span>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;
