import { tv } from "tailwind-variants";

export const titleVariants = tv({
  variants: {
    size: {
      lg: "md:font-bold-56 font-bold-32",
      md: "md:font-bold-40 font-sb-28",
      sm: "md:font-sb-28 font-sb-20",
    },
  },
});
