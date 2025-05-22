import { tv } from "tailwind-variants";

export const wrapperVariants = tv({
  base: "w-full h-full border border-border",
  variants: {
    variant: {
      comment: "px-3 py-3 md:px-5 md:py-4 flex flex-col gap-2.5 border-[#cdcdcd]",
      reply: "bg-white p-2.5",
      report: "px-3 py-3 md:px-4 md:py-3.75 rounded shadow-[0_0_1px_rgba(0,0,0,0.25)]",
      wrongAnswer: "h-25 bg-white p-2.5 rounded",
    },
  },
  defaultVariants: {
    variant: "comment",
  },
});

export const textareaVariants = tv({
  base: "w-full h-full text-black resize-none placeholder:text-sub-text focus:outline-none",
  variants: {
    variant: {
      comment: "font-regular-14 md:font-regular-18",
      reply: "font-regular-14 md:font-regular-18",
      report: "font-medium-12 md:font-regular-14",
      wrongAnswer: "font-medium-10",
    },
  },
  defaultVariants: {
    variant: "comment",
  },
});
