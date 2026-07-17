import type { LucideIcon } from "lucide-react";
import styles from "./IconLink.module.css";

interface IconLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function IconLink({ href, icon: Icon, label }: IconLinkProps) {
  return (
    <a
      href={href}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Icon size={20} aria-hidden="true" />
    </a>
  );
}
