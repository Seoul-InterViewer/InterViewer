import React from "react";

import { ICardProps } from "../card.type";

import { mainCardVariants } from "../card.variants";
import { Icon } from "../../icon/Icon";
import { Button } from "../../button/Button";
import { buttonVariants } from "../../button/button.variants";

export const MainCard = ({ data, size }: ICardProps) => {
  const { container, header, categoryTitle, tags, title, content, footer, creator, hearts } =
    mainCardVariants({
      size,
    });

  const getCardImage = (category: string) => {
    switch (category) {
      case "JavaScript":
        return "/images/card-javascript.svg";
      case "React":
        return "/images/card-react.svg";
      case "TypeScript":
        return "/images/card-typescript.svg";
      case "Next":
        return "/images/card-nextjs.svg";
      case "Node":
        return "/images/card-nodejs.svg";
      case "Express":
        return "/images/card-express.svg";
      default:
        return "/images/card-javascript.svg";
    }
  };
  return (
    <div className={container()}>
      <div className="absolute top-[-20] right-[-50] md:top-[-60] md:right-[-60] z-[-1">
        {
          <img
            src={getCardImage(data.category)}
            alt="main-card-tag"
            className="w-40 h-40 md:w-70 md:h-70"
          />
        }
      </div>
      {/* Header */}
      <div>
        <div className={header()}>
          <div className="flex items-center">
            <span className={categoryTitle()}>
              <span>{data.category}</span> | 난이도: <span>{data.level}</span>
            </span>
          </div>
          <Button type="button" className={`${buttonVariants()} z-10`}>
            <Icon name="bookmark" fill="var(--color-border)" className="w-6 md:w-10" />
          </Button>
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
        <div className="flex items-center gap-1">
          <Icon name="heart" width={16} fill="color-font" />
          <span className={hearts()}>{data.hearts}</span>
        </div>
      </div>
    </div>
  );
};
