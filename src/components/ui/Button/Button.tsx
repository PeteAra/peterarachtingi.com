import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface SharedProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

type ButtonProps =
  | (SharedProps & { href: string; external?: boolean } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">)
  | (SharedProps & { href?: undefined; external?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>);

export function Button({
  variant = "primary",
  children,
  className,
  href,
  external,
  ...props
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className ?? ""}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        {...(props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} type="button" {...buttonProps}>
      {children}
    </button>
  );
}
