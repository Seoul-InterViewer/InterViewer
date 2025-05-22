import { Variants } from "motion/react";
import { tv } from "tailwind-variants";
export const emptyUIMotionVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "tween",
    },
  },
};

export const emptyUIChildVariants: Variants = {
  "0": { opacity: 0, y: -50, rotate: 36, zIndex: 1 },
  "1": { opacity: 0, y: -50, rotate: 0, zIndex: 2 },
  "2": { opacity: 0, y: -50, rotate: -36, zIndex: 1 },
  animate0: {
    opacity: 1,
    x: 20,
    y: 50,
    transition: {
      type: "tween",
      delay: 0.32,
    },
  },
  animate1: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delay: 0,
    },
  },
  animate2: {
    opacity: 1,
    x: -20,
    y: 50,
    transition: {
      type: "tween",
      delay: 0.16,
    },
  },
};

export const emptyUIMobileChildVariants: Variants = {
  ...emptyUIChildVariants,
  animate0: {
    ...emptyUIChildVariants.animate0,
    x: 10,
    y: 25,
  },
  animate1: {
    ...emptyUIChildVariants.animate1,
    y: 0,
  },
  animate2: {
    ...emptyUIChildVariants.animate2,
    x: -10,
    y: 25,
  },
};

export const emptyUIGameVariants: Variants = {
  "0": { opacity: 0, y: -50, rotate: 4, zIndex: 1 },
  "1": { opacity: 0, y: -50, rotate: -6, zIndex: 2 },
  "2": { opacity: 0, y: -50, rotate: 8, zIndex: 1 },
  animate0: {
    opacity: 1,
    x: 40,
    y: 0,
    transition: {
      type: "tween",
      delay: 0.32,
    },
  },
  animate1: {
    opacity: 1,
    x: 20,
    y: 80,
    transition: {
      type: "tween",
      delay: 0,
    },
  },
  animate2: {
    opacity: 1,
    x: -50,
    y: 60,
    transition: {
      type: "tween",
      delay: 0.16,
    },
  },
};

export const emptyUIGameMobileVariants: Variants = {
  ...emptyUIGameVariants,
  animate0: {
    ...emptyUIGameVariants.animate0,
    x: 20,
    y: 0,
  },
  animate1: {
    ...emptyUIGameVariants.animate1,
    x: 10,
    y: 40,
  },
  animate2: {
    ...emptyUIGameVariants.animate2,
    x: -25,
    y: 30,
  },
};

export const emptyUIStyleVariants = tv({
  slots: {
    container: "flex flex-col items-center justify-center gap-y-20 md:gap-y-30",
    bookmarkInnerContainer: "relative min-w-50 min-h-40 md:min-h-80 md:min-w-110",
    gameInnerContainer: "relative min-w-90 min-h-50 md:min-h-94 md:min-w-206",
    bookmarkChild:
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 *:w-25 *:h-25 md:*:w-50 md:*:h-50 origin-bottom",
    gameChild:
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 *:max-w-none *:object-cover origin-center",
    description: "font-sb-18 md:font-sb-28 text-center",
  },
});
