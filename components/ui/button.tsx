import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "shadow-[var(--theme-shadow)] hover:-translate-y-0.5 hover:opacity-95",
  secondary: "border hover:-translate-y-0.5 hover:bg-[var(--theme-bg-alt)]",
  ghost: "border border-transparent hover:border-[var(--theme-border)] hover:bg-[var(--theme-surface)]",
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, CSSProperties> = {
  primary: {
    backgroundColor: "var(--theme-accent)",
    color: "var(--theme-accent-contrast)",
  },
  secondary: {
    backgroundColor: "var(--theme-surface-strong)",
    borderColor: "var(--theme-border)",
    color: "var(--theme-text)",
  },
  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: "var(--theme-text)",
  },
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      style={variantStyles[variant]}
      className={[
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] no-underline transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--theme-bg)]",
        variantClasses[variant],
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
