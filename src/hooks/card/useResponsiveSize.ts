import { useEffect, useState } from "react";

export function useResponsiveSize(whichSmall: "178" | "165" = "178"): "410" | "178" | "165" {
  const [size, setSize] = useState<"410" | "178" | "165">("410");

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width:768px)`);
    const handleResize = () => {
      if (mediaQuery.matches) {
        setSize(whichSmall === "178" ? "178" : "165");
      } else {
        setSize("410");
      }
    };
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [whichSmall]);

  return size;
}
