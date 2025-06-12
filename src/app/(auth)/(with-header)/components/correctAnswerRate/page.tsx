import React from "react";
import { CorrectAnswerRate } from "../correctAnswerRate";
import { getAverageScore } from "../utils/getAverageScore";
import { gameQuestions, gameSessionRecords, gameSessions } from "./mocks/correctAnswerRate.mock";

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
