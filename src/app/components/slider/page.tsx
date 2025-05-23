"use client";
import React from "react";
import { Slider } from "./Slider";
import { SwiperSlide } from "swiper/react";

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
      <div className="h-50">
        <Slider type="mainPageCards" useNavigation>
          {Array.from({ length: 16 }, (_, index) => (
            <SwiperSlide key={index}>
              <div className={mockSlideStyles(index)}>{index + 1}</div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <div className="h-50">
        <Slider type="images">
          {Array.from({ length: 16 }, (_, index) => (
            <SwiperSlide key={index}>
              <div className={mockSlideStyles(index)}>{index + 1}</div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <div className="h-50">
        <Slider type="selectedQuestionCards">
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
