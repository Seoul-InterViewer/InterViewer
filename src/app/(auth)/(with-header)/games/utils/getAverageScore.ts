import { gameSessions, gameSessionRecords } from "../mocks/gamePageData";

export const getAverageScore = (questionID: string, source_ids: string[]) => {
  const totalScore = source_ids.length;
  const sessionRecord = gameSessionRecords.find((record) => record.game_question_id === questionID);
  const userScore =
    gameSessions.find((session) => session.id === sessionRecord?.session_id)?.total_score ?? 0;

  return Math.floor((userScore / totalScore) * 100);
};

import {
  IGameQuestionProps,
  IGameSessionProps,
  IGameSessionRecordProps,
} from "../../components/types/getAverageScore.type";

export const getAverageScore2 = (
  gameQuestion: IGameQuestionProps,
  sessionRecords: IGameSessionRecordProps[],
  sessions: IGameSessionProps[],
): number => {
  // 해당 게임의 세션 기록 찾기
  const questionSessionRecords = sessionRecords.find(
    (record) => record.game_question_id === gameQuestion.id,
  );

  // 전체 문제 수
  const totalQuestions = gameQuestion.source_ids.length;

  // 정답 개수 계산
  const correctAnswers =
  sessions.find((session) => session.id === questionSessionRecords?.session_id)?.total_score ?? 0;
  
  // 정답률 계산 (소수점 버림)
  return Math.floor((correctAnswers / totalQuestions) * 100);
};
