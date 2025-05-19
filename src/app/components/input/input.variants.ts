import { tv } from "tailwind-variants";

export const inputVariants = tv({
  base: "w-full border-2 border-border indent-2 p-2 pl-0  placeholder:text-sb-20 md:text-regular-24 placeholder:text-gray-400  focus:outline-none ",
  variants: {
    variant: {
      withBg: "bg-gray-100 text-sb-16",
      withIcon: ""
    },
    withButton: {
      true: "p-3 flex-5 items-center gap-2 border-r-0",
    },
    search: {
      true: "bg-[#f8f8f8] text-sb-16",
    },
  },
});
