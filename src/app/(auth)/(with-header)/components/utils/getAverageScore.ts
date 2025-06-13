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
  const questionSessionRecords = sessionRecords.filter(
    (record) => record.game_question_id === gameQuestion.id,
  );

  // 해당 게임의 세션 찾기
  const questionSessions = sessions.filter((session) =>
    questionSessionRecords.some((record) => record.session_id === session.id),
  );

  // 전체 문제 수
  const totalQuestions = gameQuestion.source_ids.length;

  // 정답 개수 계산
  const correctAnswers = questionSessionRecords.filter((record) => record.is_correct).length;

  // 정답률 계산 (소수점 버림)
  return Math.floor((correctAnswers / totalQuestions) * 100);
};
