import React from "react";

import { ICardProps } from "../card.type";

export const FavoriteCard = ({ data }: ICardProps) => {
  return (
    <>
      <div className="w-full">
        <div className="w-50 h-50 md:w-80 md:h-80 bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 flex flex-col">
          {/* Content */}
          <div className="flex-1">
            <h1 className="font-sb-24 text-font mb-2">{data.title}</h1>
            <p className="font-regular-14 md:font-regular-16 text-sub-text mb-2">
              {data.description}
            </p>
          </div>

          {/* Bottom Badges */}
          <div className="flex justify-end gap-3 mt-auto">
            <div className="w-7 h-7 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold-14 md:font-bold-18 text-lg">
                {data.badgeMain}
              </span>
            </div>
            <div className="w-7 h-7 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold-14 md:font-bold-18 text-lg">
                {data.badgeSub}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
