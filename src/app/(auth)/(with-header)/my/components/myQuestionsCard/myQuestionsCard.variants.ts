export const myQuestionsCardVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      duration: 0.2,
      type: "tween",
    },
  },
};

export const myQuestionsCardItemVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};
