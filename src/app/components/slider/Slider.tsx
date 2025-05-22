import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ISliderProps } from "./slider.type";
import { sliderVariants } from "./slider.variants";
import { useViewport } from "@/hooks/useViewport";

export const Slider = ({ type, indicator = false, draggable = true, children }: ISliderProps) => {
  return <Swiper className={sliderVariants({ type })}>{children}</Swiper>;
};
