"use client";

import { useState } from "react";
import { Icon, IconName } from "@/app/components/icon";
import { ITagIconsProps } from "./bookmarkCard.type";

export const TagCircle = ({ tagIcons }: ITagIconsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const showIcons: IconName[] = [];
  const countLimit = 3;

  if (tagIcons.length === 0) showIcons.push("horizontalElipsis");
  else if (tagIcons.length > countLimit)
    showIcons.push(...tagIcons.slice(0, countLimit), "horizontalElipsis");
  else showIcons.push(...tagIcons);

  // 너비 계산
  const baseWidth = 60;
  const iconWidth = 30;
  const expandedWidth =
    showIcons.length > 1
      ? iconWidth * showIcons.length + (showIcons.length - 1) * 20 + 40
      : baseWidth;

  return (
    <div
      className="h-7.5 md:h-15 bg-font rounded-full flex justify-center items-center overflow-hidden transition-all duration-200 ease-in-out group"
      style={{
        width: isHovered ? `${expandedWidth}px` : `${baseWidth}px`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-5">
        {showIcons.map((iconName, index) => (
          <Icon
            key={iconName}
            name={iconName}
            fill={iconName === "nextjs" ? "var(--color-font-gray)" : "var(--color-background)"}
            stroke="var(--color-background)"
            className={`${index !== 0 ? "opacity-0 absolute group-hover:opacity-100 group-hover:static" : ""} w-3.5 md:w-7.5 h-3.5 md:h-7.5`}
          />
        ))}
      </div>
    </div>
  );
};
