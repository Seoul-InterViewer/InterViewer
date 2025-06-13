import { Icon } from "@/app/components/icon/Icon";
import React from "react";
import { QuestionData } from "../../gamePlay.types";

export const Notice = ({
  currentIndex,
  questions,
}: {
  currentIndex: number;
  questions: QuestionData[];
}) => {
  return (
    <>
      <div className="flex gap-2 mb-4">
        <Icon name="questionBlack" />
        <div className="font-regular-16">
          Question <span>{currentIndex + 1}</span> of <span>{questions.length}</span>
        </div>
      </div>
      <div className="md:w-full font-medium-12 text-font-gray mb-16 !leading-5">
        빈칸을 채워주세요. <span>(최소 한 칸 이상은 채워야합니다.)</span> <br />
        <span className="hidden md:block">*Tab키를 사용하면 더 빠르게 채울 수 있어요.</span>
      </div>
    </>
  );
};
