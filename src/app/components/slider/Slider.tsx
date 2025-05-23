"use client";

import React, { useMemo, useState } from "react";
import { Swiper } from "swiper/react";
import { ISliderProps } from "./slider.type";
import { sliderVariants } from "./slider.variants";
import { sliderConfig } from "./slider.config";
import { Pagination, Navigation, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperModule } from "swiper/types";

export const Slider = ({
  type,
  children,
  customConfig,
  useEffectCards,
  usePagination,
  useNavigation,
}: ISliderProps) => {
  // 필요한 모듈만 동적으로 추가
  const modules = useMemo(() => {
    const modules = [];
    if (usePagination) modules.push(Pagination);
    if (useNavigation) modules.push(Navigation);
    if (useEffectCards) modules.push(EffectCards);
    return modules;
  }, [usePagination, useNavigation, useEffectCards]);

  const config = {
    ...sliderConfig[type],
    ...customConfig,
  };

  return (
    <Swiper className={sliderVariants({ type })} {...config} modules={modules}>
      {children}
    </Swiper>
  );
};
