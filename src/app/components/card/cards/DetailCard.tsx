import React from "react";

import { ICardProps } from "../card.type";
import { Button } from "../../button/Button";
import { buttonVariants } from "../../button/button.variants";
import { detailCardVariants } from "../card.variants";

export const DetailCard = ({ data }: ICardProps) => {
  const { inner, container, section } = detailCardVariants();

  return (
    <div className={inner()}>
      <div className={container()}>
        <div className={section()}>
          {/* Left Section - Icon and Content */}

          {/* Yellow Icon */}
          <div className="flex md:flex-row md:items-center md:gap-6 h-40 md:h-full justify-between">
            <div className="w-24 md:w-20 md:h-20 bg-yellow-400 rounded-lg flex items-center justify-center">
              <div className="w-10 h-10 text-white border" />
            </div>

            {/* Content */}
            <div className="flex gap-4 flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold text-gray-900">{data.title}</h1>
              </div>

              <div className="space-y-2">
                {data.problems.slice(0, 2).map((problem: any) => (
                  <p key={problem.question} className="font-medium-12 md:font-sb-16 text-sub-text">
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
          </div>

          {/* Right Section - Button */}
          <div>
            <Button
              type="button"
              className={`${buttonVariants({ size: "lg", color: "ligthGray", hover: true })} w-full py-4 md:font-regular-18 md:px-5 md:py-2.5 font-regular-14 px-4 py-2`}
            >
              상세보기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
