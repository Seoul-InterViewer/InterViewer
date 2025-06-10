import { tv } from "tailwind-variants";

export const resultVariants = tv({
  slots: {
    gameResultWrapper: "w-full min-h-screen relative",
    questionWrapper: "flex flex-col flex-col-reverse md:flex-row md:items-start",
    resultSidebarWrapper:
      "w-full md:w-[20vw] self-start md:fixed top-45 right-0 pr-[1vw] bg-white md:min-h-screen",
    scoreWrapper:
      "flex w-full px-4 md:px-0 py-3 md:py-10 flex-col bg-main/50 md:flex-center rounded-lg mb-12 relative",
    scoreTitle: "font-sb-28 md:font-bold-48 md:text-center mb-2 md:mb-5",
    scoreDescription: "font-regular-14 md:text-center",
    scoreList:
      "absolute md:static bottom-1/2 right-3 translate-y-1/2 md:hidden flex items-center gap-2",
    overShadow:
      "ring-1 ring-gray-200 shadow-lg rounded-2xl bg-gray-200/30 transition-all duration-400",
  },
});

// 모바일용 오른쪽 슬라이드 사이드바 variants
export const gameResultSidebarVariants = tv({
  base: "fixed top-0 right-0 bottom-0 w-3/4 max-w-xs h-full bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out shadow-lg",
  variants: {
    isOpen: {
      default: false,
      true: "-translate-x-0",
      false: "translate-x-full",
    },
  },
});
