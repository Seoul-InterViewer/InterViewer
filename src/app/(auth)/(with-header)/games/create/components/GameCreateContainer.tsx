"use client";
import { List, listVariants } from "@/app/components/list";
import { Slider } from "@/app/components/slider";
import { Button, buttonVariants } from "@/app/components/button";
import { questions, bookmarks, wrongAnswers } from "../mocks/gameCreateData";
import {
  GameCreateListItem,
  GameCreateListSeletedItem,
  IGameCreateListItemProps,
} from "./gameCreateListItem";
import { GameCreateListHeader } from "./gameCreateListHeader";
import { GameCreateTitle } from "./gameCreateTitle";
import useQuestionSelection from "../utils/useQuestionSelection";
import { useViewport } from "@/hooks/useViewport";

const bookmarkedQuestions = questions.filter((question) =>
  bookmarks.some((bookmark) => bookmark.question_id === question.id),
);

const wrongAnswersQuestions = questions.filter((question) =>
  wrongAnswers.some((wrongAnswer) => wrongAnswer.questionID === question.id),
);

export function GameCreateContainer() {
  const { selectedQuestions, handleQuestionCheck, handleQuestionRemove } = useQuestionSelection();
  const { isMobile } = useViewport();

  const renderQuestions = (
    questions: IGameCreateListItemProps["question"][],
    type: IGameCreateListItemProps["type"],
  ) => {
    const questionItems = (isMobile ? questions : questions.slice(0, 3)).map((question) => (
      <GameCreateListItem
        question={question}
        key={question.id}
        isChecked={selectedQuestions[type === "wrongAnswer" ? "wrongAnswers" : "bookmarks"].has(
          question.id,
        )}
        onCheckChange={(e) =>
          handleQuestionCheck(type === "wrongAnswer" ? "wrongAnswers" : "bookmarks")(
            question.id,
            e.target.checked,
          )
        }
        type={type}
      />
    ));

    return isMobile ? (
      <Slider type="selectedQuestionCards">{questionItems}</Slider>
    ) : (
      <List className={listVariants()}>{questionItems}</List>
    );
  };

  return (
    <main className="flex flex-col md:gap-30 gap-20 md:pb-30 pb-15 ">
      <GameCreateTitle />

      <section className="flex flex-col md:gap-8 gap-6">
        <GameCreateListHeader
          selectedQuestions={selectedQuestions}
          totalQuestions={wrongAnswersQuestions}
          type="wrongAnswer"
          isChecked={(questionId) => selectedQuestions.wrongAnswers.has(questionId)}
          onCheckChange={handleQuestionCheck("wrongAnswers")}
        />
        {renderQuestions(wrongAnswersQuestions, "wrongAnswer")}
      </section>

      <section className="flex flex-col md:gap-8 gap-6">
        <GameCreateListHeader
          selectedQuestions={selectedQuestions}
          totalQuestions={bookmarkedQuestions}
          type="bookmark"
          isChecked={(questionId) => selectedQuestions.bookmarks.has(questionId)}
          onCheckChange={handleQuestionCheck("bookmarks")}
        />
        {renderQuestions(bookmarkedQuestions, "bookmark")}
      </section>

      <section className="flex flex-col md:gap-12.5 gap-7">
        <div className="flex flex-col md:gap-8 gap-6">
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
              {(() => {
                const selectedQuestionIds = new Set([
                  ...Array.from(selectedQuestions.wrongAnswers),
                  ...Array.from(selectedQuestions.bookmarks),
                ]);
                const filteredQuestions = questions.filter((q) => selectedQuestionIds.has(q.id));
                return filteredQuestions.map((question) => (
                  <GameCreateListSeletedItem
                    key={question.id}
                    question={question}
                    type="selected"
                    isChecked={selectedQuestionIds.has(question.id)}
                    onRemove={() => handleQuestionRemove(question.id)}
                  />
                ));
              })()}
            </Slider>
          ) : (
            <div className="flex-center w-full md:h-104 h-44">
              <p className="text-font-gray font-sb-20">선택된 질문이 없습니다. 😭</p>
            </div>
          )}
        </div>

        <div className="flex md:gap-5 gap-6">
          <Button type="button" className={buttonVariants({ size: "lg", color: "black" })}>
            취소
          </Button>
          <Button type="button" className={buttonVariants({ size: "lg", color: "yellow" })}>
            다음으로
          </Button>
        </div>
      </section>
    </main>
  );
}
