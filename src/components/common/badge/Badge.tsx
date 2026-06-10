import styles from './Badge.module.scss';

type BadgeColor = 'blue';

interface LabelItem {
  text: string;
  size?: string;
  color?: BadgeColor;
}

interface BadgeProps {
  labels: LabelItem[];
}

export const Badge = ({ labels }: BadgeProps) => (
  <div className={styles.badge_wrap}>
    {labels.map(({ text, size, color }, index) => (
      <span
        key={`${text}-${index}`}
        className={[
          styles.badge_item,
          size && styles[size],
          color && styles[color],
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {text}
      </span>
    ))}
  </div>
);