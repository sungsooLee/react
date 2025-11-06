/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import cn from "classnames";
import styles from "./Home.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { ToggleButton } from "@/components/common/ToggleButton";
import { Icon } from "@/components/icons/Icon";

const Home = () => {
  const navigate = useNavigate(); // 훅 호출
  const [label, setLabel] = useState("on");
  const [visible, setVisible] = useState(true);
  const handleClick = (state: boolean) => {
    setLabel(state ? "on" : "off");
    setVisible(state);
  };

  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % items.length),
      2000
    );
    return () => clearInterval(id);
  }, []);

  const items = [
    "React",
    "Vue",
    "Web Square",
    "Typescript",
    "Javascript",
    "Scss",
    "Tailwind",
  ];

  return (
    <Layout headerType="type1" footerType="type1">
      <div className={cn(styles.home)}>
        <h2>Home Page</h2>
        <p>Home 콘텐츠입니다.</p>
        <div className={styles.router_wrap}>
          <Link to={"/"}>Index</Link> <br />
          <button onClick={() => navigate("/")}>Index</button>
        </div>
        <section>
          <ToggleButton initial={true} label={label} onToggle={handleClick} />
          {visible && <div>visible</div>}
        </section>
        <section>
          <ul className={styles.set_interval}>
            {items.map((item, index) => (
              <li
                key={`id-${index}`}
                className={index === active ? styles.active : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <Icon name={"react"} size={"md"} />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
