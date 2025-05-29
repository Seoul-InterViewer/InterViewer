import { tv } from "tailwind-variants";

// Slots
export const mobileMenuVariants = tv({
  slots: {
    mobileMenu: "fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50",
    content: "flex flex-col gap-4",
    backdrop: "fixed inset-0 bg-black/50 z-40",
    handle: "w-12 h-1 bg-gray-300 rounded-full mx-auto mb-5",
    menuItem: "block py-3 font-regular-18 flex items-center gap-2 ",
  },
  variants: {
    type: {
      default: {
        menuItem: "",
      },
      danger: {
        menuItem: "text-incorrect/60",
      },
    },
  },
});

// Animation variants
export const menuAnimationVariants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 80,
    },
  },
  exit: {
    y: "100%",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};
