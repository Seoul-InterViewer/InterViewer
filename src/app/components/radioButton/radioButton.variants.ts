import { tv } from "tailwind-variants";

export const radioButtonVariants = tv({
  slots: {
    wrapper: "w-full flex items-center gap-4",
    item: "px-3.5 py-1.5 rounded-lg border cursor-pointer",
  },
  variants: {
    variant: {
      default: { item: "border-black/20 bg-white text-font-gray" },
      selected: { item: "border-transparent bg-main text-white" },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
