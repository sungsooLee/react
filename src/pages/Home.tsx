import { useState } from "react";
import Layout from "../components/layout/Layout";
import cn from "classnames";
import styles from "./Home.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { ToggleButton } from "../components/common/ToggleButton";

const Home = () => {
  const navigate = useNavigate(); // 훅 호출
  const [label, setLabel] = useState("on");
  const [visible, setVisible] = useState(true);
  const handleClick = (state: boolean) => {
    setLabel(state ? "on" : "off");
    setVisible(state);
  };

  return (
    <Layout headerType="type1" footerType="type1">
      <div className={cn(styles.home)}>
        <h2>Home Page</h2>
        <p>Home 콘텐츠입니다.</p>
        <div className={styles.router_wrap}>
          <Link to={"/"}>Index</Link> <br />
          <button onClick={() => navigate("/")}>Index</button>
        </div>
        <div>
          <ToggleButton initial={true} label={label} onToggle={handleClick} />
          {visible && <div>visible</div>}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
