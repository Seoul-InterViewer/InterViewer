export const gameQuestions = [
  {
    id: "game-q-001",
    title: "React 기본 개념 - 빈칸 채우기",
    createdAt: "2025-06-01T10:00:00Z",
    updatedAt: "2025-06-01T10:00:00Z",
    source_id: "123e4567-e89b-12d3-a456-426614174000", // 연결된 원본 question ID
    user_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
];

export const gameQuestionBlanks = [
  {
    id: "blank-001",
    word_index: 10, // 10번째 단어
    word: "메모이제이션", // 정답
    createdAt: "2025-06-01T10:01:00Z",
    game_question_id: "game-q-001",
  },
  {
    id: "blank-002",
    word_index: 21,
    word: "재사용",
    createdAt: "2025-06-01T10:01:30Z",
    game_question_id: "game-q-001",
  },
];

export const wrongAnswers = [
  {
    id: "wa-001",
    memo: "useEffect 사용 위치를 헷갈림",
    createdAt: "2025-06-01T10:00:00Z",
    questionID: "123e4567-e89b-12d3-a456-426614174000",
    distractors: ["리렌더링", "불변성", "클로저"],
  },
];

export const questions = [
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    title: "React - 가상 돔(virtual DOM)",
    content: `useMemo는 계산 비용이 큰 값을 메모이제이션 해서 재계산 시 불필요한 계산을 방지하는 데 쓰이고, 
useCallback은 함수를 재사용 해서 불필요한 함수 재생성을 방지해요.
예를 들어, 자식 컴포넌트에 콜백 함수를 props로 넘길 떄, 매 렌더마다 함수가 새로 생성되면 자식도 불필요하게 리렌더 될 수 있어요. 그럴 땐 useCallback을 사용하는것이 효과적이죠. 
개인적으로는 최적화가 실제로 필요할 때만 사용하는 편이에요. 지나치게 남발하면 오히려 코드 복잡도만 올라가고 
성능 이점이 없을 수도 있거든요.`,
    difficulty: "medium",
    likes: 10,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440001",
    userID: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
];
