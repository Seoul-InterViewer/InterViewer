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
  base: "border flex items-center justify-center w-[77px] h-[38px] sm:w-[133px] sm:h-[65px]",
});

export const menuButtonVariants = tv({
  base: "border flex items-center justify-center cursor-pointer w-[40px] h-[40px] sm:w-[52px] sm:h-[52px]",
});

export const searchButtonVariants = tv({
  base: "border flex items-center justify-center cursor-pointer transition-all w-[26px] h-[26px] sm:w-[33px] sm:h-[33px]",
  variants: {
    state: {
      default: "",
      hover: "bg-gray-100",
    },
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

export const sidebarMenuItemVariants = tv({
  base: "block py-2 transition-colors rounded-md px-2",
  variants: {
    type: {
      title: "font-bold text-bold-32 hover:text-main hover:bg-gray-50",
      menuItem: "text-font-gray text-regular-24 hover:text-[var(--color-font)] hover:bg-gray-100",
    },
    state: {
      default: "",
      active: "text-main",
    },
  },
  defaultVariants: {
    type: "menuItem",
    state: "default",
  },
});
