import React from "react";

import { ICardProps } from "../card.type";
import { checkCardVariants } from "../card.variants";

export const CheckCard = ({ data }: ICardProps) => {
  const { inner, container, section } = checkCardVariants();

  return (
    <div className={inner()}>
      {/* Desktop Layout (768px and above) */}
      <div className={container()}>
        <div className={section()}>
          {/* Left Section - Icon */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gray-800 rounded-2xl flex items-center justify-center">
              {/* React Atom Icon */}
              <div className="relative">
                <div className="w-12 h-12 relative">
                  {/* Electron orbits */}
                  <div className="absolute inset-0 border-2 border-cyan-400 rounded-full transform rotate-0"></div>
                  <div className="absolute inset-0 border-2 border-cyan-400 rounded-full transform rotate-60"></div>
                  <div className="absolute inset-0 border-2 border-cyan-400 rounded-full transform -rotate-60"></div>
                  {/* Nucleus */}
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-between relative">
            {/* Right Section - Content */}
            <div className="flex-1">
              <h2 className="font-bold-18 md:font-semibold-20 text-font mb-2">{data.title}</h2>
              <p className="font-regular-14 md:font-regular-16 text-sub-text mb-2">
                {data.description}
              </p>
              <p className="font-medium-12 md:font-regular-16 text-sub-text mb-4">
                By. {data.creator}
              </p>

              {/* Tag Tag 컴포넌트 이용 예정 */}
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

            {/* Right Section - Checkbox */}
            <div className="flex-shrink-0">
              <input
                type="checkbox"
                className="absolute right-0 bottom-0 md:relative w-6 h-6 border-2 border-gray-300 rounded appearance-none checked:bg-blue-500 checked:border-blue-500 focus:outline-none cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
