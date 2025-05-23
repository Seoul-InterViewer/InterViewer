import { tv } from "tailwind-variants";

export const modalVariants = tv({
  base: "bg-white flex flex-cols rounded-lg relative z-100 shadow-[0_4px_4px_rgba(0,0,0,0.3)]",
  variants: {
    size: {
      default: "md:w-109 md:h-57.5 w-76 h-57.5 md:px-11 md:pt-17 md:pb-11",
    },
    type: {
      default: "md:w-7 md:h-7 w-5 h-5",
      bookmark: "w-5 h-5",
    },
  },
});

export const modalCloseButtonVariants = tv({
  variants: {
    type: {
      default: "md:w-7 md:h-7 w-5 h-5",
      bookmark: "w-5 h-5",
    },
  },
});
