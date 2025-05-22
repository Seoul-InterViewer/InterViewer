import { tv } from "tailwind-variants";

export const modalVariants = tv({
  base: "bg-white md:w-109 md:h-57.5 w-76 md:px-11 md:pt-17 md:pb-11 rounded-lg flex flex-col relative z-100",
  variants: {
    type: {
      default: "md:w-7 md:h-7 w-5 h-5",
      bookmark: "w-5 h-5",
    },
  },
  defaultVariants: {
    type: "default",
  },
});
