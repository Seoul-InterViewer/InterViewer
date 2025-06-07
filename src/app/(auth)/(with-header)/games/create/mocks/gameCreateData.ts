import { IRadioItem } from "@/app/components/radioButton";

export const questions = [
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    title: "React - 가상 돔(virtual DOM)",
    content: "React의 기본 개념을 설명해주세요.",
    difficulty: "medium",
    likes: 10,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440001",
    userID: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
  {
    id: "987fcdeb-51a2-43d7-b987-654321098765",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    title: "React - 라이프사이클(생애주기)",
    content: "React의 기본 개념을 설명해주세요.",
    difficulty: "easy",
    likes: 10,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440001",
    userID: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  },
  {
    id: "456a789b-cdef-0123-4567-89abcdef0123",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    title: "React - 리액트 훅(React Hook)",
    content: "React의 기본 개념을 설명해주세요.",
    difficulty: "hard",
    likes: 10,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440001",
    userID: "8ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
  {
    id: "789b012c-3456-789d-0123-456789abcdef",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    title: "React - 프롭스와 스테이트(Props and State)",
    content: "React의 기본 개념을 설명해주세요.",
    difficulty: "easy",
    likes: 10,
    isSample: true,
    categoryID: "550e8400-e29b-41d4-a716-446655440001",
    userID: "9ba7b810-9dad-11d1-80b4-00c04fd430c8",
  },
];

export const bookmarks = [
  {
    user_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    question_id: "123e4567-e89b-12d3-a456-426614174000",
    createdAt: "2024-01-01",
    group_id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  },
  {
    user_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    question_id: "987fcdeb-51a2-43d7-b987-654321098765",
    createdAt: "2024-01-01",
    group_id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  },
  {
    user_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    question_id: "456a789b-cdef-0123-4567-89abcdef0123",
    createdAt: "2024-01-01",
    group_id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  },
  {
    user_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    question_id: "789b012c-3456-789d-0123-456789abcdef",
    createdAt: "2024-01-01",
    group_id: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
  },
];

export const tags = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "react",
  },
];

export const questionTags = [
  {
    questionID: "123e4567-e89b-12d3-a456-426614174000",
    tagID: "550e8400-e29b-41d4-a716-446655440001",
  },
  {
    questionID: "987fcdeb-51a2-43d7-b987-654321098765",
    tagID: "550e8400-e29b-41d4-a716-446655440001",
  },
  {
    questionID: "456a789b-cdef-0123-4567-89abcdef0123",
    tagID: "550e8400-e29b-41d4-a716-446655440001",
  },
  {
    questionID: "789b012c-3456-789d-0123-456789abcdef",
    tagID: "550e8400-e29b-41d4-a716-446655440001",
  },
];

export const wrongAnswers = [
  {
    id: "a1e2c3d4-e5f6-7890-abcd-1234567890ab",
    memo: "useEffect 사용 위치를 헷갈림",
    createdAt: "2025-06-01T10:00:00Z",
    questionID: "123e4567-e89b-12d3-a456-426614174000",
  },
  {
    id: "b2f3g4h5-i6j7-8901-bcde-2345678901bc",
    memo: "라이프사이클 함수가 기억 안남",
    createdAt: "2025-06-02T12:30:00Z",
    questionID: "987fcdeb-51a2-43d7-b987-654321098765",
  },
  {
    id: "c3h4i5j6-k7l8-9012-cdef-3456789012cd",
    memo: "useState와 useReducer 차이점 혼동",
    createdAt: "2025-06-03T09:15:00Z",
    questionID: "456a789b-cdef-0123-4567-89abcdef0123",
  },
  {
    id: "d4i5j6k7-l8m9-0123-def0-4567890123de",
    memo: "Props와 State 구분이 애매했음",
    createdAt: "2025-06-04T14:45:00Z",
    questionID: "789b012c-3456-789d-0123-456789abcdef",
  },
];

export const categories = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Next.js",
    is_etc: true,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "React",
    is_etc: false,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Typescript",
    is_etc: false,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "JavaScript",
    is_etc: false,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    name: "Web",
    is_etc: false,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    name: "CS",
    is_etc: false,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440006",
    name: "Library",
    is_etc: false,
  },
];

export const difficultyDatas: IRadioItem[] = [
  { value: "easy", txt: "하" },
  { value: "medium", txt: "중" },
  { value: "hard", txt: "상" },
];

export const categoryDatas: IRadioItem[] = [
  { value: "nextjs", txt: "Next.js" },
  { value: "react", txt: "React" },
  { value: "typescript", txt: "Typescript" },
  { value: "js", txt: "JavaScript" },
  { value: "web", txt: "Web" },
  { value: "cs", txt: "CS" },
  { value: "library", txt: "Library" },
];