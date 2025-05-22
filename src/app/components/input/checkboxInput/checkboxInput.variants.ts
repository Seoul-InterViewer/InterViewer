import { tv } from "tailwind-variants";

export const checkboxInputVariants = tv({
  base: [
    "w-5 h-5 rounded-sm md:w-6 md:h-6",
    "appearance-none",
    "-webkit-appearance-none",
    "-moz-appearance-none",
    "border border-gray-300",
    "checked:bg-black checked:border-black",
    "relative",
    "after:content-none checked:after:content-['']",
    "after:absolute after:left-1/2 after:top-1/2",
    "after:-translate-x-1/2 after:-translate-y-2/3",
    "after:w-1.5 after:h-2.5 md:after:w-2 md:after:h-3",
    "after:border-r-2 after:border-b-2 after:border-white after:rotate-45",
  ],
  variants: {
    variant: {
      bookmark: "md:w-5 md:h-5",
    },
  },
});


