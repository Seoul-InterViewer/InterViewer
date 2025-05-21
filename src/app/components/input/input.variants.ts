import { tv } from "tailwind-variants";

export const inputVariants = tv({
  base: "w-full border-2 border-gray-300 indent-2 p-2 pl-0 placeholder:text-gray-400 focus:outline-none",
  variants: {
    variant: {
      default: "",
      withBg: "bg-gray-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
