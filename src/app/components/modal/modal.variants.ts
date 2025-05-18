import { tv } from "tailwind-variants";

export const modalVariants = tv({
  slots: {
    bg: "fixed left-0 top-0 w-full h-full z-99 flex-center bg-black/25 ",
    container: "bg-white rounded-[8px] flex-center flex-col  shadow animate-fadeIn relative z-100",
    closeButton: "absolute top-5 right-5",
    title: "font-[var(--font-regular-18)]",
    buttons: "flex justify-end gap-5 mt-7.5",
  },
});
