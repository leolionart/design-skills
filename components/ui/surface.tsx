import type { ReactNode } from "react";

type SurfaceProps = {
  children: ReactNode;
  className?: string;
};

export function Surface({ children, className = "" }: SurfaceProps) {
  return (
    <div
      className={[
        "rounded-[var(--theme-radius)] border border-[var(--theme-border)] bg-[var(--theme-surface)] backdrop-blur-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
