import styles from "./Badge.module.css";

interface BadgeProps {
  children: string;
}

export function Badge({ children }: BadgeProps) {
  return <span className={styles.badge}>{children}</span>;
}
