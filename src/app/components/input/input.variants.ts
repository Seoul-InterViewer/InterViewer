import { tv } from "tailwind-variants";

export const inputVariants = tv({
  base: "w-full h-full border-2 border-border indent-3 px-2 py-4 pl-0 font-sb-20 text-black placeholder:text-sub-text focus:outline-none md:font-regular-18 md:py-6",
  variants: {
    variant: {
      withBg: "bg-[#e9e9e9] font-sb-16",
      borderBottom:
        "py-3 border-0 border-b border-border font-regular-14 md:font-regular-16 md:py-3",
      blank:
        "p-2 border-0 bg-[#b4b4b4] rounded-lg  placeholder:text-black font-regular-16 text-black md:font-regular-26",

      credentials: "h-15 md:p-3 md:h-20",
    },
    withButton: {
      true: "flex-5 items-center gap-2 border-r-0",
    },
    search: {
      true: "px-1 !py-2 indent-0 bg-[#f8f8f8] font-sb-16",
    },
    error: {
      true: "text-red-500 border-red-500",
    },
  },
  compoundVariants: [
    {
      variant: "withBg",
      search: true,
      className: "indent-10 bg-[#e9e9e9]",
    },
  ],
});

export const labelVariants = tv({
  base: "flex gap-3 items-center font-medium-12",
  variants: {
    isCredential: {
      true: "absolute -translate-y-1/3 left-3 font-medium-12 bg-white text-sub-text md:font-regular-14",
    },
    error: {
      true: "text-red-500",
    },
  },
});
