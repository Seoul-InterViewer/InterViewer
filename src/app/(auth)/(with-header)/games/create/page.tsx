"use client";
import { useState } from "react";
import { List, listVariants } from "@/app/components/list";
import { Slider } from "@/app/components/slider";
import { Button, buttonVariants } from "@/app/components/button";

import { questions, bookmarks, wrongAnswers } from "./mocks/gameCreateData";
import { GameCreateListItem, GameCreateListSeletedItem } from "./components/gameCreateListItem";
import { GameCreateListHeader } from "./components/gameCreateListHeader";
import { GameCreateTitle } from "./components/gameCreateTitle";

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

  const handleWrongAnswerCheck = (questionId: string, checked: boolean) => {
    setSelectedQuestions((prev) => ({
      ...prev,
      wrongAnswers: checked
        ? new Set([...prev.wrongAnswers, questionId])
        : new Set([...prev.wrongAnswers].filter((id) => id !== questionId)),
    }));
  };

  const handleBookmarkCheck = (questionId: string, checked: boolean) => {
    setSelectedQuestions((prev) => ({
      ...prev,
      bookmarks: checked
        ? new Set([...prev.bookmarks, questionId])
        : new Set([...prev.bookmarks].filter((id) => id !== questionId)),
    }));
  };

  return (
    <div className="flex flex-col md:gap-30">
      <GameCreateTitle />

      <div className="flex flex-col md:gap-5">
        <GameCreateListHeader
          selectedQuestions={selectedQuestions.wrongAnswers.size}
          totalQuestions={wrongAnswersQuestions.length}
          type="wrongAnswer"
        />
        <List className={listVariants()}>
          {wrongAnswersQuestions.slice(0, 3).map((question) => (
            <GameCreateListItem
              question={question}
              key={question.id}
              isChecked={selectedQuestions.wrongAnswers.has(question.id)}
              onCheckChange={(e) => handleWrongAnswerCheck(question.id, e.target.checked)}
            />
          ))}
        </List>
      </div>

      <div className="flex flex-col md:gap-5">
        <GameCreateListHeader
          selectedQuestions={selectedQuestions.bookmarks.size}
          totalQuestions={bookmarkedQuestions.length}
          type="bookmark"
        />
        <List className={listVariants()}>
          {bookmarkedQuestions.slice(0, 3).map((question) => (
            <GameCreateListItem
              question={question}
              key={question.id}
              isChecked={selectedQuestions.bookmarks.has(question.id)}
              onCheckChange={(e) => handleBookmarkCheck(question.id, e.target.checked)}
            />
          ))}
        </List>
      </div>

      <div className="flex flex-col md:gap-12.5">
        <div className="flex flex-col md:gap-5">
          <GameCreateListHeader
            selectedQuestions={
              selectedQuestions.wrongAnswers.size + selectedQuestions.bookmarks.size
            }
            totalQuestions={wrongAnswersQuestions.length + bookmarkedQuestions.length}
            type="selected"
          />

          <Slider type="selectedQuestionCards">
            {questions
              .filter(
                (q) =>
                  selectedQuestions.wrongAnswers.has(q.id) || selectedQuestions.bookmarks.has(q.id),
              )
              .map((question) => (
                <GameCreateListSeletedItem
                  key={question.id}
                  question={question}
                  onRemove={() => {
                    setSelectedQuestions((prev) => {
                      const newWrong = new Set(prev.wrongAnswers);
                      const newBook = new Set(prev.bookmarks);
                      newWrong.delete(question.id);
                      newBook.delete(question.id);
                      return { wrongAnswers: newWrong, bookmarks: newBook };
                    });
                  }}
                />
              ))}
          </Slider>
        </div>

        <div className="flex md:gap-5">
          <Button type="button" className={buttonVariants({ size: "lg", color: "black" })}>
            취소
          </Button>
          <Button type="button" className={buttonVariants({ size: "lg", color: "yellow" })}>
            다음으로
          </Button>
        </div>
      </div>
    </div>
  );
}
