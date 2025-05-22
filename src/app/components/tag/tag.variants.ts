import { tv } from "tailwind-variants";

export const tagVariants = tv({
  base: " items-center rounded-md border",
  variants: {
    type: {
      default: "bg-[var(--color-tag)] text-font border-[var(--color-tag)] px-2 py-1 font-sb-12",
      card: "bg-[var(--color-background)] text-font border-gray-300 font-medium-8 md:font-regular-14  px-1 py-[1] md:px-4 md:py-2 ",
      chooseTag:
        "bg-[var(--color-background)] text-font-gray border-font-gray px-2 py-2 font-medium-10 md:font-regular-14",
      correct: "bg-[var(--color-correct-bg)] text-correct border-[var(--color-correct)] px-2 py-1",
      incorrect:
        "bg-[var(--color-incorrect)]/10 text-incorrect border-[var(--color-incorrect)] px-2 py-1",
    },
  },
  defaultVariants: {
    type: "default",
  },
});
