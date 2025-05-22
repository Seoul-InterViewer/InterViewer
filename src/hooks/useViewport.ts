"use client";

import { useEffect, useState } from "react";
export function useViewport() {
  const [currentVw, setCurrentVw] = useState(0);
  const [currentVh, setCurrentVh] = useState(0);

  const handleResize = () => {
    setCurrentVw(window.innerWidth);
    setCurrentVh(window.innerHeight);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { currentVw, currentVh };
}
