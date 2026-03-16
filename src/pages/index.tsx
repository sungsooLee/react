import React, { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Icon } from "@/components/icons/Icon";
import type { IconName } from "@/components/icons";
import Carousel from "@/components/common/Carousel";
import Accordion from "@/components/common/Accordion";
import styles from "./index.module.scss";
import slideImg from "@/assets/images/sh_shopping.jpg";
import slideImg2 from "@/assets/images/hd_auto.jpg";
import slideImg3 from "@/assets/images/nh_pay.jpg";
import slideImg4 from "@/assets/images/ui_bank.jpg";
import slideImg5 from "@/assets/images/kb_pay.jpg";

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
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
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
    { name: "vue", label: "Vue.js" },
    { name: "ts", label: "TypeScript" },
    { name: "js", label: "JavaScript" },
    { name: "sass", label: "Sass" },
    { name: "tailwind", label: "Tailwind CSS" },
    { name: "git", label: "Git" },
    { name: "figma", label: "Figma" },
  ];

  // Career 타임라인
  const items = [
    {
      title: "2025",
      defaultOpen: true,
      content: (
        <>
          <p>
            <strong>수협 사이버 수산물 직매장 구축 (Vue.js)</strong>
            기간 : 2025.09 ~ 2025.12 <br />
            역할 : 공통 컴포넌트 및 고객센터, 온라인 몰 메뉴 화면 퍼블리싱
          </p>
          <p>
            <strong>현대오토에버 교육 플랫폼 구축 (React.js)</strong>
            기간 : 2025.01 ~ 2025.08 <br />
            역할 : 공통 컴포넌트 및 관리자, 프론트 화면 퍼블리싱
          </p>
        </>
      ),
    },
    {
      title: "2024",
      content: (
        <>
          <p>
            <strong>NH농협카드 모바일앱 구축(Vue.js)</strong>
            기간 : 2024.04 ~ 2024.10 <br />
            역할 : 카드, 결제 메뉴 담당
          </p>
        </>
      ),
    },
    {
      title: "2023",
      content: (
        <>
          <p>
            <strong>라이나생명보험 구축(Vue.js)</strong>
            기간 : 2023.02 ~2023.05 <br />
            역할 : 웹 접근성 및 상품 화면 담당
          </p>
          <p>
            <strong> KB Pay 라이프 구축</strong>
            기간 : 2023.06 ~2023.10 <br />
            역할 : 쇼핑, 여행 카테고리 화면 담당
          </p>
          <p>
            <strong>일본UI뱅크 모바일 구축(웹스퀘어)</strong>
            기간 : 2023.11 ~2024.03 <br />
            역할 : 프론트 화면 퍼블리싱
          </p>
        </>
      ),
    },
    {
      title: "2022",
      content: (
        <>
          <p>
            <strong>신한은행 NEWAPP SOL 구축</strong>
            기간 : 2022.03 ~2022.10 <br />
            역할 : 퍼블팀 PL
          </p>
          <p>
            <strong>롯데손해보험 MARS 구축</strong>
            기간 : 2022.11 ~2023.02 <br />
            역할 : 통합 테스트 및 개선사항 지원
          </p>
        </>
      ),
    },
    {
      title: "2021",
      content: (
        <>
          <p>
            <strong>KB카드 Wallet 구축</strong>
            기간 : 2021.12 ~2022.02 <br />
            역할 : 퍼블팀 PL
          </p>
        </>
      ),
    },
    {
      title: "2019 ~ 2021",
      content: (
        <>
          <p>
            <strong>메리츠화재 운영</strong>
            기간 : 2019.01 ~2021.10
          </p>
        </>
      ),
    },
    {
      title: "2018",
      content: (
        <>
          <p>
            <strong>할리스 리뉴얼</strong> 기간 : 2018.01 ~ 2018.03
          </p>
          <p>
            <strong>신세계면세점 메인 개편</strong> 기간 : 2018.04 ~ 2018.07
          </p>
          <p>
            <strong>신세계면세점 운영</strong> 기간 : 2018.08 ~ 2018.12
          </p>
        </>
      ),
    },
    {
      title: "2017",
      content: (
        <>
          <p>
            <strong>리쏘빌 구축 </strong>기간 : 2017.02 ~ 2017.05
          </p>
          <p>
            <strong>엔나이스 1.5ver</strong>기간 : 2017.06 ~ 2017.09
          </p>
          <p>
            <strong>위드미 리뉴얼 </strong>기간 : 2017.08 ~ 2017.09
          </p>
          <p>
            <strong>토이킹덤 </strong>기간 : 2017.07 ~ 2017.10
          </p>
          <p>
            <strong>롯데브랜드 PC 구축 </strong>기간 : 2017.10 ~ 2017.12
          </p>
          <p>
            <strong>AHC 영문작업 </strong>기간 : 2017.12 ~ 2018.01
          </p>
        </>
      ),
    },
    {
      title: "2016",
      content: (
        <>
          <p>
            <strong>Nice app 구축 </strong> 기간 : 2016.03 ~ 2016.05
          </p>
          <p>
            <strong>Hapsode 구축</strong> 기간 : 2016.05 ~ 2017.08
          </p>
          <p>
            <strong>디즈니캘린더</strong> 기간 : 2016.10 ~ 2016.12
          </p>
        </>
      ),
    },
    {
      title: "2015",
      content: (
        <>
          <p>
            <strong>LG생활건강 빌리빙 구축</strong> 기간 : 2015.06 ~ 2015.08
          </p>
          <p>
            <strong>Luxewater(중국브랜드) 구축</strong> 기간 : 2015.08 ~ 2016.02
          </p>
        </>
      ),
    },
    {
      title: "2014",
      content: (
        <>
          <p>
            <strong>외환은행 기업뱅킹 리뉴얼 프로젝트 </strong> 기간 : 2014.01 ~
            2014.06
          </p>
          <p>
            <strong>KB국민카드 모바일 리뉴얼 프로젝트</strong> 기간 : 2014.07 ~
            2014.11
          </p>
        </>
      ),
    },
    {
      title: "2013",
      content: (
        <>
          <p>
            <strong>
              SC제일은행 온라인 뱅킹 Revamp 프로젝트(모바일,반응형)
            </strong>
            기간 : 2013.01 ~ 2013.04
          </p>
          <p>
            <strong>LG CNS 프로젝트 컨텐츠 및 가이드 기업 메인 작업</strong>
            기간 : 2013.05 ~ 2013.05
          </p>
          <p>
            <strong>모우소셜컴즈 관리자 메인 및 컨텐츠 페이지 작업</strong> 기간
            : 2013.05 ~ 2013.05
          </p>
          <p>
            <strong>
              산업은행 인터넷 홈페이지 뱅킹 구축 프로젝트 기업뱅킹
            </strong>
            기간 : 2013.06 ~ 2013.09
          </p>
          <p>
            <strong>농협 A마켓 리뉴얼 프로젝트</strong> 기간 : 2013.10 ~ 2014.01
          </p>
        </>
      ),
    },
    {
      title: "2012",
      content: (
        <>
          <p>
            <strong>농협 e-금융 확대개발 퍼블리싱 작업</strong> 기간 : 2012.07 ~
            2012.10
          </p>
        </>
      ),
    },
  ];

  // 프로젝트 데이터
  const projects = [
    {
      title: "수협 사이버 직매장 리뉴얼",
      description: "PC, 모바일 적응형 쇼핑몰 프로젝트",
      term: "2025.8 ~ 2025.12",
      image: slideImg,
      tags: ["Vue3", "TypeScript", "Element Plus", "SCSS", "Git", "Figma"],
      link: "https://www.shshopping.co.kr/shypMall/display",
    },
    {
      title: "현대오토에버 교육 플랫폼 리뉴얼",
      description: "PC, 모바일(BO, FO) 프로젝트",
      term: "2025.1 ~ 2025.8",
      image: slideImg2,
      tags: ["React", "TypeScript", "Radix Ui", "Tailwind CSS", "Git", "Figma"],
      link: "#",
    },
    {
      title: "NH Pay 카드 리뉴얼(웹 접근성)",
      description: "모바일 하이브리드 APP 프로젝트",
      term: "2024.4 ~ 2024.10",
      image: slideImg3,
      tags: ["Vue3", "SCSS", "Git", "Figma"],
      link: "#",
    },
    {
      title: "신한은행 UI뱅크",
      description: "일본 다국어 모바일 하이브리드 APP 프로젝트",
      term: "2023.11 ~ 2024.03",
      image: slideImg4,
      tags: ["웹스퀘어", "CSS", "SVN", "Figma"],
      link: "#",
    },
    {
      title: "KB Pay 쇼핑/여행 APP 프로젝트",
      description: "KB PAY 모바일 하이브리드 APP 프로젝트",
      term: "2023.06 ~ 2023.10",
      image: slideImg5,
      tags: ["HTML", "JAVASCRIPT", "CSS", "SVN"],
      link: "https://nhpay.nonghyup.com/",
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
              <span className={styles.profile_name}>UI Publisher</span>
              이성수 입니다.
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
              저는 약 13년간 다양한 웹 프로젝트를 수행하며 퍼블리싱 역량을
              기반으로 프론트엔드 개발 영역까지 확장해온 UI 개발자입니다.
              구조적인 마크업과 컴포넌트 설계를 통해 유지보수와 확장성을 고려한
              UI를 구축해왔습니다.
            </p>
            <p>
              HTML·SCSS 기반의 시멘틱 마크업과 모듈화된 스타일 설계에 강점이
              있으며, JavaScript,TypeScript를 활용한 인터랙션 구현 경험을
              보유하고 있습니다. React와 Vue 환경에서 컴포넌트 설계와 상태 관리
              흐름을 이해하며 데이터 구조를 고려한 화면 개발을 진행해왔습니다.
            </p>
            <p>
              웹 접근성을 준수한 퍼블리싱과 협업을 고려한 명확한 구조 설계를
              중요하게 생각하며, 사용자 경험을 중심으로 자연스러운 흐름의 UI를
              구현하는 프론트엔드 개발자로 성장하고 있습니다.
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

        {/* Career Section */}
        <section
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          id="career"
          className={styles.section}
        >
          <h2 className={styles.section_title}>Career</h2>
          <Accordion items={items} multiOpen />
        </section>

        {/* Recent Projects Section */}
        <section
          ref={(el) => {
            sectionsRef.current[4] = el;
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
                    <p className={styles.project_term}>{item.term}</p>
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
            sectionsRef.current[5] = el;
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
                <a href="https://github.com/sungsooLee/react" target="_blank">
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
