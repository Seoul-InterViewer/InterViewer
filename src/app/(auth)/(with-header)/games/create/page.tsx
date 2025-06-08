"use client";
import { List, listVariants } from "@/app/components/list";
import { Slider } from "@/app/components/slider";
import { Button, buttonVariants } from "@/app/components/button";

import { questions, bookmarks, wrongAnswers } from "./mocks/gameCreateData";
import { GameCreateListItem, GameCreateListSeletedItem } from "./components/gameCreateListItem";
import { GameCreateListHeader } from "./components/gameCreateListHeader";
import { GameCreateTitle } from "./components/gameCreateTitle";
import useQuestionSelection from "./utils/useQuestionSelection";

const bookmarkedQuestions = questions.filter((question) =>
  bookmarks.some((bookmark) => bookmark.question_id === question.id),
);

const wrongAnswersQuestions = questions.filter((question) =>
  wrongAnswers.some((wrongAnswer) => wrongAnswer.questionID === question.id),
);

export default function page() {
  const { selectedQuestions, handleQuestionCheck, handleQuestionRemove } = useQuestionSelection();

  return (
    <section className="flex flex-col md:gap-30 md:pb-30">
      <GameCreateTitle />

      <div className="flex flex-col md:gap-8">
        <GameCreateListHeader
          selectedQuestions={selectedQuestions}
          totalQuestions={wrongAnswersQuestions}
          type="wrongAnswer"
          isChecked={(questionId) => selectedQuestions.wrongAnswers.has(questionId)}
          onCheckChange={handleQuestionCheck("wrongAnswers")}
        />
        <List className={listVariants()}>
          {wrongAnswersQuestions.slice(0, 3).map((question) => (
            <GameCreateListItem
              question={question}
              key={question.id}
              isChecked={selectedQuestions.wrongAnswers.has(question.id)}
              onCheckChange={(e) =>
                handleQuestionCheck("wrongAnswers")(question.id, e.target.checked)
              }
              type="wrongAnswer"
            />
          ))}
        </List>
      </div>

      <div className="flex flex-col md:gap-8">
        <GameCreateListHeader
          selectedQuestions={selectedQuestions}
          totalQuestions={bookmarkedQuestions}
          type="bookmark"
          isChecked={(questionId) => selectedQuestions.bookmarks.has(questionId)}
          onCheckChange={handleQuestionCheck("bookmarks")}
        />
        <List className={listVariants()}>
          {bookmarkedQuestions.slice(0, 3).map((question) => (
            <GameCreateListItem
              question={question}
              key={question.id}
              isChecked={selectedQuestions.bookmarks.has(question.id)}
              onCheckChange={(e) => handleQuestionCheck("bookmarks")(question.id, e.target.checked)}
              type="bookmark"
            />
          ))}
        </List>
      </div>

      <div className="flex flex-col md:gap-12.5">
        <div className="flex flex-col md:gap-8">
          <GameCreateListHeader
            selectedQuestions={selectedQuestions}
            totalQuestions={[...wrongAnswersQuestions, ...bookmarkedQuestions]}
            type="selected"
            isChecked={(questionId) => selectedQuestions.wrongAnswers.has(questionId)}
            onCheckChange={handleQuestionCheck("wrongAnswers")}
            handleQuestionRemove={handleQuestionRemove}
          />

          {selectedQuestions.wrongAnswers.size + selectedQuestions.bookmarks.size > 0 ? (
            <Slider type="selectedQuestionCards">
              {questions
                .filter(
                  (q) =>
                    selectedQuestions.wrongAnswers.has(q.id) ||
                    selectedQuestions.bookmarks.has(q.id),
                )
                .map((question) => (
                  <GameCreateListSeletedItem
                    key={question.id}
                    question={question}
                    type="selected"
                    onRemove={() => handleQuestionRemove(question.id)}
                  />
                ))}
            </Slider>
          ) : (
            <div className="flex-center w-full md:h-104 h-44">
              <p
                className="text-font-gray font-sb-20
              "
              >
                선택된 질문이 없습니다. 😭
              </p>
            </div>
          )}
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
    </section>
  );
}
