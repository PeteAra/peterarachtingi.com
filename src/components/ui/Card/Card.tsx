import type { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div className={`${styles.card} ${hover ? styles.hover : ""} ${className ?? ""}`}>
      {children}
    </div>
  );
}
