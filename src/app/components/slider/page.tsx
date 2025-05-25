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
        <Slider type="mainPageCards">
          {Array.from({ length: 16 }, (_, index) => (
            <SwiperSlide key={index}>
              <div className={mockSlideStyles(index)}>{index + 1}</div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <h2 className="text-2xl font-bold">images</h2>
      <div className="w-80 h-130 md:w-110 md:h-140">
        <Slider type="images">
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
      <div className="w-70 h-130 md:w-120 md:h-140">
        <Slider type="gameHistory">
          {Array.from({ length: 16 }, (_, index) => (
            <SwiperSlide key={index}>
              <div className={mockSlideStyles(index)}>{index + 1}</div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <h2 className="text-2xl font-bold">Custom Config</h2>
      <p className="text-sm text-gray-500 -mt-4">
        모듈의 커스텀 스타일링은 따로 styles/slider.css 파일에 작성하셔야합니다.
      </p>
      <div className="h-50 relative w-full">
        <div className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <Slider
          type="custom"
          customConfig={{
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
              clickable: true,
            },
            effect: "cards",
            freeMode: true,
            rewind: true,
            cardsEffect: {
              rotate: true,
            },
            navigation: {
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
            },
          }}
          useNavigation
          usePagination
          useFreeMode
        >
          {Array.from({ length: 16 }, (_, index) => (
            <SwiperSlide key={index}>
              <div className={mockSlideStyles(index)}>{index + 1}</div>
            </SwiperSlide>
          ))}
        </Slider>
        <div className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
