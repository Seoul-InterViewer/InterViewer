import { tv } from "tailwind-variants";

export const wrapperVariants = tv({
  base: "w-full h-full border border-border",
  variants: {
    variant: {
      comment1: "px-5 py-4 flex flex-col gap-2.5 border-[#cdcdcd]",
      comment2: "",
      report: "px-4 py-3.75 rounded shadow-[0_0_1px_rgba(0,0,0,0.25)]",
    },
  },
  defaultVariants: {
    variant: "comment1",
  },
});

export const textareaVariants = tv({
  base: "w-full h-full text-black resize-none placeholder:text-sub-text focus:outline-none",
  variants: {
    variant: {
      comment1: "font-regular-18",
      comment2: "",
      report: "font-regular-14",
    },
  },
  defaultVariants: {
    variant: "comment1",
  },
});
