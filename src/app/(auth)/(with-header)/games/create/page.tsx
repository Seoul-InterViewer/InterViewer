"use client";
import { List, listVariants } from "@/app/components/list";
import { Slider } from "@/app/components/slider";
import { questions, bookmarks, wrongAnswers } from "./mocks/gameCreateData";
import {
  GameCreateListItem,
  GameCreateListSeletedItem,
  IGameCreateListItemProps,
} from "./components/gameCreateListItem";
import { GameCreateListHeader } from "./components/gameCreateListHeader";
import { GameCreateTitle } from "./components/gameCreateTitle";
import { useQuestionSelection } from "./utils/useQuestionSelection";
import { useViewport } from "@/hooks/useViewport";
import { GameCreateButtons } from "./components/gameCreateButtons/GameCreateButtons";
import { EmptyUI } from "@/app/components/emptyUI";

const getBookmarkedQuestions = () => {
  // 빈 배열이면 즉시 빈 배열 반환
  if (!bookmarks || bookmarks.length === 0) {
    return [];
  }

  // bookmarks가 있을 때만 필터링 실행
  return questions.filter((question) => {
    // 타입 단언으로 안전하게 처리
    return (bookmarks as any[]).some((bookmark) => bookmark.question_id === question.id);
  });
};

const getWrongAnswersQuestions = () => {
  // 빈 배열이면 즉시 빈 배열 반환
  if (!wrongAnswers || wrongAnswers.length === 0) {
    return [];
  }

  // wrongAnswers가 있을 때만 필터링 실행
  return questions.filter((question) => {
    // 타입 단언으로 안전하게 처리
    return (wrongAnswers as any[]).some((wrongAnswer) => wrongAnswer.questionID === question.id);
  });
};

export default function GameCreatePage() {
  const {
    selectedQuestions,
    handleQuestionCheck,
    handleQuestionRemove,
    isQuestionInWrongAnswers,
    isQuestionInBookmarks,
    isQuestionSelected,
  } = useQuestionSelection();
  const { isMobile } = useViewport();

  // 데이터 가져오기
  const bookmarkedQuestions = getBookmarkedQuestions();
  const wrongAnswersQuestions = getWrongAnswersQuestions();

  // 문제 목록 렌더링 함수
  const renderQuestions = (
    questions: IGameCreateListItemProps["question"][],
    type: IGameCreateListItemProps["type"],
  ) => {
    if (!questions || questions.length === 0) {
      return <EmptyUI type={type === "wrongAnswer" ? "wrongNotes" : "bookmark"} />;
    }

    const questionItems = (isMobile ? questions : questions.slice(0, 3)).map((question) => (
      <GameCreateListItem
        question={question}
        key={question.id}
        isChecked={isQuestionSelected(question.id)}
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

  // 선택된 문제들 렌더링 함수
  const hasSelectedQuestions =
    selectedQuestions.wrongAnswers.size + selectedQuestions.bookmarks.size > 0;
  const renderSelectedQuestions = () => {
    if (!hasSelectedQuestions) {
      return (
        <div className="flex-center w-full ">
          <EmptyUI type="bookmark" />
        </div>
      );
    }

    const selectedQuestionIds = new Set([
      ...Array.from(selectedQuestions.wrongAnswers),
      ...Array.from(selectedQuestions.bookmarks),
    ]);
    const filteredQuestions = questions.filter((q) => selectedQuestionIds.has(q.id));

    return (
      <Slider type="selectedQuestionCards">
        {filteredQuestions.map((question) => (
          <GameCreateListSeletedItem
            key={question.id}
            question={question}
            type="selected"
            isChecked={isQuestionSelected(question.id)}
            onRemove={() => handleQuestionRemove(question.id)}
          />
        ))}
      </Slider>
    );
  };

  return (
    <main className="flex flex-col md:gap-30 gap-20 md:pb-30 pb-15">
      <GameCreateTitle />

      <section className="flex flex-col md:gap-8 gap-6">
        <GameCreateListHeader
          selectedQuestions={selectedQuestions}
          totalQuestions={wrongAnswersQuestions}
          type="wrongAnswer"
          isChecked={isQuestionInWrongAnswers}
          onCheckChange={handleQuestionCheck("wrongAnswers")}
        />
        {renderQuestions(wrongAnswersQuestions, "wrongAnswer")}
      </section>

      <section className="flex flex-col md:gap-8 gap-6">
        <GameCreateListHeader
          selectedQuestions={selectedQuestions}
          totalQuestions={bookmarkedQuestions}
          type="bookmark"
          isChecked={isQuestionInBookmarks}
          onCheckChange={handleQuestionCheck("bookmarks")}
        />
        {renderQuestions(bookmarkedQuestions, "bookmark")}
      </section>

      <section className="flex flex-col md:gap-15 gap-6">
        <div className="flex flex-col md:gap-8 gap-6">
          <GameCreateListHeader
            selectedQuestions={selectedQuestions}
            totalQuestions={[...wrongAnswersQuestions, ...bookmarkedQuestions]}
            type="selected"
            isChecked={isQuestionSelected}
            onCheckChange={handleQuestionCheck("wrongAnswers")}
            handleQuestionRemove={handleQuestionRemove}
          />
          {renderSelectedQuestions()}
        </div>

        <GameCreateButtons hasSelectedQuestions={hasSelectedQuestions} />
      </section>
    </main>
  );
}
