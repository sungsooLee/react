import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./TopButton.module.scss";
import { Icon } from "../icons/Icon";

const TopButton = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300); // 300px 이상 스크롤 시 버튼 보이기
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setActive(true);
      }, 100); // 원하는 딜레이
      return () => clearTimeout(timer);
    } else {
      setActive(false);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={cn(styles.top_btn, active && styles.active)}
    >
      <Icon name="arrow_top" size="sm" className={styles.top_icon} />
    </button>
  );
};

export default TopButton;
