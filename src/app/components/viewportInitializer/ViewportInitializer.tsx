// src/app/viewport-initializer.tsx (클라이언트 컴포넌트)
"use client";

import { useViewport } from "@/hooks/useViewport";

export function ViewportInitializer() {
  useViewport();

  return null;
}
