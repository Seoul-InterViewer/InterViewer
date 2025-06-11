export const gameQuestions = [
  {
    id: "game-q-001",
    title: "React 기본 개념 - 빈칸 채우기",
    createdAt: "2025-06-01T10:00:00Z",
    updatedAt: "2025-06-01T10:00:00Z",
    source_id: [
      "123e4567-e89b-12d3-a456-426614174000", // 연결된 원본 question ID
      "123e4567-e89b-12d3-a456-426614174001", // 연결된 원본 question ID
      "123e4567-e89b-12d3-a456-426614174002", // 연결된 원본 question ID
      "123e4567-e89b-12d3-a456-426614174003", // 연결된 원본 question ID
    ],
    user_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
];

export const gameQuestionBlanks = [
  {
    id: "blank-001",
    word_index: 10,
    word: "메모이제이션",
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
  {
    id: "blank-003",
    word_index: 8,
    word: "Promise",
    createdAt: "2025-06-01T11:01:00Z",
    game_question_id: "game-q-002",
  },
  {
    id: "blank-004",
    word_index: 15,
    word: "async/await",
    createdAt: "2025-06-01T11:01:30Z",
    game_question_id: "game-q-002",
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
    content: `useMemo는 계산 비용이 큰 값을 메모이제이션 해서 재계산 시 불필요한 계산을 방지하는 데 쓰이고, useCallback은 함수를 재사용 해서 불필요한 함수 재생성을 방지해요. 예를 들어, 자식 컴포넌트에 콜백 함수를 props로 넘길 떄, 매 렌더마다 함수가 새로 생성되면 자식도 불필요하게 리렌더 될 수 있어요. 그럴 땐 useCallback을 사용하는것이 효과적이죠. 개인적으로는 최적화가 실제로 필요할 때만 사용하는 편이에요. 지나치게 남발하면 오히려 코드 복잡도만 올라가고 성능 이점이 없을 수도 있거든요.`,
    difficulty: "medium",
    likes: 10,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440001",
    userID: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174001",
    title: "JavaScript - 비동기 처리",
    content: `JavaScript에서 비동기 처리를 위해 Promise를 사용할 수 있어요. Promise는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체입니다. async/await는 Promise를 더 쉽게 다룰 수 있게 해주는 문법이에요. async 함수는 항상 Promise를 반환하며, await는 Promise가 처리될 때까지 기다립니다. 이를 통해 비동기 코드를 동기 코드처럼 작성할 수 있어요.`,
    difficulty: "medium",
    likes: 15,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440002",
    userID: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174002",
    title: "CSS - Flexbox 레이아웃",
    content: `Flexbox는 1차원 레이아웃 모델을 제공하는 CSS 속성입니다.flex-direction으로 주축의 방향을 설정할 수 있고, justify-content로 주축을 기준으로 아이템들을 정렬할 수 있어요. align-items는 교차축을 기준으로 아이템들을 정렬합니다. flex-wrap을 사용하면 아이템들이 여러 줄에 걸쳐 배치될 수 있어요.`,
    difficulty: "easy",
    likes: 20,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440003",
    userID: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174003",
    title: "TypeScript - 타입 시스템",
    content: `TypeScript는 JavaScript에 정적 타입을 추가한 프로그래밍 언어입니다. interface와 type을 사용하여 객체의 구조를 정의할 수 있어요. 제네릭을 통해 타입을 매개변수화할 수 있고, 유니온 타입과 인터섹션 타입으로 타입을 조합할 수 있습니다. 타입 가드를 사용하면 런타임에 타입을 검사할 수 있어요.`,
    difficulty: "hard",
    likes: 25,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440004",
    userID: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
];
