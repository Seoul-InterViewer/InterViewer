"use client";
import { IWordProps } from "./questionContent.type";
import { Icon } from "@/app/components/icon";

export const QestionContent = ({ word, index, isSelected, onWordClick }: IWordProps) => {
  const cleanWord = word.replace(/[.,!?]/g, "");

  return (
    <span
      className={`${
        isSelected
          ? ""
          : "hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:bg-main/30 hover:text-orange-600"
      } relative rounded-sm cursor-pointer transition-all duration-200 `}
      onClick={() => onWordClick(cleanWord, index)}
    >
      {isSelected ? (
        <span className="bg-sub-text text-white relative rounded-sm  hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-all duration-200 px-1">
          {word}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onWordClick(cleanWord, index);
            }}
            className="w-4 h-4 flex items-center justify-center cursor-pointer absolute right-0 top-0 -translate-y-1/2"
          >
            <Icon name="close" className="w-4 h-4" />
          </button>
        </span>
      ) : (
        <span>{cleanWord}</span>
      )}
      {word.match(/\s+/) || " "}
    </span>
  );
};
