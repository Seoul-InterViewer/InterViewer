"use client";

import { useState, useEffect } from "react";
import viewportStore from "@/stores/viewportStore";
export function useViewport() {
  const { setDimensions } = viewportStore();

  const handleResize = () => {
    setDimensions(window.innerWidth, window.innerHeight);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
}
