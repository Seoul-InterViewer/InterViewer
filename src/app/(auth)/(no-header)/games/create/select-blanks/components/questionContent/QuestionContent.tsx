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
      } relative inline-flex items-center md:font-regular-24 font-regular-16 whitespace-pre rounded-sm cursor-pointer transition-all duration-200`}
      onClick={() => onWordClick(cleanWord, index)}
    >
      {isSelected ? (
        <span className="bg-sub-text text-white relative px-1 py-1  rounded-sm  hover:shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-shadow duration-200 w-fit h-fit">
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
        <span className="inline-block px-1 py-1">{cleanWord}</span>
      )}
      {word.match(/\s+/) || " "}
    </span>
  );
};
