"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@/app/components/icon";
import { Button, buttonVariants } from "@/app/components/button";
import { QestionContent } from "./components/questionContent/QuestionContent";
import { Buttons } from "./components/buttons/Buttons";
import { Notice } from "./components/notice/Notice";
import { useRouter } from "next/navigation";
import { SelectedBlankList } from "./components/selectedBlankList";
import { AnimatePresence } from "motion/react";
import { Modal, modalVariants } from "@/app/components/modal";
import { gameQuestions, questions, gameQuestionBlanks } from "./mocks/selectBlanksData";
import useModal from "@/hooks/modal/useModal";

export default function GameEditSelectBlanksPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBlanks, setSelectedBlanks] = useState<{ word: string; index: number }[]>([]);
  const [selectedValues, setSelectedValues] = useState<{ [key: number]: string }>({});
  const modalProps = useModal();
  const router = useRouter();

  const currentGameQuestion = gameQuestions[0];
  const currentQuestion = questions.find(
    (question) => question.id === currentGameQuestion.source_id[currentIndex],
  );
  const words = currentQuestion?.content.split(" ") || [];

  // 현재 question에 해당하는 빈칸들을 초기화
  useEffect(() => {
    if (currentQuestion) {
      const currentBlanks = gameQuestionBlanks.filter(
        (blank) => blank.question_id === currentQuestion.id,
      );

      const initialSelectedBlanks = currentBlanks.map((blank) => ({
        word: blank.word,
        index: blank.word_index, // word_index를 index로 사용
      }));

      const initialSelectedValues = currentBlanks.reduce(
        (acc, blank) => ({
          ...acc,
          [blank.word_index]: blank.word, // word_index를 키로 사용
        }),
        {},
      );

      setSelectedBlanks(initialSelectedBlanks);
      setSelectedValues(initialSelectedValues);
    }
  }, [currentQuestion]);

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

  const handleGivingUp = () => {
    modalProps.close;
    router.back();
  };

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

      <AnimatePresence>
        <Modal
          isOpen={modalProps.isOpen}
          onClose={modalProps.close}
          className={modalVariants({ size: "default" })}
          closeButton={true}
          closeWithOverlay={false}
        >
          <div className="flex-center flex-col gap-7.5 w-full h-full">
            <h3 className="font-regular-18">정말 게임 수정을 그만두시겠어요?</h3>
            <Button
              type="button"
              className={buttonVariants({ color: "black", size: "lg" })}
              onClick={handleGivingUp}
            >
              네, 그만둘게요.
            </Button>
          </div>
        </Modal>
      </AnimatePresence>

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
          <SelectedBlankList selectedBlanks={selectedBlanks} selectedValues={selectedValues} />
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
