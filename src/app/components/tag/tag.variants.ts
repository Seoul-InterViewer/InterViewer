import { tv } from "tailwind-variants";

export const tagVariants = tv({
  base: "items-center rounded-md border  max-w-[12ch] truncate whitespace-nowrap inline-block",
  variants: {
    type: {
      default: "bg-tag text-font border-gray-300 px-2 py-1 font-sb-12",
      card: "bg-background text-font border-gray-300 font-medium-8 md:font-regular-14 px-1 py-0.5 md:px-2 md:py-1 ",
      chooseTag:
        "bg-background text-font-gray border-font-gray px-2 py-2 font-medium-10 md:font-regular-14",
      correct: "bg-correct-bg text-correct border-correct px-2 py-1",
      incorrect: "bg-incorrect-bg text-incorrect border-incorrect px-2 py-1",
    },
  },
});
