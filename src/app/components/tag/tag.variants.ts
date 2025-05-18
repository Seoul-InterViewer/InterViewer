import { tv } from "tailwind-variants";

export const tagVariants = tv({
  base: "inline-flex items-center px-3 py-1 rounded-md border",
  variants: {
    type: {
      default: "bg-[var(--color-tag)] text-gray-800 border-[var(--color-tag)] ",
      level: "bg-white text-gray-800 border-gray-300",
      category: "bg-white text-gray-800 border-gray-300",
      card: "bg-white text-gray-800 border-gray-300 font-[var(--font-regular-18)]",
    },
    selected: {
      true: "bg-yellow-400 text-[var(--color-background)] border-yellow-400",
    },
    hover: {
      true: "hover:opacity-80 transition-opacity cursor-pointer",
    },
  },
  defaultVariants: {
    type: "level",
  },
});
