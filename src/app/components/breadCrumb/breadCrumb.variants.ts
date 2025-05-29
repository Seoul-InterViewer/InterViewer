import { tv } from "tailwind-variants";

export const breadCrumbVariants = tv({
  base: "flex items-center py-2 font-regular-14 md:font-regular-16",
});

export const breadCrumbItemVariants = tv({
  base: "transition-colors",
  variants: {
    state: {
      default: "text-font-gray hover:text-font",
      current: "font-sb-14 md:font-sb-16 ",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export default breadCrumbVariants;
