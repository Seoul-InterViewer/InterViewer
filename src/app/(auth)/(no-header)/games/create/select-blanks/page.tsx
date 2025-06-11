"use client";
import { useState } from "react";
import { Button } from "@/app/components/button/Button";
import { Icon } from "@/app/components/icon";
import { Title } from "@/app/components/title";
import { gameQuestions, questions } from "./mocks/selectBlanksData";
import { NavigationButton } from "./components/navigationButtons";
import { QestionContent } from "./components/questionContent";

export default function SelectBlanksPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBlanks, setSelectedBlanks] = useState<{ word: string; index: number }[]>([]);
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});

  const currentGameQuestion = gameQuestions[0];
  const currentQuestion = questions.find(
    (question) => question.id === currentGameQuestion.source_id[currentIndex],
  );

  const handleWordClick = (word: string, index: number) => {
    const isAlreadySelected = selectedBlanks.some((blank) => blank.index === index);

    if (isAlreadySelected) {
      setSelectedBlanks(selectedBlanks.filter((blank) => blank.index !== index));
      const newInputValues = { ...inputValues };
      delete newInputValues[index];
      setInputValues(newInputValues);
    } else {
      setSelectedBlanks([...selectedBlanks, { word, index }]);
      setInputValues({ ...inputValues, [index]: "" });
    }
  };

  const handleInputChange = (index: number, value: string) => {
    setInputValues({ ...inputValues, [index]: value });
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedBlanks([]);
      setInputValues({});
    }
  };

  const handleNext = () => {
    if (currentIndex < currentGameQuestion.source_id.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedBlanks([]);
      setInputValues({});
    }
  };

  const handleComplete = () => {
    const blanks = selectedBlanks.map((blank, index) => ({
      id: `blank-${index + 1}`,
      word_index: blank.index,
      word: inputValues[blank.index] || blank.word,
      createdAt: new Date().toISOString(),
      game_question_id: currentGameQuestion.id,
    }));

    // TODO: API 호출하여 blanks 데이터 저장
    console.log("저장될 빈칸 데이터:", blanks);
  };

  const words = currentQuestion?.content.split(" ") || [];

  return (
    <main className="w-full min-h-screen flex justify-center items-center px-4 md:px-10 py-10 relative">
      <div className="fixed md:top-17 md:left-15 top-5 left-9">
        <Button type="button" className="flex items-center gap-3.5 cursor-pointer ">
          <Icon name="reply" className="md:w-6 md:h-6 w-4.5 h-3.5" />
          <span className="md:font-regular-24 font-regular-18">뒤로</span>
        </Button>
      </div>
      <article className="flex flex-col max-w-4xl w-full">
        <div className="flex flex-col gap-5 md:pb-10 pb-5">
          <div className="flex gap-2.5 items-center">
            <Icon name="questionBlack" />
            <p className="md:font-regular-16">
              Question {currentIndex + 1} of {currentGameQuestion.source_id.length}
            </p>
          </div>
          <p className="md:font-sb-16">
            빈칸으로 지정할 단어를 클릭해주세요.{" "}
            <span className="md:font-medium-12">(최소 한개의 단어는 남겨야합니다.)</span>
          </p>
        </div>

        <section className="flex flex-col gap-7">
          <div className="flex flex-col gap-6">
            <div className="flex items-end gap-2">
              <span className="font-bold-28">Q.</span>
              <Title size="sm" title={currentQuestion?.title || ""} />
            </div>
            <div className="whitespace-pre-wrap">
              {words.map((word, index) => (
                <QestionContent
                  key={index}
                  word={word}
                  index={index}
                  isSelected={selectedBlanks.some((blank) => blank.index === index)}
                  inputValue={inputValues[index] || ""}
                  onWordClick={handleWordClick}
                  onInputChange={handleInputChange}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="text-sub-text">
              선택된 빈칸 :{" "}
              {selectedBlanks.map((blank, index) => (
                <span key={index} className="mr-2">
                  {inputValues[blank.index] || blank.word}
                </span>
              ))}
            </div>

            <NavigationButton
              currentIndex={currentIndex}
              totalQuestions={currentGameQuestion.source_id.length}
              onPrev={handlePrev}
              onNext={handleNext}
              onComplete={handleComplete}
            />
          </div>
        </section>
      </article>
    </main>
  );
}
