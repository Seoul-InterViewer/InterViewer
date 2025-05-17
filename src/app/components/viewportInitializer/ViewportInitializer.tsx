// src/app/viewport-initializer.tsx (클라이언트 컴포넌트)
"use client";

import viewportStore from "@/stores/viewportStore";

export function ViewportInitializer() {
  const currentVw = viewportStore((state) => state.width);
  const currentVh = viewportStore((state) => state.height);

  console.log(currentVw, currentVh);

  return null;
}
