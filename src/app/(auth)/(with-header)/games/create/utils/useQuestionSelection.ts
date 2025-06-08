import { useState } from "react";

export default function useQuestionSelection() {
  const [selectedQuestions, setSelectedQuestions] = useState<{
    wrongAnswers: Set<string>;
    bookmarks: Set<string>;
  }>({
    wrongAnswers: new Set(),
    bookmarks: new Set(),
  });

  const handleQuestionCheck =
    (type: "wrongAnswers" | "bookmarks") => (questionId: string, checked: boolean) => {
      setSelectedQuestions((prev) => ({
        ...prev,
        [type]: checked
          ? new Set([...prev[type], questionId])
          : new Set([...prev[type]].filter((id) => id !== questionId)),
      }));
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
}
