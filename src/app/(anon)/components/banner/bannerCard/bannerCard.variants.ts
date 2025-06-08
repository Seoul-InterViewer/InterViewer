import { tv } from "tailwind-variants";

export const bannerCardVariants = tv({
  base: [
    // Main card styles
    "p-5 md:p-10 w-full h-full max-h-50 md:max-h-none md:w-85 md:aspect-square bg-white rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] relative",

    // Before pseudo-element
    "before:content-[attr(data-title)]",
    "before:absolute",
    "before:bottom-0",
    "before:left-0",
    "before:overflow-hidden",
    "before:w-full",
    "before:h-0",
    "before:duration-300",
    "before:ease-in-out",
    "before:z-10",
    "before:bg-main",
    "before:text-white",
    "before:break-keep",
    "before:p-0",
    "before:font-bold-32",
    "before:rounded-lg",
    "before:opacity-0",
    "before:transition-all",
    "hover:before:h-full",
    "hover:before:p-10",
    "hover:before:opacity-100",

    // After pseudo-element
    "after:content-[attr(data-desc)]",
    "after:absolute",
    "after:bottom-0",
    "after:left-0",
    "after:overflow-hidden",
    "after:w-full",
    "after:h-0",
    "after:duration-300",
    "after:ease-in-out",
    "after:z-10",
    "after:text-white",
    "after:p-0",
    "after:font-regular-18",
    "after:break-keep",
    "after:!leading-6",
    "after:transition-all",
    "hover:after:h-full",
    "hover:after:p-10",
    "hover:after:pt-36",
  ].join(" "),
});
