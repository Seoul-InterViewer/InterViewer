import { tv } from "tailwind-variants";

export const sliderVariants = tv({
  base: "h-full flex gap-5",
  variants: {
    type: {
      mainPageCards: "",
      images: "",
      selectedQuestionCards: "",
      gameHistory: "",
    },
  },
});
