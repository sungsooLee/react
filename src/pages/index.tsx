import React, { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Icon } from "@/components/icons/Icon";
import type { IconName } from "@/components/icons";
import Carousel from "@/components/common/Carousel";
import styles from "./index.module.scss";

const Portfolio = () => {
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const currentSections = sectionsRef.current; // 로컬 변수에 복사
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(styles.active);
          }
        });
      },
      { threshold: 0.6 }
    );

    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // 기술 스택 데이터
  const skills: Array<{ name: IconName; label: string }> = [
    { name: "react", label: "React" },
    { name: "ts", label: "TypeScript" },
    { name: "js", label: "JavaScript" },
    { name: "vue", label: "Vue.js" },
    { name: "sass", label: "Sass" },
    { name: "tailwind", label: "Tailwind CSS" },
    { name: "git", label: "Git" },
    { name: "figma", label: "Figma" },
  ];

  // 프로젝트 데이터
  const projects = [
    {
      title: "수협 사이버 직매장 리뉴얼",
      description: "PC, 모바일 적응형 쇼핑몰 프로젝트",
      image: "https://loremflickr.com/800/600",
      tags: ["Vue3", "TypeScript", "Element Plus", "SCSS", "Git", "Figma"],
      link: "#",
    },
    {
      title: "현대오토에버 교육 플랫폼 리뉴얼",
      description: "PC, 모바일(BO, FO) 프로젝트",
      image: "https://loremflickr.com/800/600",
      tags: ["React", "TypeScript", "Radix Ui", "Tailwind CSS", "Git", "Figma"],
      link: "#",
    },
    {
      title: "NH Pay 카드 리뉴얼(웹 접근성)",
      description: "모바일 하이브리드 APP 프로젝트",
      image: "https://loremflickr.com/800/600",
      tags: ["Vue3", "SCSS", "Git", "Figma"],
      link: "#",
    },
  ];

  return (
    <Layout headerType="type1" footerType="none">
      <div className={styles.portfolio}>
        {/* Profile Section */}
        <section
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className={styles.profile}
        >
          <div className={styles.profile_content}>
            <h1 className={styles.profile_title}>
              안녕하세요, <br />
              <span className={styles.profile_name}>
                프론트엔드 개발자 이성수
              </span>
              입니다.
            </h1>
            <p className={styles.profile_description}>
              사용자 경험을 중시하며, 웹 접근성 준수와, 모던한 웹 기술로 의미
              있는 프로덕트를 만드는 개발자입니다.
            </p>
            <div className={styles.profile_buttons}>
              <a href="#projects" className={styles.btn_primary}>
                프로젝트 보기
              </a>
              <a href="#contact" className={styles.btn_secondary}>
                연락하기
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          id="about"
          className={styles.section}
        >
          <h2 className={styles.section_title}>About Me</h2>
          <div className={styles.about_content}>
            <p>
              프론트엔드 개발에 열정을 가진 개발자로, React와 TypeScript를 주로
              사용합니다. 깔끔한 코드와 사용자 중심의 디자인을 추구하며,
              지속적인 학습을 통해 성장하고 있습니다.
            </p>
            <p>
              팀 협업을 중시하며, 효율적인 개발 프로세스와 코드 품질 향상에
              관심이 많습니다. 새로운 기술을 배우고 적용하는 것을 즐기며, 문제
              해결을 위한 창의적인 접근을 좋아합니다.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          id="skills"
          className={styles.section}
        >
          <h2 className={styles.section_title}>Skills</h2>
          <div className={styles.skills_grid}>
            {skills.map((item, index) => (
              <div key={index} className={styles.skill_item}>
                <Icon name={item.name} size="xl" />
                <span className={styles.skill_label}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Projects Section */}
        <section
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          id="projects"
          className={styles.section}
        >
          <h2 className={styles.section_title}>Recent Projects</h2>
          <div className={styles.projects_wrapper}>
            <Carousel
              items={projects.map((item, index) => (
                <div key={index} className={styles.project_card}>
                  <div className={styles.project_image}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className={styles.project_content}>
                    <h3 className={styles.project_title}>{item.title}</h3>
                    <p className={styles.project_description}>
                      {item.description}
                    </p>
                    <div className={styles.project_tags}>
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.link}
                      className={styles.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      자세히 보기 <Icon name="arrow_right" size="sm" />
                    </a>
                  </div>
                </div>
              ))}
              className={styles.slide_wrap}
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              pagination={true}
              loop={true}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={(el) => {
            sectionsRef.current[4] = el;
          }}
          id="contact"
          className={styles.section}
        >
          <h2 className={styles.section_title}>Contact</h2>
          <div className={styles.contact_content}>
            <p>프로젝트 제안이나 협업 문의가 있으시면 언제든지 연락주세요.</p>
            <div className={styles.contact_info}>
              <div className={styles.contact_item}>
                <strong>Email:</strong>
                <a href="mailto:lsstmi@naver.com">lsstmi@naver.com</a>
              </div>
              <div className={styles.contact_item}>
                <strong>GitHub:</strong>
                <a href="https://github.com/sungsooLee/" target="_blank">
                  github.com/sungsooLee/
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;
