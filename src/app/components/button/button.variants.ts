import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "px-5 py-2.5 rounded-md cursor-pointer [font:var(--font-regular-18)]",
  variants: {
    type: {
      default: "",
      blackBtn: "bg-black text-white",
      whiteBtn: "bg-white text-black",
      yellowBtn: "bg-main text-black",
      grayBtn: "bg-[#b2b2b2] text-[#434343]",
      lightGrayBtn: "bg-border text-font text-sb-18 p-2.5 ",
      redBtn: "bg-incorrect/60 text-white",
      deleteBtn: "bg-incorrect/60 text-white text-medium-12 px-2 py-1.5 ",
      editBtn: "bg-font text-white text-medium-12 px-2 py-1.5",
      fillterWhiteBtn: "border border-border text-font text-regular-14 px-4 py-1.5",
      fillterBlackBtn:
        "bg-black border border-black text-white text-font text-regular-14  px-4 py-1.5",
      writeBtn: "bg-white border border-border text-font text-font text-medium-12  px-4 py-1.5",
      disabledBtn: "bg-tag text-sub-text",
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
