import { ComponentType } from "react";
import { createBrowserRouter } from "react-router-dom";
import TaskList from "./guide/index"; // 퍼블 대시보드 리스트
import GuidePage from "./guide/guidePage"; // 퍼블 가이드 페이지
import { allGuideData } from "./guide/data/index";

// 1. Vite를 통해 pub/pages 폴더 내의 모든 .tsx 파일을 탐색할 수 있는 맵을 만듭니다.
const modules = import.meta.glob("/src/pub/pages/**/*.tsx");

// 2. 가이드 마스터 데이터를 기반으로 react-router의 routes 객체 배열을 동적 생성합니다.
const dynamicRoutes = allGuideData
  .filter((item) => item.pageLink && item.pageLink.trim() !== "")
  .map((item) => {
    const componentPath = `/src/pub/pages/${item.pageLink}.tsx`;

    return {
      path: item.pageLink.toLowerCase(),
      lazy: async () => {
        const moduleGetter = modules[componentPath];

        if (!moduleGetter) {
          return {
            element: (
              <div style={{ color: "red" }}>파일 없음: {componentPath}</div>
            ),
          };
        }

        // 🌟 any를 완전히 제거하고 unknown으로 처리합니다.
        // 모듈 전체 구조는 default 프로퍼티 안에 ComponentType이 들어있는 형태입니다.
        const module = (await moduleGetter()) as {
          default: ComponentType<unknown>;
        };
        const Component = module.default;

        return { element: <Component /> };
      },
    };
  });

// 3. 최종 라우터 생성
export const router = createBrowserRouter([
  {
    path: "/",
    // element: <RootLayout />,
    children: [
      {
        index: true,
        element: <TaskList />, // 루트(/) 접근 시 퍼블리싱 대시보드가 먼저 뜨도록 설정
      },
      {
        path: "guidepage", // 대시보드 내 "퍼블 가이드 보기" 링크 대응
        element: <GuidePage />,
      },
      ...dynamicRoutes, // menuIn, menuWa 등에 정의된 컴포넌트들이 자동으로 풀림
    ],
  },
]);
