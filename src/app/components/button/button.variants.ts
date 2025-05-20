import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "rounded-md cursor-pointer",
  variants: {
    size: {
      sm: "font-medium-12 px-2 py-1.5",
      md: "font-regular-14 px-4 py-1.5",
      lg: "font-regular-18 px-5 py-2.5",
    },
    color: {
      black: "bg-black text-white",
      white: "bg-white text-black",
      yellow: "bg-main text-black",
      red: "bg-incorrect/60 text-white",
      gray: "bg-[#b2b2b2] text-[#434343]",
      ligthGray: "bg-border text-font",
      borderGray: "bg-white border border-border text-font",
      borderBlack: "bg-black border border-black text-white",
    },
    icon: {
      true: "bg-white",
    },
    mobile: {
      true: "font-medium-14 px-4 py-2.5",
    },
    fullWidth: {
      true: "w-full",
    },
    hover: {
      true: "hover:opacity-80 transition-opacity",
    },
    disabled: {
      true: "bg-tag text-sub-text cursor-not-allowed",
    },
  },
  defaultVariants: {
    size: "md",
    color: "black",
    hover: true,
  },
});
