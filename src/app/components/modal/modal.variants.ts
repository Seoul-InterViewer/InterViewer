import { tv } from "tailwind-variants";

export const modalVariants = tv({
  slots: {
    bg: "fixed left-0 top-0 w-full h-full z-1000 flex-center bg-black/25 ",
    container: "bg-white rounded-[8px] shadow animate-fadeIn relative",
    closeButton: "absolute top-5 right-5",
    title: "font-[var(--font-regular-18)]",
  },
});
