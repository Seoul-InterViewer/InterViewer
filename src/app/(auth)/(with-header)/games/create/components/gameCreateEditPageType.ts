export interface IGameCreateEditPageProps {
    // wrongAnswers: IWrongAnswer[];
    bookmarks: IBookmark;
}

export interface IBookmark {
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
}

export interface IGameCreateBookmarkItemProps {
    question: {
      id: string;
      title: string;
      difficulty: string;
    };
    isSelected: boolean;
    onCheckboxChange: (id: string) => void;
  }