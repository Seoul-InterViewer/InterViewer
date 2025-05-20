import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "text-regular-18 px-5 py-2.5 rounded-md cursor-pointer",
  variants: {
    type: {
      blackBtn: "bg-black text-white",
      yellowBtn: "bg-main text-black",
      whiteBtn: "bg-white text-black",
      grayBtn: "bg-[#b2b2b2] text-[#434343]",
      lightGrayBtn: "bg-border text-font text-sb-18 p-2.5",
      redBtn: "bg-incorrect/60 text-white",
      deleteBtn: "bg-incorrect/60 text-medium-12 text-white px-2 py-1.5",
      editBtn: "bg-font text-medium-12 text-white px-2 py-1.5",
      fillterWhiteBtn:
        "border border-border text-font text-regular-14 px-4 py-1.5 md:text-regular-18",
      fillterBlackBtn:
        "bg-black border border-black text-white text-font text-regular-14  px-4 py-1.5",
      writeBtn: "bg-white border border-border text-font text-font text-medium-12  px-4 py-1.5",
      disabledBtn: "bg-tag text-sub-text",
    },
    hover: {
      true: "transition-opacity cursor-pointer",
    },
    mobile: {
      normalSize: "sm:px-4 sm:py-2 text-regular-14",
      fullSize: "w-full sm:px-4 sm:py-2",
    },
  },
});
