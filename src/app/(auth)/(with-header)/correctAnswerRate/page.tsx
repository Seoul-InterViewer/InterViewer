import React from "react";
import { CorrectAnswerRate } from "./CorrectAnswerRate";
import { gameSessionRecords, gameSessions, gameQuestions } from "./mocks/correctAnswerRateData";
import { getAverageScore } from "@/utils/getAverageScore";

const page = () => {
  return (
    <div>
      <CorrectAnswerRate
        averageScore={getAverageScore(gameQuestions[0], gameSessionRecords, gameSessions)}
      />
    </div>
  );
};

export default page;
