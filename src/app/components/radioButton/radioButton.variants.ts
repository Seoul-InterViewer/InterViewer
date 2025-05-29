import { tv } from "tailwind-variants";

export const radioButtonVariants = tv({
  base: "px-3.5 py-1.5 rounded-lg border cursor-pointer transition-all duration-200 hover:opacity-80 font-sb-12 md:font-sb-14",
  variants: {
    variant: {
      default: "border-black/20 bg-white text-font-gray",
      selected: "border-transparent bg-main text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
