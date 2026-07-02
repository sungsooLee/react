import React from "react";
import { Carousel } from "./Carousel"; // 위에서 만든 컴포넌트 import

// 더미 데이터 구조 정의
interface CardItem {
  id: number;
  title: string;
  desc: string;
  tag: string;
}

export default function App() {
  // 슬라이드에 뿌릴 상품 목록 데이터
  const productList: CardItem[] = [
    {
      id: 1,
      title: "주거래 우대통장",
      desc: "쓸수록 쌓이는 금리 혜택",
      tag: "입출금",
    },
    {
      id: 2,
      title: "쏠쏠한 적금",
      desc: "소액으로 시작하는 목돈 마련",
      tag: "적금",
    },
    {
      id: 3,
      title: "플러스 정기예금",
      desc: "안정적인 자산 굴리기 맞춤형",
      tag: "예금",
    },
    {
      id: 4,
      title: "든든 신용대출",
      desc: "직장인을 위한 신속 한도 조회",
      tag: "대출",
    },
    {
      id: 5,
      title: "마이카 라운지",
      desc: "자동차 구매부터 관리까지 한 번에",
      tag: "자동차",
    },
    {
      id: 6,
      title: "트래블 체크카드",
      desc: "전 세계 환전 수수료 100% 우대",
      tag: "카드",
    },
  ];

  // 슬라이드 안의 아이템이 '순수 클릭' 되었을 때 실행될 비즈니스 로직
  const handleItemClick = (item: CardItem, index: number) => {
    console.log(`클릭된 슬라이드 인덱스: ${index}`);
    console.log(`선택된 상품 데이터:`, item);
  };

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      {/* ----------------------------------------------------
        🔥 예시 1. 화면에 딱 3개씩 정확히 쪼개서 보여주고 싶을 때
      ---------------------------------------------------- */}
      <h2
        style={{
          marginBottom: "16px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        추천 금융 상품 (slidesPerView = 3)
      </h2>
      <Carousel slidesPerView={3} gap={16}>
        {productList.map((product, idx) => (
          <div
            key={product.id}
            onClick={() => handleItemClick(product, idx)}
            style={{
              padding: "24px",
              background: "#fff",
              borderRadius: "12px",
              height: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "12px",
                  color: "#007bff",
                  background: "#e6f0ff",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                {product.tag}
              </span>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "12px",
                  color: "#222",
                }}
              >
                {product.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#666", marginTop: "6px" }}>
                {product.desc}
              </p>
            </div>
            <div
              style={{ fontSize: "12px", color: "#999", textAlign: "right" }}
            >
              자세히 보기 →
            </div>
          </div>
        ))}
      </Carousel>

      <div style={{ margin: "60px 0" }} />

      {/* ----------------------------------------------------
        🔥 예시 2. 고정 가로 너비(auto)로 물 흐르듯 밀어 정렬하고 싶을 때
      ---------------------------------------------------- */}
      <h2
        style={{
          marginBottom: "16px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        특가 이벤트 배너 (slidesPerView = "auto")
      </h2>
      <Carousel slidesPerView="auto" itemWidth="280px" gap={20}>
        {productList.map((product, idx) => (
          <div
            key={`banner-${product.id}`}
            onClick={() => handleItemClick(product, idx)}
            style={{
              padding: "24px",
              background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
              color: "#fff",
              borderRadius: "12px",
              height: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "12px",
                  color: "#fff",
                  background: "rgba(255,255,255,0.2)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                EVENT
              </span>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "12px",
                }}
              >
                {product.title} 혜택
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.8)",
                  marginTop: "6px",
                }}
              >
                지금 신청하면 우대 최고 우대율 적용
              </p>
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.7)",
                textAlign: "right",
              }}
            >
              이벤트 확인하기 →
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
