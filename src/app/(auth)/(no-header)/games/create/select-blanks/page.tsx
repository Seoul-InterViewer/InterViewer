"use client";
import { useState } from "react";
import { buttonVariants } from "@/app/components/button";
import { Button } from "@/app/components/button/Button";
import { Icon } from "@/app/components/icon";
import { Title } from "@/app/components/title";
import { questions, gameQuestionBlanks } from "./mocks/selectBlanksData";

export default function SelectBlanksPage() {
  const [selectedBlanks, setSelectedBlanks] = useState<string[]>([]);
  const currentQuestion = questions[0];
  const currentBlanks = gameQuestionBlanks;

  const handleWordClick = (word: string) => {
    if (selectedBlanks.includes(word)) {
      setSelectedBlanks(selectedBlanks.filter((w) => w !== word));
    } else {
      setSelectedBlanks([...selectedBlanks, word]);
    }
  };

  const renderContent = () => {
    const words = currentQuestion.content.split(/(\s+)/);
    return words.map((word, index) => {
      const isSelected = selectedBlanks.includes(word.replace(/\*\*/g, ""));
      const isBlank = word.includes("**");
      const cleanWord = word.replace(/\*\*/g, "");

      return (
        <span
          key={index}
          onClick={() => isBlank && handleWordClick(cleanWord)}
          className={`cursor-pointer ${isSelected ? "bg-yellow-200" : ""}`}
        >
          {cleanWord}
        </span>
      );
    });
  };

  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <Button type="button" className="fixed flex items-center md:top-17 md:left-15 md:gap-3.5">
        <Icon name="reply" className="md:w-6 md:h-6 w-4 h-4 " />
        <span className="md:font-regular-24">뒤로</span>
      </Button>

      <article className="flex flex-col">
        <div>
          <Icon name="questionBlack" />
          <p>Question 1 of {questions.length}</p>
        </div>
        <p className="md:font-sb-16">
          빈칸으로 지정할 단어를 클릭해주세요.{" "}
          <span className="md:font-medium-12">(최소 한개의 단어는 남겨야합니다.)</span>
        </p>
        <section>
          <div>
            <span className="md:font-bold-32">Q.</span>
            <Title size="sm" title={currentQuestion.title} />
          </div>
          <div className="whitespace-pre-wrap">{renderContent()}</div>
          <div>
            선택된 빈칸 :{" "}
            {selectedBlanks.map((blank, index) => (
              <span key={index} className="mr-2">
                {blank}
              </span>
            ))}
          </div>
          <div>
            <Button type="button" className={buttonVariants({ size: "lg", color: "black" })}>
              이전
            </Button>
            <Button type="button" className={buttonVariants({ size: "lg", color: "yellow" })}>
              생성완료
            </Button>
          </div>
        </section>
      </article>
    </main>
  );
}
