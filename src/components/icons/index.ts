/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
// 아이콘 폴더 내 모든 SVG를 자동으로 가져옴
const icons = import.meta.glob("../../assets/icons/*.svg", { eager: true });

// icons 객체 형태 예시:
// {
//   "../../assets/icons/ts.svg": { ReactComponent: ... },
//   "../../assets/icons/react.svg": { ReactComponent: ... }
// }

export const iconMap = Object.fromEntries(
  Object.entries(icons).map(([path, mod]) => {
    // 파일명만 추출 (예: ts.svg → ts)
    const name = path.split("/").pop()?.replace(".svg", "")!;
    return [name, (mod as any).ReactComponent];
  })
) as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;

// 자동으로 아이콘 이름 유니언 타입 생성
export type IconName = keyof typeof iconMap;
