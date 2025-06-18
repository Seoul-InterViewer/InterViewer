import { Tag } from "@/app/components/tag/Tag";
import { RadioButton } from "@/app/components/radioButton/RadioButton";
import { Icon } from "@/app/components/icon/Icon";
import { Input } from "@/app/components/input/Input";
import { inputVariants } from "@/app/components/input/input.variants";
import { createVariants } from "../../createVariants";
import React, { useState } from "react";
import { tagConditions, tags, level } from "../../mocks/questoinCreateData";

const { questionTitleWrapper, questionInput, tagDropdown } = createVariants();

export const QuestionHeader = ({}: {
  questionCount: number;
  answerCount: number;

  onQuestionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAnswerChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  const [dropdownTag, setDropdownTag] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredTags = tagConditions.filter((tag) => tag.txt.includes(dropdownTag));

  return (
    <div className={questionTitleWrapper()}>
      <div className="flex flex-col  gap-4">
        <div className="font-regular-14 md:font-regular-24 mb-2 md:mb-4">글 작성 중..</div>
        <input type="text" placeholder="질문 제목" className={questionInput()} />
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
              <div className={tagDropdown()}>
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
  );
};
