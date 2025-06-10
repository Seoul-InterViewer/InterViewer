"use client";
import { useState } from "react";
import { Input, inputVariants } from "@/app/components/input";
import { buttonVariants } from "@/app/components/button";
import { Button } from "@/app/components/button/Button";
import { Icon } from "@/app/components/icon";
import { Title } from "@/app/components/title";
import { questions, gameQuestionBlanks } from "./mocks/selectBlanksData";

export default function SelectBlanksPage() {
  const [selectedBlanks, setSelectedBlanks] = useState<{ word: string; index: number }[]>([]);
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});
  const currentQuestion = questions[0];

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

  const words = currentQuestion.content.split(" ");
  const renderContent = () => {
    return words.map((word, index) => {
      const isSelected = selectedBlanks.some((blank) => blank.index === index);
      const cleanWord = word.replace(/\s+/g, "");

      return (
        <span
          key={index}
          className={`relative inline-block ${
            isSelected ? "" : "hover:shadow-[0_0_0_2px_rgba(0,0,0,0.1)]"
          } cursor-pointer md:font-regular-26 whitespace-pre h-10 leading-10`}
          onClick={() => handleWordClick(cleanWord, index)}
        >
          {isSelected ? (
            <div className="relative inline-flex items-center h-10">
              <Input
                value={inputValues[index] || ""}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className={`${inputVariants({ variant: "blank" })} h-10`}
                placeholder={cleanWord}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleWordClick(cleanWord, index);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center cursor-pointer"
              >
                <Icon name="close" className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <span className="h-10 leading-10 inline-block">{cleanWord}</span>
          )}
          {word.match(/\s+/) || " "}
        </span>
      );
    });
  };

  const handleComplete = () => {
    const blanks = selectedBlanks.map((blank, index) => ({
      id: `blank-${index + 1}`,
      word_index: blank.index,
      word: inputValues[blank.index] || blank.word,
      createdAt: new Date().toISOString(),
      game_question_id: currentQuestion.id,
    }));

    // TODO: API 호출하여 blanks 데이터 저장
    console.log("저장될 빈칸 데이터:", blanks);
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center px-4 md:px-10 py-10">
      <div className="fixed md:top-17 md:left-15">
        <Button type="button" className="flex items-center md:gap-3.5">
          <Icon name="reply" className="md:w-6 md:h-6 w-4 h-4" />
          <span className="md:font-regular-24">뒤로</span>
        </Button>
      </div>

      <article className="flex flex-col max-w-4xl w-full">
        <div className="flex flex-col gap-5 pb-10">
          <div className="flex md:gap-2.5 items-center">
            <Icon name="questionBlack" />
            <p className="md:font-regular-16">Question 1 of {questions.length}</p>
          </div>
          <p className="md:font-sb-16">
            빈칸으로 지정할 단어를 클릭해주세요.{" "}
            <span className="md:font-medium-12">(최소 한개의 단어는 남겨야합니다.)</span>
          </p>
        </div>

        <section className="flex flex-col gap-7">
          <div className="flex flex-col gap-6">
            <div className="flex items-end gap-2">
              <span className="md:font-bold-32">Q.</span>
              <Title size="sm" title={currentQuestion.title} />
            </div>
            <div className="whitespace-pre-wrap">{renderContent()}</div>
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

            <div className="flex gap-4">
              <Button type="button" className={buttonVariants({ size: "lg", color: "black" })}>
                이전
              </Button>
              <Button
                type="button"
                className={buttonVariants({ size: "lg", color: "yellow" })}
                onClick={handleComplete}
              >
                생성완료
              </Button>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
