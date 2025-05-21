"use client";

import { ChangeEventHandler, useState } from "react";
import { ITextareaProps } from "./textarea.type";
import { wrapperVariants, textareaVariants } from "./textarea.variants";

export const Textarea = ({ name, id, type, maxLength, placeholder }: ITextareaProps) => {
  const [count, setCount] = useState(0);
  const onTextareaHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setCount(e.target.value.length);
  };

  return (
    <div className={wrapperVariants({ variant: type })}>
      <textarea
        className={textareaVariants({ variant: type })}
        name={name}
        id={id}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onTextareaHandler}
      ></textarea>
      {type === "comment1" && maxLength && (
        <div className="w-full flex justify-between items-center">
          <span className="font-regular-18 text-black/50">
            {count} / {maxLength}
          </span>
          <button className="px-4 py-1.5 font-medium-12 bg-white border border-[#e5e5e5] rounded">
            작성
          </button>
        </div>
      )}
    </div>
  );
};
