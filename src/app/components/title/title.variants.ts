import { tv } from "tailwind-variants";

export const titleVariants = tv({
  base: "flex",
  variants: {
    layout: {
      container: "flex flex-col md:mb-12 mb-8",
      navigation: "gap-5.5 font-sb-24 text-font-gray [&>*:last-child]:text-black md:mb-11 mb-3",
      bottom: "justify-between items-center md:mb-13 mb-7.5",
    },
    content: {
      detail: "flex flex-col md:gap-7 gap-3",
      setting: "justify-between items-center",
    },
    fontSize: {
      title: "md:font-bold-56 font-sb-28 w-full",
      info: "md:font-sb-20 font-sb-12",
      date: "md:font-sb-12 text-sub-text font-medium-10",
    },
    spacing: {
      detail: "flex flex-col gap-1.5",
      info: "gap-1.5 font-regular-18",
    },
  },
});
