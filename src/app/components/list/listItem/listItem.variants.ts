import { tv } from "tailwind-variants";

export const listItemVariants = tv({
  base: "w-full h-55 flex justify-between items-center md:p-8 border-1 border-border rounded-md",
  variants: {
    type: {
      searchResult: "",
      image: "",
      questionSelect: "",
      question: "",
      wrongAnswer: "",
      gameHistory: "",
      bookmarkGroup: "",
      bookmarkSelect: "",
      game: "",
      comment: "",
    },
  },
});
