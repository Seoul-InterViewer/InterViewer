import React from "react";

import { ICardProps } from "../card.type";
import { Button } from "../../button";
import { buttonVariants } from "../../button/button.variants";

import { editCardVariants } from "../card.variants";

export const EditCard = ({ data }: ICardProps) => {
  const { inner, container, section } = editCardVariants();

  return (
    <div className={inner()}>
      <div className={container()}>
        <div className={section()}>
          {/* Left Section */}
          <div className="flex gap-4 flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold text-gray-900">{data.title}</h1>
              <div className="w-5 h-5 text-gray-400 border" />
            </div>

            <div className="space-y-2">
              {/* 임시 설정 */}
              {data.problems.slice(0, 2).map((problem: any) => (
                <p key={problem.question} className="font-bold-14 md:font-sb-16 text-sub-text">
                  {problem.question}
                </p>
              ))}
              <p className="font-medium-12 md:font-mediut-12 text-sub-text">
                {data.problems && data.problems.length > 2
                  ? `외 문제 ${data.problems.length - 2}개...`
                  : null}
              </p>
            </div>
            {/* Tags */}
            <div className="flex gap-2 mt-0">
              {data.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[14px] px-3 py-1  md:px-3 md:py-1 bg-gray-100 text-gray-700 rounded-full md:text-[14px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-between gap-12 h-full ">
            {/* Right Section - Progress */}
            <div className="hidden md:flex flex-col items-center ">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#1e40af"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${data.progress * 2.51} 251`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">{data.progress}%</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">Completed</p>
            </div>
            <div className="hidden md:block h-[50%] border border-gray-200 w-[1px]"></div>
            {/* Right Section - Buttons */}
            <div className="flex items-center justify-between w-full">
              <div className="flex md:flex-col gap-3">
                <Button
                  type="button"
                  className={buttonVariants({ size: "lg", color: "red", hover: true })}
                >
                  삭제하기
                </Button>
                <Button
                  type="button"
                  className={buttonVariants({ size: "lg", color: "ligthGray", hover: true })}
                >
                  수정하기
                </Button>
              </div>
              <div className="w-5 h-5 text-gray-400 border block md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
