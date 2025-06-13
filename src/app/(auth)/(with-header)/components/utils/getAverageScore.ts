import {
  IGameQuestionProps,
  IGameSessionProps,
  IGameSessionRecordProps,
} from "../types/getAverageScore.type";

export const getAverageScore = (
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
