"use client";

import { Input } from "@/app/components/input";
import { inputVariants } from "@/app/components/input/input.variants";
import { RadioButton } from "@/app/components/radioButton";
import { Tag } from "@/app/components/tag";
import { Title } from "@/app/components/title";
import { Icon } from "@/app/components/icon";
import React, { ChangeEventHandler, useState } from "react";
import { Textarea } from "@/app/components/textarea";
import { Button, buttonVariants } from "@/app/components/button";
import { Slider } from "@/app/components/slider";
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

export default function CreateQuestionPage() {
  const tagConditions = [
    { value: "designer", txt: "디자이너" },
    { value: "developer", txt: "개발자" },
    { value: "planner", txt: "기획자" },
    { value: "publisher", txt: "퍼블리셔" },
  ];

  const tags = [
    { value: "react", txt: "React" },
    { value: "js", txt: "JavaScript" },
    { value: "next", txt: "Next" },
    { value: "node", txt: "Node" },
    { value: "php", txt: "PHP" },
    { value: "java", txt: "JAVA" },
    { value: "python", txt: "Python" },
  ];

  const level = [
    { value: "easy", txt: "상" },
    { value: "medium", txt: "중" },
    { value: "high", txt: "하" },
  ];

  const [dropdownTag, setDropdownTag] = useState("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedTag, setSelectedTag] = useState("");

  const filteredTags = tagConditions.filter((tag) => tag.txt.includes(dropdownTag));

  const [count, setCount] = useState(0);
  const onTextareaHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setCount(e.target.value.length);
  };

  return (
    <div className="w-full">
      {/* 질문 제목 */}
      <div className="flex flex-col gap-11  mb-20 border-b border-gray-200 pb-20">
        <div className="flex flex-col  gap-4">
          <div className="font-regular-14 md:font-regular-24 mb-2 md:mb-4">글 작성 중..</div>
          <input
            type="text"
            placeholder="질문 제목"
            className="
          pl-3
    bg-gray-100/50 
    h-10 md:h-20 
    font-bold-32 md:font-bold-56 
    text-color-font

    /* 플레이스홀더의 기본 스타일 */
    placeholder:text-font 
    placeholder:opacity-100 

    /* 포커스 시 플레이스홀더 opacity = 0 */
    focus:placeholder:opacity-0 

    /* 플레이스홀더에만 적용할 트랜지션 속성 */
    placeholder:transition-opacity 
    placeholder:duration-300 

    /* input에서 outline 제거 */
    outline-none
    focus:outline-none
  "
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-3 font-sb-16">난이도</p>
            <RadioButton datas={level} />
          </div>
          <div>
            <p className="mb-3 font-sb-16">카테고리</p>
            <RadioButton datas={tags} />
          </div>
          <div>
            <p className="mb-3 font-sb-16">태그</p>
            <div className="flex gap-2 mb-5">
              <Tag type="chooseTag" closable onClose={() => console.log("태그 삭제")}>
                개발자
              </Tag>
            </div>
            {/* Tag Input with Dropdown */}
            <div className="relative">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Icon name="search" size={22} fill="gray" />
                </div>
                <Input
                  className={inputVariants({ search: true, variant: "withBg" })}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="태그"
                  onChange={(e) => {
                    setDropdownTag(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  value={dropdownTag}
                  onBlur={() => setIsDropdownOpen(false)}
                />
              </div>

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md  z-10">
                  <ul className=" ">
                    {filteredTags.map((tag, idx) =>
                      dropdownTag ? (
                        <li
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-700 "
                          key={tag.value}
                        >
                          {tag.txt}
                        </li>
                      ) : (
                        <div key={`empty-${idx}`} className="p-0 m-0 h-0"></div>
                      ),
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* 질문, 해설, CODEPEN URL, 파일 첨부, 버튼 */}
      <div className="flex flex-col gap-10">
        {/* 질문, 해설, CODEPEN URL, 파일 첨부 */}
        <div className="flex flex-col gap-20">
          {/* 질문 */}
          <div>
            <div className="w-[100%] h-25 md:h-54 border-border border flex flex-col gap-2.5">
              <textarea
                className="w-full h-full px-3 py-3 md:px-5 md:py-4 flex flex-col gap-2.5 border-[#cdcdcd] resize-none placeholder:text-sub-text focus:outline-none font-regular-14 md:font-regular-18"
                placeholder="질문을 적어주세요"
                onChange={onTextareaHandler}
              ></textarea>
              <div className="w-full flex justify-between  px-3 py-3 md:px-5 md:py-4 items-center  bottom-7 left-5">
                <span className="font-regular-14 md:font-regular-18 text-black/50">
                  {count} / 500
                </span>
              </div>
            </div>
          </div>
          {/* 해설 */}
          <div className="flex flex-col gap-5">
            <Title size="md" title="📝&nbsp;해설" />
            <div className="w-[100%] h-25 md:h-54 border-border border flex flex-col gap-2.5">
              <textarea
                className="w-full h-full px-3 py-3 md:px-5 md:py-4 flex flex-col gap-2.5 border-[#cdcdcd] resize-none placeholder:text-sub-text focus:outline-none font-regular-14 md:font-regular-18"
                placeholder="해설을 적어주세요"
                onChange={onTextareaHandler}
              ></textarea>
              <div className="w-full flex justify-between  px-3 py-3 md:px-5 md:py-4 items-center  bottom-7 left-5">
                <span className="font-regular-14 md:font-regular-18 text-black/50">
                  {count} / 500
                </span>
              </div>
            </div>
          </div>
          {/* CODEPEN URL */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-center">
              <Icon name="codepen" className="w-8 h-8 md:w-12 md:h-12" />
              <Title size="sm" title="CODEPEN URL" />
            </div>
            <div className="w-[100%] h-11 md:h-14 border-border border flex flex-col gap-2.5">
              <textarea
                className="w-full h-full px-3 py-3 md:px-5 md:py-4 flex flex-col gap-2.5 border-[#cdcdcd] resize-none placeholder:text-sub-text focus:outline-none font-regular-14 md:font-regular-18"
                placeholder="https://..."
                onChange={onTextareaHandler}
              ></textarea>
            </div>
          </div>
          {/* 파일 첨부 */}
          <div>
            {/* 파일 첨부 TOP TITLE */}
            <div className="flex gap-8 justify-between md:justify-start mb-5">
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
              <div className="w-88 h-130 w-108 h-130 md:h-140 rounded-xl overflow-hidden">
                <Slider type="images">
                  {Array.from({ length: 16 }, (_, index) => (
                    <SwiperSlide key={index} className={mockSlideStyles(index)}>
                      {index + 1}
                    </SwiperSlide>
                  ))}
                </Slider>
              </div>
              {/* 첨부된 파일 상세 내용 */}
              <div className="hidden md:block w-194 h-140 rounded-xl border border-gray-200 overflow-y-auto p-4">
                <div className="bg-white rounded-lg">
                  <div className="space-y-4">
                    {files.map((file, idx) => (
                      <div key={idx} className="flex items-center gap-4 py-2 cursor-pointer">
                        {/* Menu dots icon */}
                        <div>
                          <div className="w-6 h-6 grid grid-cols-3 gap-1 p-1">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          </div>
                        </div>

                        {/* Code editor thumbnail */}
                        <div>
                          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center relative"></div>
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
    </div>
  );
}
