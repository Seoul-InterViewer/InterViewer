import { tv } from "tailwind-variants";

export const headerVariants = tv({
  base: "border-b border-gray-200",
  variants: {
    size: {
      default: "mx-auto px-4 py-4",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const navMenuVariants = tv({
  base: "font-regular-24 hover:text-main hover:font-sb-24 transition-all",
});

export const loginButtonVariants = tv({
  base: "font-sb-14 md:font-sb-24",
});

export const menuButtonVariants = tv({
  base: "flex items-center justify-center ",
});

export const searchButtonVariants = tv({
  base: "flex items-center justify-center cursor-pointer transition-all w-[26px] h-[26px] sm:w-[33px] sm:h-[33px]",
  variants: {
    state: {
      default: "",
      hover: "bg-gray-100",
    },
  },
});

export const createMenuVariants = tv({
  base: "absolute right-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50 transform origin-top-right transition-all duration-200",
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
      title: "font-sb-14 md:font-sb-24 hover:text-main hover:bg-gray-50",
      menuItem: "text-font-gray font-regular-14 md:font-regular-24 hover:text-main",
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
