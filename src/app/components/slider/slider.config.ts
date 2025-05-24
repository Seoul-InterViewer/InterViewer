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
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: true,
    grabCursor: true,
    pagination: {
      type: "fraction",
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
    },
    cardsEffect: {
      rotate: true,
      perSlideOffset: 1,
      perSlideRotate: 1,
    },
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
