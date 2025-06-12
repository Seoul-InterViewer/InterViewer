import { tv } from "tailwind-variants";

export const container = tv({
  base: "md:flex items-center",
  variants: {
    type: {
      game: "gap-4 md:pr-15 hidden",
      session: "",
    },
  },
});

export const progressCircle = tv({
  base: "flex-center rounded-full bg-sub-text w-10 h-10",
  variants: {
    type: {
      game: "w-28 h-28",
      session: "md:w-17.5 md:h-17.5",
    },
  },
});

export const innerCircle = tv({
  base: "w-5/6 h-5/6 rounded-full bg-white flex-center",
});

export const percentage = tv({
  base: "min-w-18.75 text-center",
  variants: {
    type: {
      game: "font-sb-28",
      session: "md:font-sb-20 font-sb-12",
    },
  },
});
