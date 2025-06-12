"use client";
import { Icon } from "@/app/components/icon";
import React, { useState } from "react";
import { QestionContent } from "./components/questionContent/QuestionContent";
import { Buttons } from "./components/buttons/Buttons";
import { Notice } from "./components/notice/Notice";
import { gameQuestions, questions } from "./mocks/selectBlanksData";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/button/Button";

export default function GameSelectBlanksPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBlanks, setSelectedBlanks] = useState<{ word: string; index: number }[]>([]);
  const [selectedValues, setSelectedValues] = useState<{ [key: number]: string }>({});
  const router = useRouter();

  const currentGameQuestion = gameQuestions[0];
  const currentQuestion = questions.find(
    (question) => question.id === currentGameQuestion.source_id[currentIndex],
  );

  const handleWordClick = (word: string, index: number) => {
    const isAlreadySelected = selectedBlanks.some((blank) => blank.index === index);

    if (isAlreadySelected) {
      setSelectedBlanks(selectedBlanks.filter((blank) => blank.index !== index));
      const newSelectedValues = { ...selectedValues };
      delete newSelectedValues[index];
      setSelectedValues(newSelectedValues);
    } else {
      setSelectedBlanks([...selectedBlanks, { word, index }]);
      setSelectedValues({ ...selectedValues, [index]: "" });
    }
  };

  const words = currentQuestion?.content.split(" ") || [];

  const moveInOutVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.5,
    },
  };

  return (
    <main className="pt-20">
      <Button
        type="button"
        className="flex items-center gap-3 cursor-pointer mb-10"
        onClick={() => router.back()}
      >
        <Icon name="reply" />
        <span>뒤로</span>
      </Button>

      <div className="w-full md:w-[70%]  min-h-[65vh] mx-auto flex flex-col justify-between">
        <div>
          <Notice currentIndex={currentIndex} questions={currentGameQuestion.source_id} />
          <div className="font-sb-20 mb-4 !leading-8">
            Q. <span>{currentQuestion?.title}</span>
          </div>
          <p className="font-regular-16 text-font-gray !leading-7 md:!leading-8 mb-20 max-h-[20vh] md:max-h-[30vh] overflow-y-auto">
            {words.map((word, index) => (
              <QestionContent
                key={index}
                word={word}
                index={index}
                isSelected={selectedBlanks.some((blank) => blank.index === index)}
                selectedValues={selectedValues[index] || ""}
                onWordClick={handleWordClick}
              />
            ))}
          </p>
        </div>
        <div className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-3.5">
            <div className="text-sub-text">
              선택된 빈칸 :{" "}
              {selectedBlanks.map((blank, index) => (
                <span key={index} className="mr-2">
                  {selectedValues[blank.index] || blank.word}
                </span>
              ))}
            </div>
          </div>
          <Buttons
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            questions={currentGameQuestion.source_id.length}
          />
        </div>
      </div>
    </main>
  );
}
