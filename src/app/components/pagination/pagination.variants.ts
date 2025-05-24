import { tv } from "tailwind-variants";

export const paginationVariants = tv({
  base: "w-6 h-6 border rounded-sm cursor-pointer hover:opacity-80 transition-opacity duration-200",
  variants: {
    variant: {
      default: "border-transparent",
      selected: "border-border",
    },
    firstLastButton: {
      true: "relative",
      false: "flex justify-center items-center font-regular-14",
    },
    disabled: {
      true: "hidden",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
