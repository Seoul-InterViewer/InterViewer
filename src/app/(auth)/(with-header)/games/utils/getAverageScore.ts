import { gameSessions, gameSessionRecords } from "../mocks/gamePageData";

export const getAverageScore = (questionID: string, source_ids: string[]) => {
  const totalScore = source_ids.length;
  const sessionRecord = gameSessionRecords.find((record) => record.game_question_id === questionID);
  const userScore =
    gameSessions.find((session) => session.id === sessionRecord?.session_id)?.total_score ?? 0;

  return Math.floor((userScore / totalScore) * 100);
};
