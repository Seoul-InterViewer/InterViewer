"use client";

import React from "react";
import { createVariants } from "../../createVariants";
import { Title } from "@/app/components/title/Title";
import { Icon } from "@/app/components/icon/Icon";
import { Button } from "@/app/components/button/Button";
import { buttonVariants } from "@/app/components/button/button.variants";
import { Slider } from "@/app/components/slider";
import { SwiperSlide } from "swiper/react";

const {
  questionTextarea,
  questionTextareaCount,
  codePenInputWrapper,
  codePenInput,
  fileUploadTitleWrapper,
  imageSlideWrapper,
  fileDetailWrapper,
  fileDetailIcon,
  fileDetailThumbnail,
} = createVariants();

const bgColors = ["bg-gray-100", "bg-gray-200", "bg-gray-300", "bg-gray-400", "bg-gray-500"];

const mockSlideStyles = (index: number) => {
  return `w-full h-full ${bgColors[index]}`;
};

const files = [
  {
    id: 1,
    name: "react_컴포넌트.png",
    date: "25/05/14",
    size: "12mb",
  },
  {
    id: 2,
    name: "useEffect_활용법.jpg",
    date: "25/05/14",
    size: "8mb",
  },
  {
    id: 3,
    name: "리덕스_패턴_정리.png",
    date: "25/05/14",
    size: "15mb",
  },
  {
    id: 4,
    name: "최적화_팁.jpg",
    date: "25/05/14",
    size: "2mb",
  },
  {
    id: 5,
    name: "테스트_코드_예시.png",
    date: "25/05/14",
    size: "1mb",
  },
  {
    id: 6,
    name: "디자인_시스템_가이드.jpg",
    date: "25/05/14",
    size: "5mb",
  },
];

export const QuestionCreateBody = ({
  questionCount,
  answerCount,
  onQuestionChange,
  onAnswerChange,
}: {
  questionCount: number;
  answerCount: number;
  onQuestionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAnswerChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-10">
      {/* 질문, 해설, CODEPEN URL, 파일 첨부 */}
      <div className="flex flex-col gap-20">
        {/* 질문 */}
        <div>
          <div className="w-full h-25 md:h-54 border-border border flex flex-col gap-2.5">
            <textarea
              className={questionTextarea()}
              placeholder="질문을 적어주세요"
              onChange={onQuestionChange}
            ></textarea>
            <div className="w-full flex justify-between  px-3 py-3 md:px-5 md:py-4 items-center  bottom-7 left-5">
              <span className={questionTextareaCount()}>{questionCount} / 500</span>
            </div>
          </div>
        </div>
        {/* 해설 */}
        <div className="flex flex-col gap-5">
          <Title size="md" title="📝&nbsp;해설" />
          <div className="w-full h-25 md:h-54 border-border border flex flex-col gap-2.5">
            <textarea
              className={questionTextarea()}
              placeholder="해설을 적어주세요"
              onChange={onAnswerChange}
            ></textarea>
            <div className="w-full flex justify-between  px-3 py-3 md:px-5 md:py-4 items-center  bottom-7 left-5">
              <span className={questionTextareaCount()}>{answerCount} / 500</span>
            </div>
          </div>
        </div>
        {/* CODEPEN URL */}
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <Icon name="codepen" className="w-8 h-8 md:w-12 md:h-10" />
            <Title size="sm" title="CODEPEN URL" />
          </div>
          <div className={codePenInputWrapper()}>
            <input className={codePenInput()} placeholder="https://..." />
          </div>
        </div>
        {/* 파일 첨부 */}
        <div>
          {/* 파일 첨부 TOP TITLE */}
          <div className={fileUploadTitleWrapper()}>
            {/* 이미지 UPLOAD */}
            <div className="flex gap-2 items-center ">
              <p>이미지 업로드</p>
              <Icon name="upload" size={22} />
            </div>
            {/* 파일 첫번째 이름 */}
            <div className="flex gap-2">
              <p>img/main.py...(10)</p>
              <div>수정/편집</div>
            </div>
          </div>

          {/* 파일 첨부 내용 */}
          <div className="flex justify-between">
            {/* 이미지 슬라이드 */}
            <div className={imageSlideWrapper()}>
              <Slider type="images">
                {Array.from({ length: 16 }, (_, index) => (
                  <SwiperSlide key={index} className={mockSlideStyles(index)}>
                    {index + 1}
                  </SwiperSlide>
                ))}
              </Slider>
            </div>
            {/* 첨부된 파일 상세 내용 */}
            <div className={fileDetailWrapper()}>
              <div className="bg-white rounded-lg">
                <div className="space-y-4">
                  {files.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-4 py-2 cursor-pointer">
                      {/* Menu dots icon */}
                      <div>
                        <div className="w-6 h-6 grid grid-cols-3 gap-1 p-1">
                          <div className={fileDetailIcon()}></div>
                          <div className={fileDetailIcon()}></div>
                          <div className={fileDetailIcon()}></div>
                          <div className={fileDetailIcon()}></div>
                          <div className={fileDetailIcon()}></div>
                          <div className={fileDetailIcon()}></div>
                          <div className={fileDetailIcon()}></div>
                          <div className={fileDetailIcon()}></div>
                          <div className={fileDetailIcon()}></div>
                        </div>
                      </div>

                      {/* Code editor thumbnail */}
                      <div>
                        <div className={fileDetailThumbnail()}></div>
                      </div>

                      {/* File info */}
                      <div className="flex-1 min-w-0">
                        {/* 첫 번째 줄: 제목과 파일 크기 */}
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-sb-18 font-medium text-gray-900 truncate">
                            {file.name}
                          </h3>
                          <span className="font-regular-14 text-sub-text ml-4">{file.size}</span>
                        </div>
                        <div className="border-b border-gray-100 mb-3"></div>
                        {/* 두 번째 줄: 날짜와 버튼들 */}
                        <div className="flex items-center justify-between">
                          <p className="font-regular-14 text-sub-text">{file.date}</p>
                          <div className="flex gap-2">
                            <Button
                              type="button"
                              className={buttonVariants({
                                size: "sm",
                                color: "red",
                                hover: true,
                              })}
                            >
                              삭제하기
                            </Button>
                            <Button
                              type="button"
                              className={buttonVariants({
                                size: "sm",
                                color: "black",
                                hover: true,
                              })}
                            >
                              변경하기
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 버튼 */}
      <div className="flex gap-4">
        <Button
          type="button"
          className={buttonVariants({ size: "lg", color: "gray", hover: true })}
        >
          취소
        </Button>

        <Button
          type="button"
          className={buttonVariants({ size: "lg", color: "black", hover: true })}
        >
          등록
        </Button>
      </div>
    </div>
  );
};
