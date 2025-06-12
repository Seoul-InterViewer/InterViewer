import React from "react";
import { CorrectAnswerRate } from "../CorrectAnswerRate";
import { getAverageScore } from "../../utils/getAverageScore";

export const gameQuestions = [
  {
    id: "d0a7eecc-06d9-4a76-bd6f-9e77a83b9173",
    title: "게임 01",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    source_ids: [
      "123e4567-e89b-12d3-a456-426614174000",
      "987fcdeb-51a2-43d7-b987-654321098765",
      "456a789b-cdef-0123-4567-89abcdef0123",
    ],
    user_id: "06c2cf08-1f2c-472e-914f-f569f9f0b03b",
  },
  {
    id: "f13b1b34-4cf3-4121-bc37-65b8f5a1f74e",
    title: "게임 02",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    source_ids: [
      "987fcdeb-51a2-43d7-b987-654321098765",
      "456a789b-cdef-0123-4567-89abcdef0123",
      "789b012c-3456-789d-0123-456789abcdef",
    ],
    user_id: "06c2cf08-1f2c-472e-914f-f569f9f0b03b",
  },
  {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    title: "게임 03",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    source_ids: [
      "456a789b-cdef-0123-4567-89abcdef0123",
      "789b012c-3456-789d-0123-456789abcdef",
      "123e4567-e89b-12d3-a456-426614174000",
    ],
    user_id: "06c2cf08-1f2c-472e-914f-f569f9f0b03b",
  },
  {
    id: "c5d6e7f8-9a0b-1234-cdef-567890123456",
    title: "게임 04",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    source_ids: [
      "789b012c-3456-789d-0123-456789abcdef",
      "123e4567-e89b-12d3-a456-426614174000",
      "987fcdeb-51a2-43d7-b987-654321098765",
    ],
    user_id: "06c2cf08-1f2c-472e-914f-f569f9f0b03b",
  },
];

export const gameSessionRecords = [
  {
    id: "c1d7e6fc-d73d-495f-909c-2fba658eb97c",
    is_correct: true,
    user_answer: "DOM",
    score: 1,
    createdAt: "2024-01-01",
    session_id: "3a593292-5a18-49a1-84df-246ed9a7dc0f",
    game_question_id: "d0a7eecc-06d9-4a76-bd6f-9e77a83b9173",
  },
  {
    id: "fc6e2893-c3c1-4988-b41f-4a12ffbb2047",
    is_correct: false,
    user_answer: "Scope",
    score: 1,
    createdAt: "2024-01-01",
    session_id: "k1l2m3n4-o5p6-7890-qrst-uvwxyzabcdef",
    game_question_id: "f13b1b34-4cf3-4121-bc37-65b8f5a1f74e",
  },
  {
    id: "i7j8k9l0-m1n2-3456-opqr-stuvwxyzabcd",
    is_correct: true,
    user_answer: "Closure",
    score: 1,
    createdAt: "2024-01-01",
    session_id: "l3m4n5o6-p7q8-9012-rstu-vwxyzabcdefg",
    game_question_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  },
  {
    id: "j9k0l1m2-n3o4-5678-pqrs-tuvwxyzabcdef",
    is_correct: false,
    user_answer: "Callback",
    score: 1,
    createdAt: "2024-01-01",
    session_id: "m5n6o7p8-q9r0-1234-stuv-wxyzabcdefgh",
    game_question_id: "c5d6e7f8-9a0b-1234-cdef-567890123456",
  },
];

export const gameSessions = [
  {
    id: "3a593292-5a18-49a1-84df-246ed9a7dc0f",
    createdAt: "2024-01-01",
    started_at: "2024-01-01T10:00:00Z",
    ended_at: "2024-01-01T10:10:00Z",
    total_score: 3,
    user_id: "06c2cf08-1f2c-472e-914f-f569f9f0b03b",
  },
  {
    id: "k1l2m3n4-o5p6-7890-qrst-uvwxyzabcdef",
    createdAt: "2024-01-01",
    started_at: "2024-01-01T11:00:00Z",
    ended_at: "2024-01-01T11:15:00Z",
    total_score: 2,
    user_id: "06c2cf08-1f2c-472e-914f-f569f9f0b03b",
  },
  {
    id: "l3m4n5o6-p7q8-9012-rstu-vwxyzabcdefg",
    createdAt: "2024-01-01",
    started_at: "2024-01-01T12:00:00Z",
    ended_at: "2024-01-01T12:20:00Z",
    total_score: 1,
    user_id: "06c2cf08-1f2c-472e-914f-f569f9f0b03b",
  },
  {
    id: "m5n6o7p8-q9r0-1234-stuv-wxyzabcdefgh",
    createdAt: "2024-01-01",
    started_at: "2024-01-01T13:00:00Z",
    ended_at: "2024-01-01T13:25:00Z",
    total_score: 3,
    user_id: "06c2cf08-1f2c-472e-914f-f569f9f0b03b",
  },
];

const page = () => {
  return (
    <div>
      <CorrectAnswerRate
        averageScore={getAverageScore(gameQuestions[0], gameSessionRecords, gameSessions)}
        type="game"
      />
      <CorrectAnswerRate
        averageScore={getAverageScore(gameQuestions[0], gameSessionRecords, gameSessions)}
        type="session"
      />

    </div>
  );
};

export default page;
