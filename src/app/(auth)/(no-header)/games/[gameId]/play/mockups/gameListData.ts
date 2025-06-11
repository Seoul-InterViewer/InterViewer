import type { QuestionData } from "../gamePlay.types";

export const questions: QuestionData[] = [
  {
    question: "React에서 useMemo와 useCallback의 차이점은 무엇인가요? 언제 사용하나요?",
    answer:
      "useMemo는 계산 비용이 큰 값을 메모이제이션해서 리렌더링 시 불필요한 계산을 방지하는 데 쓰이고, useCallback은 함수를 메모이제이션해서 불필요한 함수 재생성을 방지해요. 예를 들어, 자식 컴포넌트에 콜백 함수를 props로 넘길 때, 매 렌더마다 함수가 새로 생성되면 자식도 불필요하게 리렌더 될 수 있어요. 그럴 땐 useCallback을 사용하는 것이 효과적이죠.",
    keywords: ["useMemo", "useCallback", "메모이제이션", "리렌더링"],
  },
  {
    question: "Virtual DOM이란 무엇이며, React에서 어떻게 동작하나요?",
    answer:
      "Virtual DOM은 실제 DOM의 가벼운 사본으로, 상태 변화가 발생하면 새로운 Virtual DOM을 만들고 이전 Virtual DOM과 비교(diff)하여 변경된 부분만 실제 DOM에 반영합니다.",
    keywords: ["Virtual DOM", "DOM", "비교", "반영"],
  },
  {
    question: "Props와 State의 차이점은 무엇인가요?",
    answer:
      "Props는 부모 컴포넌트가 자식 컴포넌트에 값을 전달할 때 사용하며, 읽기 전용입니다. State는 컴포넌트 내부에서 관리하는 데이터로, 값이 변경되면 컴포넌트가 리렌더링됩니다.",
    keywords: ["Props", "State", "부모", "자식", "리렌더링"],
  },
  {
    question: "useEffect 훅은 언제 사용하며, 의존성 배열의 역할은 무엇인가요?",
    answer:
      "useEffect는 컴포넌트가 마운트, 언마운트, 업데이트될 때 특정 작업(부수 효과)을 수행할 때 사용합니다. 의존성 배열에 명시된 값이 변경될 때만 effect가 실행됩니다.",
    keywords: ["useEffect", "마운트", "언마운트", "업데이트", "의존성 배열"],
  },
  {
    question: "React에서 리스트를 렌더링할 때 key prop이 왜 필요한가요?",
    answer:
      "key prop은 React가 각 엘리먼트를 고유하게 식별할 수 있도록 도와줍니다. key가 없거나 중복되면 리렌더링 시 효율적으로 DOM을 업데이트하지 못해 성능 저하나 버그가 발생할 수 있습니다.",
    keywords: ["key prop", "고유", "식별", "성능", "버그"],
  },
];
