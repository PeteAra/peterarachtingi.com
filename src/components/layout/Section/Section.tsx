import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  children: ReactNode;
  variant?: "default" | "elevated";
  className?: string;
  "aria-labelledby"?: string;
}

export function Section({
  id,
  children,
  variant = "default",
  className,
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[variant]} ${className ?? ""}`}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </section>
  );
}
