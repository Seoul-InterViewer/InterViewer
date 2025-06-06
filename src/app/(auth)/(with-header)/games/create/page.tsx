"use client";
import React, { useState, useCallback, useMemo } from "react";
import { RadioButton, IRadioItem } from "@/app/components/radioButton";
import { List, listVariants } from "@/app/components/list";
import { Slider } from "@/app/components/slider";
import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";

import { questions, bookmarks, wrongAnswers } from "./mocks/gameCreateData";
import { GameCreateListItem } from "./components/GameCreateListItem";

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

const wrongAnswersQuestions = questions.filter((question) =>
  wrongAnswers.some((wrongAnswer) => wrongAnswer.questionID === question.id),
);

export default function page() {
  const [selectedQuestions, setSelectedQuestions] = useState<{
    wrongAnswers: Set<string>;
    bookmarks: Set<string>;
  }>({
    wrongAnswers: new Set(),
    bookmarks: new Set(),
  });

  const handleCheckboxChange = useCallback(
    (questionId: string, type: "wrongAnswer" | "bookmark") => {
      setSelectedQuestions((prev) => {
        const newState = {
          wrongAnswers: new Set(prev.wrongAnswers),
          bookmarks: new Set(prev.bookmarks),
        };

        if (type === "wrongAnswer") {
          if (newState.wrongAnswers.has(questionId)) {
            newState.wrongAnswers.delete(questionId);
          } else {
            newState.wrongAnswers.add(questionId);
          }
        } else {
          if (newState.bookmarks.has(questionId)) {
            newState.bookmarks.delete(questionId);
          } else {
            newState.bookmarks.add(questionId);
          }
        }

        return newState;
      });
    },
    [],
  );

  const selectedWrongAnswersCount = useMemo(
    () => selectedQuestions.wrongAnswers.size,
    [selectedQuestions.wrongAnswers],
  );
  const selectedBookmarksCount = useMemo(
    () => selectedQuestions.bookmarks.size,
    [selectedQuestions.bookmarks],
  );

  const selectedQuestionsArray = useMemo(() => {
    const wrongAnswerQuestions = [...selectedQuestions.wrongAnswers]
      .map((id) => wrongAnswersQuestions.find((q) => q.id === id))
      .filter((q): q is NonNullable<typeof q> => q !== undefined);

    const bookmarkQuestions = [...selectedQuestions.bookmarks]
      .map((id) => bookmarkedQuestions.find((q) => q.id === id))
      .filter((q): q is NonNullable<typeof q> => q !== undefined);

    return [...wrongAnswerQuestions, ...bookmarkQuestions];
  }, [selectedQuestions, wrongAnswersQuestions, bookmarkedQuestions]);

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

      <div className="flex flex-col md:gap-12.5">
        <div className="flex flex-col md:gap-5">
          <div className="flex justify-between">
            <div className="flex items-center md:gap-5">
              <span className="font-sb-28">최근 오답 문제</span>
              <p className="font-regular-16 text-sub-text">
                {selectedWrongAnswersCount} / {wrongAnswersQuestions.length} 선택됨
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
              {wrongAnswersQuestions.slice(0, 3).map((question) => (
                <GameCreateListItem
                  question={question}
                  key={question.id}
                  isSelected={selectedQuestions.wrongAnswers.has(question.id)}
                  onCheckboxChange={(id) => handleCheckboxChange(id, "wrongAnswer")}
                />
              ))}
            </List>
          </div>
        </div>

        <div className="flex flex-col md:gap-5">
          <div className="flex justify-between">
            <div className="flex items-center md:gap-5">
              <span className="font-sb-28">북마크된 문제</span>
              <p className="font-regular-16 text-sub-text">
                {selectedBookmarksCount} / {bookmarkedQuestions.length} 선택됨
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
                <GameCreateListItem
                  question={question}
                  key={question.id}
                  isSelected={selectedQuestions.bookmarks.has(question.id)}
                  onCheckboxChange={(id) => handleCheckboxChange(id, "bookmark")}
                />
              ))}
            </List>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <div className="flex items-center md:gap-5">
              <span className="font-sb-28">선택된 질문</span>
              <p className="font-regular-16 text-sub-text">
                {selectedWrongAnswersCount + selectedBookmarksCount} / {bookmarkedQuestions.length}{" "}
                선택됨
              </p>
            </div>
            <Button type="button" className={buttonVariants({ icon: true })}>
              <div className="flex items-center md:gap-3">
                <span className="font-bold-18 text-font-gray">전체보기</span>
                <Icon name="chevronRight" className="w-2 h-3 text-font-gray" />
              </div>
            </Button>
          </div>

          <Slider type="selectedQuestionCards">
            {selectedQuestionsArray.map((question) => (
              <GameCreateListItem
                question={question}
                key={question.id}
                isSelected={true}
                onCheckboxChange={(id) => {
                  if (selectedQuestions.wrongAnswers.has(id)) {
                    handleCheckboxChange(id, "wrongAnswer");
                  } else {
                    handleCheckboxChange(id, "bookmark");
                  }
                }}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
