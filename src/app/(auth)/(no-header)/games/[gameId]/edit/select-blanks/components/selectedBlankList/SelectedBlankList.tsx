import React from "react";
import { ISelectedBlankListProps } from "./selectedBlankList.type";

export const SelectedBlankList = ({ selectedBlanks, selectedValues }: ISelectedBlankListProps) => {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="text-sub-text">
        선택된 빈칸 :{" "}
        {selectedBlanks.map((blank, index) => (
          <span key={index} className="mr-2">
            {selectedValues[blank.index] || blank.word}
          </span>
        ))}
      </div>
    </div>
  );
};
