import { Variants } from "motion/react";

export const emptyUIMotionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
  },
};
