import React from "react";

import { ICardProps } from "../card.type";

import { mainCardVariants } from "../card.variants";

export const MainCard = ({ data, size }: ICardProps) => {
  const { container, header, categoryTitle, tags, title, content, footer, creator, hearts } =
    mainCardVariants({
      size,
    });

  return (
    <div className={container()}>
      {/* Header */}
      <div>
        <div className={header()}>
          <div className="flex items-center">
            <span className={categoryTitle()}>
              <span>{data.category}</span> | 난이도: <span>{data.level}</span>
            </span>
          </div>
          <div className="border w-6 h-6 text-gray-400" />
        </div>

        {/* Tags */}
        {/* 태그 데이터 받아서 렌더링 */}
        {/* 태그 컴포넌트 merge 해야함 임시 */}
        <div className={tags()}>
          {data.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[8px] px-[2px] py-[1px] md:px-3 md:py-1 bg-gray-100 text-gray-700 rounded-full md:text-[14px]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className={title()}>{data.title}</h2>

        {/* Content */}
        <p className={content()}>{data.description}</p>
      </div>

      {/* Footer */}
      <div className={footer()}>
        <span className={creator()}>작성자: {data.creator}</span>
        <div className="flex items-center gap-2">
          <div className="border w-6 h-6 text-gray-400" />
          <span className={hearts()}>{data.hearts}</span>
        </div>
      </div>
    </div>
  );
};
