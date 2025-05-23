import { SwiperModule, SwiperOptions } from "swiper/types";

export interface ISliderConfig extends Partial<SwiperOptions> {}

export interface ISliderProps {
  children: React.ReactNode;
  indicator?: boolean;
  draggable?: boolean;
  customConfig?: ISliderConfig;
  usePagination?: boolean;
  useNavigation?: boolean;
  useEffectCards?: boolean;
  type: "images" | "mainPageCards" | "selectedQuestionCards" | "gameHistory";
  breakpoints?: {
    [key: string]: {
      slidesPerView: number;
      slidesPerGroupSkip: number;
    };
  };
}
