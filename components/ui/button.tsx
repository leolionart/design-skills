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
    borderColor: "transparent",
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

function sharedButtonStyle(variant: NonNullable<ButtonProps["variant"]>): CSSProperties {
  return {
    borderRadius: "var(--theme-button-radius)",
    borderWidth: "var(--theme-button-border-width)",
    borderStyle: "var(--theme-button-border-style)",
    letterSpacing: "var(--theme-button-letter-spacing)",
    textTransform: "var(--theme-button-text-transform)",
    fontFamily: "var(--theme-button-font)",
    fontWeight: "var(--theme-button-font-weight)",
    boxShadow:
      variant === "primary"
        ? "var(--theme-button-shadow)"
        : variant === "secondary"
          ? "var(--theme-button-shadow-secondary)"
          : "none",
  };
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      style={{ ...variantStyles[variant], ...sharedButtonStyle(variant) }}
      className={[
        "inline-flex items-center justify-center px-5 py-3 text-sm no-underline transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--theme-bg)]",
        variantClasses[variant],
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
