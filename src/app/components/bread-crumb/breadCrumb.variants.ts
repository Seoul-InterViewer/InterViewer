import { tv } from "tailwind-variants";

export const breadCrumbVariants = tv({
  base: "flex items-center py-2",
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
