"use client";

import { Input } from "@/app/components/input";
import { inputVariants } from "@/app/components/input/input.variants";
import { RadioButton } from "@/app/components/radioButton";
import { Tag } from "@/app/components/tag";
import { Title } from "@/app/components/title";
import { Icon } from "@/app/components/icon";
import React, { ChangeEventHandler, useState } from "react";
import { Textarea } from "@/app/components/textarea";

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

  const files = [
    { name: "component를 시키는 방법.png", size: "12mb", date: "25/05/14" },
    { name: "component를 시키는 방법.png", size: "12mb", date: "25/05/14" },
    { name: "component를 시키는 방법.png", size: "12mb", date: "25/05/14" },
    { name: "component를 시키는 방법.png", size: "12mb", date: "25/05/14" },
    { name: "component를 시키는 방법.png", size: "12mb", date: "25/05/14" },
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
      <div className="flex flex-col gap-11 mb-20 border-b border-gray-200 pb-20">
        <div className="font-regular-24 ">글 작성 중..</div>
        <Title title="질문 제목" size="lg" />
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
      <div className="flex flex-col gap-4">
        <div>
          <div className="w-[100%] h-25 md:h-54 border-border border flex flex-col gap-2.5">
            <textarea
              className="w-full h-full px-3 py-3 md:px-5 md:py-4 flex flex-col gap-2.5 border-[#cdcdcd] resize-none placeholder:text-sub-text focus:outline-none font-regular-14 md:font-regular-18"
              placeholder="안녕"
              onChange={onTextareaHandler}
            ></textarea>
            <div className="w-full flex justify-between  px-3 py-3 md:px-5 md:py-4 items-center  bottom-7 left-5">
              <span className="font-regular-14 md:font-regular-18 text-black/50">
                {count} / 500
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
