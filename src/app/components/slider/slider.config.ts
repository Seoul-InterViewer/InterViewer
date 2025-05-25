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
      renderFraction: function (currentClass: string, totalClass: string) {
        return `<div class="images-pagination-fraction bg-black/80 text-white text-xs px-4 py-2 rounded-full md:text-sm"><span class="${currentClass}"></span> / <span class="${totalClass}"></span></div>`;
      },
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
    navigation: true,
    freeMode: true,
    grabCursor: true,
    slidesPerView: 2,
    slidesPerGroup: 1,
    breakpoints: {
      768: {
        freeMode: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
    },
  },
  gameHistory: {
    ...base,
    grabCursor: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      clickable: true,
      bulletClass: "game-history-bullet",
      bulletActiveClass: "game-history-bullet-active",
      renderBullet: function (index: number, className: string) {
        return `<span class="${className} !cursor-pointer">${index + 1}</span>`;
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
  },
};
