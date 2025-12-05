import { useEffect, useState } from "react";
// import cn from "classnames";
import styles from "./TopButton.module.scss";
import { Icon } from "../icons/Icon";

const TopButton = () => {
  const [visible, setVisible] = useState(false);

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

  if (!visible) return null;

  return (
    <button onClick={scrollToTop} className={styles.top_btn}>
      <Icon name="arrow_top" size="sm" className={styles.top_icon} />
    </button>
  );
};

export default TopButton;
