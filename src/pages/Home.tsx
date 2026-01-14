/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import cn from "classnames";
import styles from "./Home.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { ToggleButton } from "@/components/common/ToggleButton";
import { Icon } from "@/components/icons/Icon";
import Carousel from "@/components/common/Carousel";

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

  interface Props {
    iconName: string;
    label: string;
  }

  const items: Props[] = [
    {
      iconName: "react",
      label: "React",
    },
    {
      iconName: "vue",
      label: "Vue",
    },
    {
      iconName: "js",
      label: "Javascript",
    },
    {
      iconName: "ts",
      label: "Typescript",
    },
    {
      iconName: "sass",
      label: "Sass",
    },
    {
      iconName: "tailwind",
      label: "Tailwind",
    },
    {
      iconName: "git",
      label: "Git",
    },
    {
      iconName: "figma",
      label: "Figma",
    },
  ];

  interface slideProps {
    label?: string;
    imgSrc?: string;
  }

  const slideItems: slideProps[] = [
    {
      label: "슬라이드 1",
      imgSrc: "https://loremflickr.com/600/400",
    },
    {
      label: "슬라이드 2",
      imgSrc: "https://loremflickr.com/600/400",
    },
    {
      label: "슬라이드 3",
      imgSrc: "https://loremflickr.com/600/400",
    },
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
          <ToggleButton isActive={true} label={label} onToggle={handleClick} />
          {visible && <div>visible</div>}
        </section>
        <section>
          <ul className={styles.set_interval}>
            {items.map((item, index) => (
              <li
                key={`id-${index}`}
                className={index === active ? styles.active : ""}
              >
                <Icon name={item.iconName} size={"xl"} />
                <span className={styles.label}>{item.label}</span>
              </li>
            ))}
          </ul>
          <ToggleButton switchMode={true} />
        </section>
        <section>
          <Carousel
            items={slideItems.map((item, index) => (
              <div className={styles.slide_item} key={`id-${index}`}>
                {item.imgSrc && <img src={item.imgSrc} alt={item.label} />}
                {item.label && <p className={styles.label}>{item.label}</p>}
              </div>
            ))}
            slidesPerView={1}
            spaceBetween={20}
          />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
