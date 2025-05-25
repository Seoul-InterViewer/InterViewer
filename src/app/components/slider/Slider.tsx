"use client";

import React, { useMemo, useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { ISliderProps } from "./slider.type";
import { sliderConfig } from "./slider.config";
import { Pagination, Navigation, EffectCards, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useViewport } from "@/hooks/useViewport";

export const Slider = ({
  type,
  children,
  className,
  customConfig,
  useEffectCards,
  usePagination,
  useNavigation,
  useFreeMode,
}: ISliderProps) => {
  const { isMobile } = useViewport();

  const modules = useMemo(() => {
    const modules = [];
    switch (type) {
      case "images":
        modules.push(EffectCards, Pagination);
        break;
      case "mainPageCards":
        modules.push(Navigation);
        break;
      case "selectedQuestionCards":
        modules.push(FreeMode, Navigation);
        break;
      case "gameHistory":
        modules.push(Pagination);
        break;
      case "custom": {
        if (usePagination) modules.push(Pagination);
        if (useNavigation) modules.push(Navigation);
        if (useEffectCards) modules.push(EffectCards);
        if (useFreeMode) modules.push(FreeMode);
      }
    }

    return modules;
  }, [type, usePagination, useNavigation, useEffectCards, useFreeMode]);

  const [config, setConfig] = useState({
    ...sliderConfig[type],
    ...customConfig,
  });

  useEffect(() => {
    if (type === "selectedQuestionCards") {
      setConfig((prev) => ({
        ...prev,
        navigation: !isMobile,
      }));
    }
  }, [isMobile, type]);

  return (
    <Swiper className={"w-full h-full"} {...config} modules={modules}>
      {children}
    </Swiper>
  );
};
