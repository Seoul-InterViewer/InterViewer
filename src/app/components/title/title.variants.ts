import { tv } from "tailwind-variants";

export const titleVariants = tv({
  base: "flex",
  variants: {
    direction: {
      vertical: "flex-col",
      horizontalBetween: "justify-between items-center",
      navigation: "gap-5.5 font-sb-24 text-font-gray [&>*:last-child]:text-black md:mb-11 mb-3",
    },
    container: {
      main: "flex-col md:mb-12 mb-8",
      bottom: "justify-between items-center md:mb-13 mb-7.5",
    },
    gap: {
      small: "gap-1.5",
      medium: "md:gap-7 gap-3",
      large: "gap-5.5",
    },
    text: {
      heading: "md:font-bold-56 font-sb-28",
      subheading: "md:font-sb-20 font-sb-12",
      paragraph: "md:font-regular-18 font-regular-14",
      description: "md:font-sb-12 font-medium-10 text-sub-text",
    },
    size: {
      full: "w-full",
    },
  },
});
