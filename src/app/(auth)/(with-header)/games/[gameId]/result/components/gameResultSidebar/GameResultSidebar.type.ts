export interface GameResultData {
  title: string;
  question: string;
  answer: string;
  keywords: string[];
  isCorrect: boolean;
}

// highlight/scroll 옵션 타입
export type HighlightQuestionOptions = {
  scroll?: boolean;
  add?: boolean;
  remove?: boolean;
};
