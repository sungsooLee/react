import styles from "./Stepper.module.scss";

export interface Step {
  title: string;
  badge?: React.ReactNode;
  icon?: {
    on: React.ReactNode;
    off: React.ReactNode;
  };
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export const Stepper = ({ steps, currentStep }: StepperProps) => {
  const activeIndex = Math.max(
    0,
    Math.min(currentStep, steps.length - 1)
  );

  return (
    <div className={styles.stepper}>
      {steps.map((step, index) => {
        const isActive = index === activeIndex;
        const isDone = index < activeIndex;

        const icon = step.icon
          ? isActive || isDone
            ? step.icon.on
            : step.icon.off
          : null;

        return (
          <div key={step.title} className={styles.step}>
            {/* ICON */}
            <div
              className={[
                styles.icon,
                isActive ? styles.active : "",
                isDone ? styles.done : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {icon}
            </div>

            {/* CONTENT */}
            <div className={styles.content}>
              <div className={styles.titleRow}>
                <span
                  className={[
                    styles.title,
                    isActive ? styles.activeTitle : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {step.title}
                </span>

                {step.badge && (
                  <div className={styles.badge}>
                    {step.badge}
                  </div>
                )}
              </div>
            </div>

            {/* LINE */}
            {index !== steps.length - 1 && (
              <div className={styles.line} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;