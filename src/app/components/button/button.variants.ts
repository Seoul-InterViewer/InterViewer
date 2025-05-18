import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "px-5 py-2.5 rounded-md cursor-pointer [font:var(--font-regular-18)]",
  variants: {
    type: {
      default: "",
      blackBtn: "bg-black text-white",
      yellowBtn: "bg-main text-black",
      grayBtn: "bg-[#b2b2b2] text-[#434343]",
      lightGrayBtn: "bg-border text-font p-2.5 [font:var(--font-sb-18)]",
      redBtn: "bg-incorrect/60 text-white",
      deleteBtn: "bg-incorrect/60 text-white px-[7px] py-[6px] [font:var(--font-medium-12)]",
      editBtn: "bg-font text-white px-[7px] py-[6px] [font:var(--font-medium-12)]",
      fillterWhiteBtn:
        "border border-border text-font px-[16px] py-[6px] [font:var(--font-regular-14)]",
      fillterBlackBtn:
        "bg-black border border-black text-white px-[16px] py-[6px] [font:var(--font-regular-14)]",
      writeBtn:
        "bg-white border border-border text-font px-[17px] py-[6px] [font:var(--font-medium-12)]",
    },
    hover: {
      true: "hover:opacity-80 transition-opacity cursor-pointer",
    },
    mobile: {
      default: "",
      normalSize: "sm:px-4 sm:py-2 [font:var(--font-regular-14)]",
      fullSize: "w-full sm:px-4 sm:py-2",
    },
  },
  defaultVariants: {
    type: "default",
  },
});
