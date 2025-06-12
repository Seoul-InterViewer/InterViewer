import { IWordProps } from "./questionContent.type";
import { Icon } from "@/app/components/icon";

export const QestionContent = ({
  word,
  index,
  isSelected,
  inputValue,
  onWordClick,
}: IWordProps) => {
  const cleanWord = word.replace(/[.,!?]/g, "");

  return (
    <span
      className={`${
        isSelected
          ? ""
          : "hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:bg-main/30 hover:text-orange-600"
      } relative inline-block md:font-regular-24 font-regular-16 whitespace-pre h-fit rounded-sm cursor-pointer transition-all duration-200 mx-0.5 w-fit`}
      onClick={() => onWordClick(cleanWord, index)}
    >
      {isSelected ? (
        <div className="relative inline-flex items-center md:h-12 w-fit">
          <span className="w-fit p-0">
            {inputValue}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onWordClick(cleanWord, index);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center cursor-pointer"
          >
            <Icon name="close" className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <span className="inline-block">{cleanWord}</span>
      )}
      {word.match(/\s+/) || " "}
    </span>
  );
};
