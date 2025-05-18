import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "font-var(--font-regular-18) px-5 py-2.5 rounded-[4px]",
  variants: {
    type: {
      defalut: "",
      blackBtn: "bg-black text-white",
      yellowBtn: "bg-var(--color-main) text-black",
      grayBtn: "bg-var(--color-font-gray) text-[#434343]",
      lightGrayBtn:
        "bg-var(--color-border) text-var(--color-font) font-var(--font-sb-18) p-2.5     ",
      redBtn: "bg-var(--color-incorrect) text-white",
      deleteBtn: "bg-var(--color-incorrect) text-white font-var(--font-md-12) px-[7px] py-[6px]",
      editBtn: "bg-var(--color-font) text-white font-var(--font-md-12) px-[7px] py-[6px] ",
      borderBtn:
        "border border-var(--color-border) text-var(--color-font) font-var(--font-regular-14) px-[16px] py-[6px]",
    },
  },
  defaultVariants: {
    type: "defalut",
  },
});
