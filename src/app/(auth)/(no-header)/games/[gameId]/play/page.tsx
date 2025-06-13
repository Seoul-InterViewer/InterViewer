"use client";
import { Icon } from "@/app/components/icon";
import { questions } from "./mockups/gameListData";
import React, { useState } from "react";
import { RenderAnswerWithBlanks } from "./components/RenderAnswerWithBlanks/RenderAnswerWithBlanks";
import { Buttons } from "./components/buttons/Buttons";
import { Notice } from "./components/notice/Notice";
import { Button } from "@/app/components/button";
import { useRouter } from "next/navigation";

export default function GamePlayPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="pt-20">
      <Button
        className="flex items-center gap-3 cursor-pointer mb-10"
        type="button"
        onClick={() => router.back()}
      >
        <Icon name="reply" />
        <span>뒤로</span>
      </Button>
      <div className="w-full md:w-[70%]  min-h-[67vh] mx-auto flex flex-col justify-between">
        <div>
          <Notice currentIndex={currentIndex} questions={questions} />
          <div className="font-sb-20 mb-4 !leading-8">
            Q. <span>{questions[currentIndex].question}</span>
          </div>
          <p className="font-regular-16 text-font-gray !leading-7 md:!leading-8 mb-20 max-h-[20vh] md:max-h-[30vh] overflow-y-auto">
            <RenderAnswerWithBlanks q={questions[currentIndex]} />
            <br />
            <br />
            <br />
          </p>
        </div>
        <Buttons
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          questions={questions}
        />
      </div>
    </main>
  );
}
