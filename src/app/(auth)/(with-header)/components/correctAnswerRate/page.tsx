import React from "react";
import { CorrectAnswerRate } from "../correctAnswerRate";
import { getAverageScore } from "../utils/getAverageScore";
import { correctAnswerRateGameQuestions, correctAnswerRateGameSessionRecords, correctAnswerRateGameSessions } from "./correctAnswerRate.mock";

const page = () => {
  return (
    <div>
      <CorrectAnswerRate    
        averageScore={getAverageScore(correctAnswerRateGameQuestions[0], correctAnswerRateGameSessionRecords, correctAnswerRateGameSessions)}
        type="game"
      />
      <CorrectAnswerRate
        averageScore={getAverageScore(correctAnswerRateGameQuestions[0], correctAnswerRateGameSessionRecords, correctAnswerRateGameSessions)}
        type="session"
      />
    </div>
  );
};

export default page;
