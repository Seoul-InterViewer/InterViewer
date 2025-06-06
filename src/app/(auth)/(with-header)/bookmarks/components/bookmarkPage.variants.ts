import { tv } from "tailwind-variants";

export const tagCircleVariants = tv({
  base: "w-7.5 md:w-15 h-7.5 md:h-15 bg-font rounded-full flex justify-center items-center overflow-hidden transition-all duration-200 group",
  variants: {
    variant: {
      true: "hover:w-fit hover:px-6 hover:py-4",
    },
  },
});
