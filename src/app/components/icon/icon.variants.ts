import { tv } from "tailwind-variants";

export const iconVariants = tv({
  base: "",
  variants: {
    color: {
      main: "text-main",
      black: "text-black",
      correct: "text-correct",
      incorrect: "text-incorrect",
      correctBg: "text-correct-bg",
      incorrectBg: "text-incorrect-bg",
      tag: "text-tag",
      border: "text-border",
      subText: "text-sub-text",
      modalBg: "text-modal-bg",
      fontGray: "text-font-gray",
    },
  },
});
