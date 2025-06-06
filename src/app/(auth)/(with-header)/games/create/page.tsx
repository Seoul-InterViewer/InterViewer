"use client";
import React, { useState, useCallback, useMemo } from "react";
import { RadioButton, IRadioItem } from "@/app/components/radioButton";
import { Tag } from "@/app/components/tag";
import { List, listVariants } from "@/app/components/list";
import { Card } from "@/app/components/card";
import { Slider } from "@/app/components/slider";
import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";

import { questions, bookmarks, questionTags, tags } from "./mocks/gameCreateData";
import { GameCreateBookmarkItem } from "./components/GameCreateBookmarkItem";

const difficultyDatas: IRadioItem[] = [
  { value: "easy", txt: "하" },
  { value: "medium", txt: "중" },
  { value: "hard", txt: "상" },
];

const categoryDatas: IRadioItem[] = [
  { value: "nextjs", txt: "Next.js" },
  { value: "react", txt: "React" },
  { value: "typescript", txt: "Typescript" },
  { value: "js", txt: "JavaScript" },
  { value: "web", txt: "Web" },
  { value: "cs", txt: "CS" },
  { value: "library", txt: "Library" },
];

const bookmarkedQuestions = questions.filter((question) =>
  bookmarks.some((bookmark) => bookmark.question_id === question.id),
);

export default function page() {
  const [selectedQuestions, setSelectedQuestions] = useState<Set<string>>(new Set());

  const handleCheckboxChange = useCallback((questionId: string) => {
    setSelectedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelectedQuestions((prev) => {
      if (prev.size === bookmarkedQuestions.length) {
        return new Set();
      }
      return new Set(bookmarkedQuestions.map((q) => q.id));
    });
  }, [bookmarkedQuestions]);

  const selectedCount = useMemo(() => selectedQuestions.size, [selectedQuestions]);

  return (
    <div className="flex flex-col md:gap-30">
      <div>
        <div className="flex flex-col md:gap-11">
          <p className="font-sb-24">게임 생성 중...</p>
          <p className="font-bold-56">게임 제목</p>
          <div className="flex flex-col md:gap-4">
            <div className="flex flex-col md:gap-3">
              <span className="font-sb-16">난이도</span>
              <RadioButton datas={difficultyDatas} />
            </div>
            <div className="flex flex-col md:gap-3">
              <span className="font-sb-16">카테고리</span>
              <RadioButton datas={categoryDatas} />
            </div>
          </div>
        </div>
        <hr className="text-sub-text md:mt-12.5" />
      </div>

      <div className="flex flex-col md:gap-5">
        <div className="flex justify-between">
          <div className="flex items-center md:gap-5">
            <span className="font-sb-28">최근 오답 문제</span>
            <p className="font-regular-16 text-sub-text">08 / 17 선택됨</p>
          </div>
          <Button type="button" className={buttonVariants({ icon: true })}>
            <div className="flex items-center md:gap-3">
              <span className="font-bold-18 text-font-gray">전체보기</span>
              <Icon name="chevronRight" className="w-2 h-3 text-font-gray" />
            </div>
          </Button>
        </div>

        <div></div>
      </div>

      <div className="flex flex-col md:gap-5">
        <div className="flex justify-between">
          <div className="flex items-center md:gap-5">
            <span className="font-sb-28">북마크된 문제</span>
            <p className="font-regular-16 text-sub-text">
              {selectedCount} / {bookmarkedQuestions.length} 선택됨
            </p>
          </div>
          <Button type="button" className={buttonVariants({ icon: true })}>
            <div className="flex items-center md:gap-3">
              <span className="font-bold-18 text-font-gray">전체보기</span>
              <Icon name="chevronRight" className="w-2 h-3 text-font-gray" />
            </div>
          </Button>
        </div>

        <div>
          <List className={listVariants()}>
            {bookmarkedQuestions.slice(0, 3).map((question) => (
              <GameCreateBookmarkItem
                question={question}
                key={question.id}
                isSelected={selectedQuestions.has(question.id)}
                onCheckboxChange={handleCheckboxChange}
              />
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}
