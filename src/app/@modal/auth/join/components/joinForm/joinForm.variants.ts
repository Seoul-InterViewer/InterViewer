export const joinFormVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      type: "tween",
    },
  },
};

export const joinFormItemVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3
    }
  },
};
