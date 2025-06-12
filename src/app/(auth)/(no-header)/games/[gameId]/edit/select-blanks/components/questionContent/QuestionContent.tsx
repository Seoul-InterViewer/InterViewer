"use client";
import { IWordProps } from "./questionContent.type";
import { Icon } from "@/app/components/icon";

export const QestionContent = ({ word, index, isSelected, onWordClick }: IWordProps) => {
  return (
    <span
      className={`${
        isSelected
          ? ""
          : "hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:bg-main/30 hover:text-orange-600"
      } relative rounded-sm cursor-pointer transition-all duration-200 `}
      onClick={() => onWordClick(word, index)}
    >
      {isSelected ? (
        <span className="bg-sub-text text-white relative rounded-sm hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-all duration-200 pr-5">
          {word}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onWordClick(word, index);
            }}
            className="w-3.5 h-3.5 flex-center cursor-pointer absolute right-0.5 top-1/2 -translate-y-1/2 bg-black/70 rounded-full"
          >
            <Icon name="close" className="w-2.5 h-2.5" fill="white" />
          </button>
        </span>
      ) : (
        <span>{word}</span>
      )}
      {word.match(/\s+/) || " "}
    </span>
  );
};
