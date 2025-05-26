import React from "react";

import { ICardProps } from "../card.type";

export const CheckCard = ({ data }: ICardProps) => {
  return (
    <div className="w-full">
      {/* Desktop Layout (768px and above) */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
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
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                React - virtual DOM(가상돔)
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                React에서 가상돔을 활용한 렌더링 방식을 자세히 설명합니다.
              </p>
              <p className="text-gray-600 text-sm mb-4">By. 전우진</p>

              {/* Tag */}
              <div>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  React
                </span>
              </div>
            </div>

            {/* Right Section - Checkbox */}
            <div className="flex-shrink-0">
              <input
                type="checkbox"
                className="absolute right-0 bottom-0 md:relative w-6 h-6 border-2 border-gray-300 rounded appearance-none checked:bg-blue-500 checked:border-blue-500 focus:outline-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
