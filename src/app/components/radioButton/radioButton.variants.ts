import { tv } from "tailwind-variants";

export const radioButtonVariants = tv({
  base: "px-3.5 py-1.5 rounded-lg border font-sb-14 cursor-pointer",
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
