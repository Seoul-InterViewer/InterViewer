import { useState, useEffect } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    // 초기값 설정
    setIsMobile(media.matches);

    // 리스너 함수
    const listener = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // 이벤트 리스너 등록
    media.addEventListener("change", listener);

    // 클린업
    return () => media.removeEventListener("change", listener);
  }, []);

  return isMobile;
}
