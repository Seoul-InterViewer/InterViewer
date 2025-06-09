export interface IGameCreateListItemProps {
  question: {
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
  };
  isChecked?: boolean;
  onCheckChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
  type:
    | "wrongAnswer"
    | "bookmark"
    | "selected"
    | "modalWrongAnswer"
    | "modalBookmark"
    | "modalSelected";
}
