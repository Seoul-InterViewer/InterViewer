import { tv } from "tailwind-variants";

export const headerVariants = tv({
  base: "border-b border-gray-200",
  variants: {
    size: {
      default: "mx-auto px-4 py-4",
      compact: "mx-auto px-2 py-2",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const logoVariants = tv({
  base: "border flex items-center justify-center",
  variants: {
    size: {
      default: "w-[133px] h-[65px]",
      small: "w-[100px] h-[50px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const menuButtonVariants = tv({
  base: "border flex items-center justify-center cursor-pointer",
  variants: {
    size: {
      default: "w-[52px] h-[52px]",
      small: "w-[40px] h-[40px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const searchButtonVariants = tv({
  base: "border flex items-center justify-center cursor-pointer transition-all",
  variants: {
    size: {
      default: "w-[33px] h-[33px]",
      small: "w-[28px] h-[28px]",
    },
    state: {
      default: "",
      hover: "bg-gray-100",
    },
  },
  defaultVariants: {
    size: "default",
    state: "default",
  },
});

export const sidebarVariants = tv({
  base: "fixed top-0 left-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-lg",
  variants: {
    isOpen: {
      true: "translate-x-0",
      false: "-translate-x-full",
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

export const modalOverlayVariants = tv({
  base: "fixed inset-0 z-40 transition-opacity duration-300 cursor-pointer",
  variants: {
    type: {
      sidebar: "bg-black/60",
      search: "bg-black/70",
    },
  },
  defaultVariants: {
    type: "sidebar",
  },
});
