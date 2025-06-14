import { SwiperOptions } from "swiper/types";

export interface ISliderConfig extends Partial<SwiperOptions> {}

export interface ISliderProps {
  children: React.ReactNode;
  className?: string;
  indicator?: boolean;
  draggable?: boolean;
  customConfig?: ISliderConfig;
  usePagination?: boolean;
  useNavigation?: boolean;
  useEffectCards?: boolean;
  useFreeMode?: boolean;
  slideClassName?: string;
  type: "images" | "mainPageCards" | "selectedQuestionCards" | "custom" | "gameHistory";
  breakpoints?: {
    [key: string]: {
      slidesPerView: number;
      slidesPerGroupSkip: number;
    };
  };
}
