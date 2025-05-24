"use client";
import React from "react";
import { Slider } from "./Slider";
import { SwiperSlide } from "swiper/react";
import { mock } from "node:test";

const bgColors = [
  "bg-red-100",
  "bg-red-200",
  "bg-red-300",
  "bg-red-400",
  "bg-red-500",
  "bg-red-600",
  "bg-red-700",
  "bg-red-800",
  "bg-red-900",
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
  "bg-blue-600",
  "bg-blue-700",
  "bg-blue-800",
  "bg-blue-900",
];
const mockSlideStyles = (index: number) => {
  return `w-full h-full ${bgColors[index]}`;
};

export default function SliderTestPage() {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-2xl font-bold">mainPageCards</h2>
      <div className="h-50">
        <Slider type="mainPageCards" useNavigation>
          {Array.from({ length: 16 }, (_, index) => (
            <SwiperSlide key={index}>
              <div className={mockSlideStyles(index)}>{index + 1}</div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <h2 className="text-2xl font-bold">images</h2>
      <div className="w-80 h-130 md:w-110 md:h-140">
        <Slider type="images" useEffectCards usePagination>
          {Array.from({ length: 16 }, (_, index) => (
            <SwiperSlide key={index} className={mockSlideStyles(index)}>
              {index + 1}
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <h2 className="text-2xl font-bold">selectedQuestionCards</h2>
      <div className="h-50">
        <Slider type="selectedQuestionCards">
          {Array.from({ length: 16 }, (_, index) => (
            <SwiperSlide key={index}>
              <div className={mockSlideStyles(index)}>{index + 1}</div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <h2 className="text-2xl font-bold">gameHistory</h2>
      <div className="h-50">
        <Slider type="gameHistory">
          {Array.from({ length: 16 }, (_, index) => (
            <SwiperSlide key={index}>
              <div className={mockSlideStyles(index)}>{index + 1}</div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
}
