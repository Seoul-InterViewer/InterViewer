"use client";
import { BreadCrumb } from "@/app/components/breadCrumb";
import React, { useRef } from "react";
import { questions } from "./mockups/gameResultData";
import { resultVariants } from "./resultVariants";
import { GameResultList } from "./components/gameResultList";
import { GameResultSidebar } from "./components/gameResultSidebar/GameResultSidebar";
const { gameResultWrapper, questionWrapper } = resultVariants();

// BreadCrumb 아이템들
const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "내 게임",
    href: "/",
  },
  {
    label: "테스트 결과",
    href: "/",
    isCurrentPage: true,
  },
];

export default function GameResultPage() {
  const leftScrollRef = useRef<HTMLDivElement>(null);

  return (
    <main className={gameResultWrapper()}>
      <div>
        {/* 브래드 크럼 */}
        <div className="mb-5">
          <BreadCrumb items={items} />
        </div>
        {/* Questions Wrapper */}
        <div className={questionWrapper()}>
          {/* Questions */}
          <div className="w-full h-min-screen flex flex-col-reverse  md:flex-row justify-between md:h-[calc(100vh-240px)] md:overflow-hidden">
            {/* 질문들과 Blank*/}
            <div
              ref={leftScrollRef}
              className="flex flex-col gap-20 md:w-[72%] h-full overflow-y-auto scrollbar-hide"
            >
              {questions.map((q, i) => (
                <GameResultList key={i} q={q} i={i} />
              ))}
            </div>
            {/* Result Sidebar */}
            <GameResultSidebar
              data={questions}
              scrollContainerRef={leftScrollRef as React.RefObject<HTMLDivElement>}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
