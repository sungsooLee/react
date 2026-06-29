import Lottie, { LottieComponentProps } from "lottie-react";

// 컴포넌트가 받을 Props 타입 정의 (기존 lottie-react 속성을 확장)
interface LottieAnimationProps extends Omit<
  LottieComponentProps,
  "animationData"
> {
  animationData: unknown;
  width?: string | number;
  height?: string | number;
}

const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
  width = "100%",
  height = "100%",
  style,
  ...props
}: LottieAnimationProps) => {
  return (
    <div style={{ width, height, ...style }}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        {...props}
      />
    </div>
  );
};

export default LottieAnimation;
