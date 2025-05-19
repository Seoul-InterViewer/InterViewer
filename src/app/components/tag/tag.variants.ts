import { tv } from "tailwind-variants";

export const tagVariants = tv({
  base: "inline-flex items-center px-3 py-1 rounded-md border",
  variants: {
    type: {
      default: "bg-[var(--color-tag)] text-gray-800 border-[var(--color-tag)] ",
      card: "bg-white text-gray-800 border-gray-300 font-[var(--font-regular-18)]",
    },
  },
  defaultVariants: {
    type: "default",
  },
});
