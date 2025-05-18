import { tv } from "tailwind-variants";

export const inputVariants = tv({
  base: "w-full h-full border-2 border-border indent-2 px-2 py-4 pl-0 text-sb-20 placeholder:text-sub-text focus:outline-none md:text-sb-24 md:py-6",
  variants: {
    variant: {
      withBg: "bg-[#e9e9e9] text-sb-16",
      borderBottom: "border-none border-b-1 border-border",
    },
    withButton: {
      true: "flex-5 items-center gap-2 border-r-0 md:p-3",
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
