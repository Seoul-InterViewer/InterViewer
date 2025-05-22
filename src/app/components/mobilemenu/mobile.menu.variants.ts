import { tv } from "tailwind-variants";

export const contentVariants = tv({
  base: "flex flex-col gap-4   ",
});

export const mobileMenuVariants = tv({
  base: "fixed bottom-0 left-0 right-0 bg-white  rounded-t-3xl z-50 ",
});

export const backdropVariants = tv({
  base: "fixed inset-0 bg-black/50 z-40",
});

export const menuItemVariants = tv({
  base: "block py-3  font-regular-18 flex items-center gap-2 ",
  variants: {
    type: {
      default: "",
      danger: "text-incorrect/60",
    },
  },
  defaultVariants: {
    type: "default",
  },
});

export const handleVariants = tv({
  base: "w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-5",
});
