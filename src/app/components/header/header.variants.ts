import { tv } from "tailwind-variants";

export const headerVariants = tv({
  slots: {
    header:
      "border-b border-gray-200 mx-auto px-4 fixed w-full top-0 left-0 right-0 bg-white z-40 transition-all duration-300",
    navMenu: "font-regular-18  md: font-regular-16 hover:text-main hover:font-sb-24",
    createMenu:
      "absolute right-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50 transform origin-top-right transition-all duration-200",
    login: "font-sb-14 md:font-sb-24",
  },
});

export const sidebarVariants = tv({
  base: "fixed top-0 left-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-lg",
  variants: {
    isOpen: {
      default: false,
      true: "translate-x-0",
      false: "-translate-x-full",
    },
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
      title: "font-sb-14 md:font-sb-18 hover:text-main hover:bg-gray-50 ",
      menuItem: "font-regular-14 md:font-regular-18 text-font-gray hover:text-main",
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
