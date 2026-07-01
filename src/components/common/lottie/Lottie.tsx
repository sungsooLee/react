import Lottie, { LottieComponentProps } from "lottie-react";

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
    <div className="lottie_wrap" style={{ width, height, ...style }}>
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
