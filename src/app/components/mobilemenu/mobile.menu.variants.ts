import { tv } from "tailwind-variants";

export const contentVariants = tv({
  base: "flex flex-col gap-4 h-[120px] overflow-y-auto ",
});

export const mobileMenuVariants = tv({
  base: "fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-3xl z-50 ",
});

export const backdropVariants = tv({
  base: " fixed inset-0 bg-black/50 z-40",
});

// 하단 흰색 배경을 위한 스타일

export const menuItemVariants = tv({
  base: "block py-3 text-lg font-medium flex items-center gap-2 ",
  variants: {
    type: {
      default: "",
      danger: "text-red-500",
      primary: "text-blue-600 dark:text-blue-400",
      action: "bg-blue-600 text-white rounded-lg text-center",
    },
  },
  defaultVariants: {
    type: "default",
  },
});

export const handleVariants = tv({
  base: "w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-5",
});
