import { ICardDataProps } from "./card.type";

export const mainCardData: ICardDataProps[] = [
  {
    type: "mainCard",
    number: "01",
    contentId: "1092asdf",
    title: "어떤 걸 중점적으로 공부해야하나요?",
    description:
      "React에서 어떤 걸 중점적으로 공부해야하나요? 요새 공부중인데 서버 통신이나 데이터가 어디에서 연동, 그렇지만 사람들이 쓰는 걸 보면 헷갈리고 그렇다는 느낌이 듭니다. 아침 햇살이 좋은 날인 거 같아요",
    image: "mainCard",
    creator: "Next는 Next 시간에",
    category: "React",
    level: "초",
    tags: ["JavaScript", "React", "TypeScript"],
    createdAt: "2025-07-01",
    updatedAt: "2025-07-01",
    mainCardImage: "mainCard",
    detailCardImage: "detailCard",
    checkCardImage: "checkCard",
    favoriteCardImage: "favoriteCard",
    hearts: 10,
    isBookmarked: false,
    isLiked: false,
    isCommented: false,
    isChecked: false,
  },
];

export const editCardData: ICardDataProps[] = [
  {
    number: "01",
    contentId: "edit-01",
    title: "게임 01",
    problems: [
      {
        question: "문제1: DOM트리가 무엇인가요?",
        answer: "DOM트리는 문서 객체 모델(DOM)의 트리 구조를 나타내는 모델입니다.",
      },
      {
        question: "문제2: 호이스팅이 무엇인가요?",
        answer: "호이스팅은 변수 선언이 해당 스코프의 최상단으로 끌어올려지는 것을 의미합니다.",
      },
      {
        question: "문제3: 이벤트 버블링이 무엇인가요?",
        answer:
          "이벤트 버블링은 이벤트가 발생한 요소에서 시작해 상위 요소로 전파되는 현상을 의미합니다.",
      },
      {
        question: "문제4: 이벤트 캡처링이 무엇인가요?",
        answer:
          "이벤트 캡처링은 이벤트가 발생한 요소에서 시작해 상위 요소로 전파되는 현상을 의미합니다.",
      },
    ],
    image: "editCard",
    tags: ["Javascript", "Next", "Typescript"],
    createdAt: "2025-03-27",
    updatedAt: "2025-03-27",
    mainCardImage: "mainCard",
    progress: 80,
    progressLabel: "Completed",
    // 모바일용 예시 필드
    mobileTitle: "useMemo와 useCallback 노트",
    mobileDescription:
      "문제: Q. React에서 useMemo와 useCallback의 차이점은 무엇인가요? 언제...\n외 문제 8개...",
    mobileTags: ["Next", "Javascript", "Tailwind", "초급"],
  },
];

export const detailCardData: ICardDataProps[] = [
  {
    number: "01",
    contentId: "detail-01",
    title: "게임 01",
    problems: [
      {
        question: "문제1: DOM트리가 무엇인가요?",
        answer: "DOM트리는 문서 객체 모델(DOM)의 트리 구조를 나타내는 모델입니다.",
      },
      {
        question: "문제2: 호이스팅이 무엇인가요?",
        answer: "호이스팅은 변수 선언이 해당 스코프의 최상단으로 끌어올려지는 것을 의미합니다.",
      },
      {
        question: "문제2: 호이스팅이 무엇인가요?",
        answer: "호이스팅은 변수 선언이 해당 스코프의 최상단으로 끌어올려지는 것을 의미합니다.",
      },
      {
        question: "문제2: 호이스팅이 무엇인가요?",
        answer: "호이스팅은 변수 선언이 해당 스코프의 최상단으로 끌어올려지는 것을 의미합니다.",
      },
      {
        question: "문제2: 호이스팅이 무엇인가요?",
        answer: "호이스팅은 변수 선언이 해당 스코프의 최상단으로 끌어올려지는 것을 의미합니다.",
      },
      // 실제로는 더 많은 문제가 있을 수 있음
    ],
    tags: ["Next", "React", "Typescript"],
    createdAt: "2025-03-27",
    updatedAt: "2025-03-27",
    mainCardImage: "mainCard",
    // 모바일용 예시 필드
    mobileTitle: "게임 01",
    mobileProblems: [
      {
        question: "문제2: 호이스팅이 무엇인가요?",
        answer: "호이스팅은 변수 선언이 해당 스코프의 최상단으로 끌어올려지는 것을 의미합니다.",
      },
      {
        question: "문제1: DOM트리가 무엇인가요?",
        answer: "DOM트리는 문서 객체 모델(DOM)의 트리 구조를 나타내는 모델입니다.",
      },
    ],
    mobileTags: ["Javascript", "React", "Typescript"],
  },
];

export const checkCardData: ICardDataProps[] = [
  {
    number: "01",
    contentId: "1092asdf",
    title: "checkCard",
  },
];

export const favoriteCardData: ICardDataProps[] = [
  {
    number: "01",
    contentId: "1092asdf",
    title: "favoriteCard",
  },
];
