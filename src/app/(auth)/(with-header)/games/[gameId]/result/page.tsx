import { BreadCrumb } from "@/app/components/breadCrumb";
import React from "react";
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
  return (
    <div className={gameResultWrapper()}>
      <div>
        {/* 브래드 크럼 */}
        <div className="mb-5">
          <BreadCrumb items={items} />
        </div>
        {/* Questions Wrapper */}
        <div className={questionWrapper()}>
          {/* Questions */}
          <div className="w-full md:w-[85%]">
            {/* 질문들과 Blank*/}
            <div className="flex flex-col gap-20">
              {questions.map((q, i) => (
                <GameResultList key={i} q={q} i={i} />
              ))}
            </div>
          </div>
          {/* Result Sidebar */}
          <GameResultSidebar data={questions} />
        </div>
      </div>
    </div>
  );
}
