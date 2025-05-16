import { tv } from "tailwind-variants";

export const breadCrumbVariants = tv({
  base: "flex items-center text-sm py-2",
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const breadCrumbItemVariants = tv({
  base: "transition-colors",
  variants: {
    state: {
      default: "text-font-gray hover:text-gray-900",
      current: "font-medium",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export default breadCrumbVariants;
