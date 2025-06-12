"use client";
import { Icon } from "@/app/components/icon";
import { List, listVariants } from "@/app/components/list";
import { resultVariants } from "../../resultVariants";
import { GameResultData } from "./GameResultSidebar.type";
import React, { useState, useRef } from "react";
import { gameResultSidebarVariants } from "../../resultVariants";
import { HighlightQuestionOptions } from "./GameResultSidebar.type";

const { resultSidebarWrapper, scoreWrapper, scoreTitle, scoreDescription, scoreList, overShadow } =
  resultVariants();

const MockListItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <li className={`p-4 border border-border rounded-md ${className}`}>{children}</li>;

export const GameResultSidebar = ({
  data,
  scrollContainerRef,
}: {
  data: GameResultData[];
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
}) => {
  const [open, setOpen] = useState(false);
  const correctCount = data.filter((q) => q.isCorrect).length;
  const score = (correctCount / data.length) * 100;

  const highlightQuestion = (index: number, options?: HighlightQuestionOptions) => {
    const question = document.getElementById(`question-${index}`);
    if (!question) return;

    if (options?.scroll && scrollContainerRef?.current && window.innerWidth >= 768) {
      const container = scrollContainerRef.current;
      const questionRect = question.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const offset = questionRect.top - containerRect.top + container.scrollTop;
      container.scrollTo({ top: offset, behavior: "smooth" });
    } else if (options?.scroll) {
      question.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className={resultSidebarWrapper()}>
      <div>
        {/* Score */}
        <div
          className={scoreWrapper()}
          onClick={() => {
            if (window.innerWidth < 768) {
              setOpen(true);
            }
          }}
        >
          <div className={scoreTitle()}>
            <span>{score}</span>점
          </div>
          <div className={scoreDescription()}>
            총 {data.length}문제 중 {correctCount}문제 정답
          </div>
          <div className={scoreList()}>
            <span>목록 보기</span>
            <Icon name="chevronRight" className="w-3 h-3" />
          </div>
        </div>

        {/* Result  */}
        <List className={`${listVariants({ type: "gameResultNav" })} hidden md:block`}>
          {data.map((q, index) => (
            <MockListItem key={index} className="cursor-pointer">
              <div
                className="flex items-center gap-4 w-full h-full"
                onClick={() => highlightQuestion(index, { scroll: true })}
                onMouseEnter={() => highlightQuestion(index, { add: true })}
                onMouseLeave={() => highlightQuestion(index, { remove: true })}
              >
                <Icon name={q.isCorrect ? "correct" : "incorrect"} />
                <div>Question 0{index + 1}</div>
              </div>
            </MockListItem>
          ))}
        </List>

        {/* 사이드바 오버레이 (사이드바가 열려있을 때만 표시) */}
        {open && <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setOpen(false)} />}

        {/* 모바일용 슬라이드 사이드바 */}
        <div className={gameResultSidebarVariants({ isOpen: open })}>
          <button className="absolute top-4 right-4" onClick={() => setOpen(false)}>
            닫기
          </button>
          <List className="mt-12">
            {data.map((q, index) => (
              <MockListItem key={index} className="cursor-pointer">
                <div
                  className="flex items-center gap-4 w-full h-full"
                  onClick={() => highlightQuestion(index, { scroll: true })}
                  onMouseEnter={() => highlightQuestion(index, { add: true })}
                  onMouseLeave={() => highlightQuestion(index, { remove: true })}
                >
                  <Icon name={q.isCorrect ? "correct" : "incorrect"} />
                  <div>Question 0{index + 1}</div>
                </div>
              </MockListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};
