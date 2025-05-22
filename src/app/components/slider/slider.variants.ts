import { tv } from "tailwind-variants";

export const sliderVariants = tv({
  base: "flex gap-5",
  variants: {
    type: {
      mainPageCards: "md:gap-13",
      images: "",
      selectedQuestionCards: "",
    },
  },
});
