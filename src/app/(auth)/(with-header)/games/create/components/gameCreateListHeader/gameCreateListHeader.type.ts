export interface IGameCreateListHeaderProps {
  selectedQuestions: {
    wrongAnswers: Set<string>;
    bookmarks: Set<string>;
  };
  totalQuestions: {
    id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    content: string;
    difficulty: string;
    likes: number;
    isSample: boolean;
    categoryID: string;
    userID: string;
  }[];
  type: "bookmark" | "wrongAnswer" | "selected";
  isChecked: (questionId: string) => boolean;
  onCheckChange: (questionId: string, checked: boolean) => void;
  handleQuestionRemove?: (questionId: string) => void;
}
