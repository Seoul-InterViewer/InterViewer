import { ISliderConfig } from "./slider.type";

const base: ISliderConfig = {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 20,
  pagination: {
    clickable: true,
    type: "bullets",
    renderBullet: undefined,
  },
  effect: "cards",
  navigation: false,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 52,
    },
  },
};

export const sliderConfig: Record<string, ISliderConfig> = {
  mainPageCards: {
    ...base,
    effect: "slide",
    navigation: true,
  },
  images: {
    ...base,
  },
  selectedQuestionCards: {
    ...base,
  },
  gameHistory: {
    ...base,
  },
};

// renderBullet: function (index, className) {
//   return '<span class="' + className + '">' + (index + 1) + '</span>';
// },
