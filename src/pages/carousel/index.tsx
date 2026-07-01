import React from "react";
import { Carousel } from "./Carousel";

export default function CarouselPage() {
  // 테스트용 공통 더미 데이터 생성 (8개 항목)
  const items = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `슬라이드 아이템 ${i + 1}`,
    desc: `여기는 상세 설명 구역입니다.`,
  }));

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "0 20px",
      }}
    >
      {/* ====================================================
          CASE 1: 한 라인에 2개 노출 (큼직한 배너/카드 형태)
          ==================================================== */}
      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            marginBottom: "15px",
            fontSize: "1.5rem",
            borderLeft: "4px solid #3b82f6",
            paddingLeft: "10px",
          }}
        >
          CASE 1. 한 화면에 2개씩 노출 (perPage={2})
        </h2>
        <Carousel perPage={2} gap={24}>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
                color: "#fff",
                padding: "30px",
                borderRadius: "12px",
                height: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", fontSize: "1.4rem" }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, opacity: 0.8 }}>
                큰 화면 레이아웃 정석 구조
              </p>
            </div>
          ))}
        </Carousel>
      </section>

      {/* ====================================================
          CASE 2: 한 라인에 3개 노출 (가장 표준적인 상품/콘텐츠 리스트)
          ==================================================== */}
      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{
            marginBottom: "15px",
            fontSize: "1.5rem",
            borderLeft: "4px solid #10b981",
            paddingLeft: "10px",
          }}
        >
          CASE 2. 한 화면에 3개씩 노출 (perPage={3})
        </h2>
        <Carousel perPage={3} gap={16}>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#f1f5f9",
                border: "1px solid #cbd5e1",
                color: "#334155",
                padding: "20px",
                borderRadius: "8px",
                height: "140px",
                boxSizing: "border-box",
              }}
            >
              <h3 style={{ margin: "0 0 8px 0", fontSize: "1.1rem" }}>
                {item.title}
              </h3>
              <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
                {item.desc}
              </span>
            </div>
          ))}
        </Carousel>
      </section>

      {/* ====================================================
          CASE 3: 한 라인에 5개 노출 (아이콘 메뉴, 퀵 링크, 갤러리 형태)
          ==================================================== */}
      <section>
        <h2
          style={{
            marginBottom: "15px",
            fontSize: "1.5rem",
            borderLeft: "4px solid #f59e0b",
            paddingLeft: "10px",
          }}
        >
          CASE 3. 한 화면에 5개씩 노출 (perPage={5})
        </h2>
        <Carousel perPage={5} gap={12}>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#0f172a",
                color: "#fff",
                padding: "15px",
                borderRadius: "6px",
                height: "110px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {/* 원형 아이콘을 흉내 낸 마크업 데모 */}
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#3b82f6",
                  borderRadius: "50%",
                  marginBottom: "8px",
                }}
              ></div>
              <strong style={{ fontSize: "0.9rem", display: "block" }}>
                {item.title.replace("슬라이드 ", "")}
              </strong>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
