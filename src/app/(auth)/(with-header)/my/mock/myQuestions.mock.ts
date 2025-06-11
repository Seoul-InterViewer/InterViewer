import { IMyQuestionsCardProps as IQuestionData } from "../components/myQuestionsCard/myQuestionsCard.type";

// 카테고리용 아이콘 타입이 필요할 예정, IconName은 현재 너무 광범위함.

export const myQuestionsMockData: IQuestionData[] = [
  {
    id: 1,
    title: "React 훅에 대해서 설명해주세요",
    author: "홍길동",
    difficulty: "easy",
    category: "react",
  },
  {
    id: 2,
    title: "타입스크립트의 제네릭에 대해 설명해주세요",
    author: "김철수",
    difficulty: "medium",
    category: "typescript",
  },
  {
    id: 3,
    title: "자바스크립트 이벤트 루프에 대해 설명해주세요",
    author: "이영희",
    difficulty: "hard",
    category: "javascript",
  },
  {
    id: 4,
    title: "Node.js의 비동기 처리 방식에 대해 설명해주세요",
    author: "박지성",
    difficulty: "medium",
    category: "javascript",
  },
  {
    id: 5,
    title: "Python의 GIL에 대해 설명해주세요",
    author: "송민호",
    difficulty: "hard",
    category: "cs",
  },
];
