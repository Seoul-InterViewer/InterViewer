"use client";

import React, { ChangeEventHandler, useState } from "react";

import { QuestionHeader } from "./components/questionCreateHeader/QuestionHeader";
import { QuestionCreateBody } from "./components/questionBody/QuestionCreateBody";

export default function CreateQuestionPage() {
  // 각 textarea별 글자수 state 분리
  const [questionCount, setQuestionCount] = useState(0);
  const [answerCount, setAnswerCount] = useState(0);

  const onQuestionChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setQuestionCount(e.target.value.length);
  };
  const onAnswerChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setAnswerCount(e.target.value.length);
  };

  return (
    <div className="w-full">
      {/* 질문 제목 */}
      <QuestionHeader
        questionCount={questionCount}
        answerCount={answerCount}
        onQuestionChange={onQuestionChange}
        onAnswerChange={onAnswerChange}
      />
      {/* 질문, 해설, CODEPEN URL, 파일 첨부, 버튼 */}
      <QuestionCreateBody
        questionCount={questionCount}
        answerCount={answerCount}
        onQuestionChange={onQuestionChange}
        onAnswerChange={onAnswerChange}
      />
    </div>
  );
}
