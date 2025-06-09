import { tv } from "tailwind-variants";

export const cardVariants = tv({
  // 1) base 정의
  base: "bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-[4px_4px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300 cursor-pointer ",
  // 2) size별로 slots 덮어쓰기
  variants: {
    type: {
      mainCard: "w-full h-fit min-h-55 py-2 px-2 md:px-4 md:py-4  md:w-104 md:h-104",
      favoriteCard: "w-40 h-40 py-2 px-2  md:w-100 md:h-100 md:py-8 md:px-8",
      editCard: "w-full h-58 py-2 px-2 md:w-full md:h-56 md:px-12 md:py-7",
      detailCard: "w-full h-61 py-6 px-7 md:w-full md:h-56 md:px-12 md:py-7",
      checkCard: "w-full h-84 md:w-full py-4 px-4 md:h-56  md:px-12 md:py-7",
    },
  },
});
