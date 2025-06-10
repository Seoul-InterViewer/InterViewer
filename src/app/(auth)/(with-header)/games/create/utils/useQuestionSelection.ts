import { useState } from "react";

export const useQuestionSelection = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<{
    wrongAnswers: Set<string>;
    bookmarks: Set<string>;
  }>({
    wrongAnswers: new Set(),
    bookmarks: new Set(),
  });

  const handleQuestionCheck =
    (type: "wrongAnswers" | "bookmarks") => (questionId: string, checked: boolean) => {
      setSelectedQuestions((prev) => {
        const newWrongAnswers =
          type === "wrongAnswers"
            ? checked
              ? new Set([...prev.wrongAnswers, questionId])
              : new Set([...prev.wrongAnswers].filter((id) => id !== questionId))
            : prev.wrongAnswers;

        const newBookmarks =
          type === "bookmarks"
            ? checked
              ? new Set([...prev.bookmarks, questionId])
              : new Set([...prev.bookmarks].filter((id) => id !== questionId))
            : prev.bookmarks;

        // 같은 questionId를 가진 항목이 다른 타입에 있다면 함께 체크/해제
        if (type === "wrongAnswers" && checked) {
          newBookmarks.add(questionId);
        } else if (type === "bookmarks" && checked) {
          newWrongAnswers.add(questionId);
        } else if (type === "wrongAnswers" && !checked) {
          newBookmarks.delete(questionId);
        } else if (type === "bookmarks" && !checked) {
          newWrongAnswers.delete(questionId);
        }

        return {
          wrongAnswers: newWrongAnswers,
          bookmarks: newBookmarks,
        };
      });
    };

  const handleQuestionRemove = (questionId: string) => {
    setSelectedQuestions((prev) => ({
      ...prev,
      wrongAnswers: new Set([...prev.wrongAnswers].filter((id) => id !== questionId)),
      bookmarks: new Set([...prev.bookmarks].filter((id) => id !== questionId)),
    }));
  };

  return {
    selectedQuestions,
    handleQuestionCheck,
    handleQuestionRemove,
  };
};
