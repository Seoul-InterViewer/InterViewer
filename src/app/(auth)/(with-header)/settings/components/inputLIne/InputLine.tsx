"use client";

import { Input } from "@/app/components/input";
import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";
import { IInputProps } from "./inputLine.type";
import { useState } from "react";

export const InputLine = ({
  labelName,
  inputName,
  nickname,
  placeholder,
  explanation,
}: IInputProps) => {
  const [showChange, setShowChange] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-end mb-2.5 md:mb-5">
        <div className="flex items-end">
          <label id={inputName} className="w-27.5 md:w-37.5 font-sb-20 md:font-sb-24">
            {labelName}
          </label>
          {!showChange ? (
            <span className="font-regular-18 text-font">{nickname}</span>
          ) : (
            <span className="flex items-center">
              <Input
                type="text"
                name={inputName}
                id={inputName}
                placeholder={placeholder}
                maxLength={20}
                className="w-75 h-8 pl-2 border border-r-0 border-border rounded-tl-sm rounded-bl-sm font-regular-16 text-black placeholder:text-sub-text focus:outline-none"
              />
              <Button
                type="button"
                className="h-8 px-4 bg-main text-black border border-transparent rounded-tr-sm rounded-br-sm font-regular-16 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              >
                변경
              </Button>
            </span>
          )}
        </div>
        {!showChange ? (
          <Button
            type="button"
            className="h-8 text-main font-regular-18 underline hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            onClick={() => setShowChange(true)}
          >
            변경
          </Button>
        ) : (
          <Button
            type="button"
            className={buttonVariants({ icon: true })}
            onClick={() => setShowChange(false)}
          >
            <Icon name="close" size={28} />
          </Button>
        )}
      </div>
      <div className="font-regular-14 md:font-regular-18 text-sub-text">{explanation}</div>
    </div>
  );
};
