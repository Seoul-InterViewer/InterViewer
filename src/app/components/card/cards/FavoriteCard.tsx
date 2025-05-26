import React from "react";

import { ICardProps } from "../card.type";

export const FavoriteCard = ({ data }: ICardProps) => {
  return (
    <>
      <div className="w-full">
        {/* Desktop Layout (768px and above) */}
        <div className="hidden md:block">
          <div className="w-80 h-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col">
            {/* Content */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Javascript</h1>
              <p className="text-gray-400 text-lg mb-6">2025.03.27</p>
              <p className="text-gray-600 text-base">DOM, Object, Array, Promise, Class..</p>
            </div>

            {/* Bottom Badges */}
            <div className="flex justify-end gap-3 mt-auto">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">JS</span>
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">4+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (below 768px) */}
        <div className="block md:hidden">
          <div className="w-48 h-32 bg-white rounded-lg border border-gray-200 p-4 flex flex-col">
            {/* Content */}
            <div className="flex-1">
              <h1 className="text-lg font-bold text-gray-900 mb-1">Next.js</h1>
              <p className="text-gray-400 text-sm mb-2">2025.02.12</p>
              <p className="text-gray-600 text-sm">React, useCallback, useMemo..</p>
            </div>

            {/* Bottom Badges */}
            <div className="flex justify-end gap-2 mt-auto">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
