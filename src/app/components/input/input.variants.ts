import { tv } from "tailwind-variants";

export const inputVariants = tv({
  base: "w-full h-full border-2 border-border indent-3 px-2 py-4 pl-0 text-sb-20 placeholder:text-sub-text focus:outline-none md:text-sb-24 md:py-6",
  variants: {
    variant: {
      withBg: "bg-[#e9e9e9] text-sb-16",
      borderBottom: "py-3 border-0 border-b border-border text-regular-14 md:text-regular-16 md:py-3",
      blank:
        "p-2 border-0 bg-[#b4b4b4] rounded-lg placeholder:text-black text-regular-16 md:text-regular-26",

      credentials: "h-15 d:p-3 h-20",
    },
    withButton: {
      true: "flex-5 items-center gap-2 border-r-0",
    },
    search: {
      true: "p-2 indent-0 bg-[#f8f8f8] text-sb-16",
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
