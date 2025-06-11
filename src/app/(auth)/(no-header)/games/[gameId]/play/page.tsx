"use client";
import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";
import { questions } from "./mockups/gameListData";
import React, { useState } from "react";
import { RenderAnswerWithBlanks } from "./components/RenderAnswerWithBlanks/RenderAnswerWithBlanks";

export default function GamePlayPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="pt-20">
      <div className="flex items-center gap-3 cursor-pointer mb-10">
        <Icon name="reply" />
        <span>뒤로</span>
      </div>

      <div className="w-full md:w-[70%]  min-h-[65vh] mx-auto flex flex-col justify-between">
        <div>
          <div className="flex gap-2 mb-4">
            <Icon name="questionBlack" />
            <div className="font-regular-16">
              Question <span>{currentIndex + 1}</span> of <span>{questions.length}</span>
            </div>
          </div>
          <div className="md:w-full font-medium-12 text-font-gray mb-16 !leading-5">
            빈칸을 채워주세요. <span>(최소 한 칸 이상은 채워야합니다.)</span>
          </div>
          <div className="font-sb-20 mb-4 !leading-8">
            Q. <span>{questions[currentIndex].question}</span>
          </div>
          <p className="font-regular-16 text-font-gray !leading-7 md:!leading-8 mb-20 max-h-[20vh] md:max-h-[30vh] overflow-y-auto">
            <RenderAnswerWithBlanks q={questions[currentIndex]} />
            <br />
          </p>
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            className={
              buttonVariants({ size: "md", color: "black", hover: true }) +
              (currentIndex === 0 ? " opacity-50 cursor-not-allowed pointer-events-none" : "")
            }
            onClick={() => {
              if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
            }}
          >
            이전
          </Button>
          {currentIndex === questions.length - 1 ? (
            <Button
              type="button"
              className={buttonVariants({ size: "md", color: "yellow", hover: true })}
            >
              제출
            </Button>
          ) : (
            <Button
              type="button"
              className={buttonVariants({ size: "md", color: "yellow", hover: true })}
              onClick={() => {
                if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
              }}
            >
              다음
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
