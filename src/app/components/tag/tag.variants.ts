import { tv } from "tailwind-variants";

export const tagVariants = tv({
  base: " items-center rounded-md border",
  variants: {
    type: {
      default:
        "bg-[var(--color-tag)] text-font border-[var(--color-tag)] px-[7px] py-[3px] font-sb-12",
      card: "bg-white text-gray-800 border-gray-300 text-medium-8 px-[5px] py-[3px] md:text-regular-14 md:px-[10px] md:py-[5px]",
      chooseTag:
        "bg-white text-[var(--color-font-gray)] border-gray-300 px-[7px] py-[3px] text-sb-12 block text-medium-10 md:text-regular-14",
      correct:
        "bg-[var(--color-correct-bg)] text-[var(--color-correct)] border-[var(--color-correct)] px-[7px] py-[3px] text-sb-12",
      incorrect:
        "bg-[var(--color-incorrect-bg)] text-[var(--color-incorrect)] border-[var(--color-incorrect)] px-[7px] py-[3px] text-sb-12 ",
    },
  },
  defaultVariants: {
    type: "default",
  },
});
