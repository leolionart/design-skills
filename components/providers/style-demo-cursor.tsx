"use client";

import { CursorifyProvider, DefaultCursor } from "@cursorify/react";
import type { ReactNode } from "react";

type StyleDemoCursorProps = {
  children: ReactNode;
};

export function StyleDemoCursor({ children }: StyleDemoCursorProps) {
  return (
    <CursorifyProvider
      cursor={<DefaultCursor />}
      delay={2}
      opacity={0.7}
      defaultCursorVisible
      breakpoint={1024}
      enabled
    >
      {children}
    </CursorifyProvider>
  );
}
