import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`.trim()}>
      {children}
    </div>
  );
}
