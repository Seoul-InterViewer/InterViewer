"use client";

import { ChangeEventHandler, useState } from "react";
import { ITextareaProps } from "./textarea.type";
import { wrapperVariants, textareaVariants } from "./textarea.variants";
import { Button, buttonVariants } from "../button";

export const Textarea = ({ name, id, type, maxLength, placeholder, noButton }: ITextareaProps) => {
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
        onChange={type === "comment" ? onTextareaHandler : undefined}
      ></textarea>
      {type === "comment" && maxLength && (
        <div className="w-full flex justify-between items-center">
          <span className="font-regular-14 md:font-regular-18 text-black/50">
            {count} / {maxLength}
          </span>
          <Button
            type="button"
            className={`${buttonVariants({ size: "sm", color: "borderGray", hover: true })} px-4 py-1.5 ${noButton && "opacity-0"}`}
          >
            작성
          </Button>
        </div>
      )}
    </div>
  );
};
