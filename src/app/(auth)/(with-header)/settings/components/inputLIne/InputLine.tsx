"use client";

import { Input } from "@/app/components/input";
import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";
import { IInputProps } from "./inputLine.type";
import { useState } from "react";
import useSetting from "@/hooks/setting/useSetting";

export const InputLine = ({
  labelName,
  inputName,
  inputType,
  inputValue,
  placeholder,
  explanation,
  onChangeValue,
}: IInputProps) => {
  const { on, toggle } = useSetting();
  const [tempValue, setTempValue] = useState(inputValue);

  const handleClickChange = () => {
    onChangeValue(tempValue);
    toggle(false);
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center mb-2.5 md:mb-5">
        <div className={`${!on && "w-5/6"} flex items-center`}>
          <label id={inputName} className="w-25 md:w-37.5 shrink-0 font-sb-20 md:font-sb-24">
            {labelName}
          </label>
          {!on ? (
            <div className="here flex-1 font-regular-18 text-font overflow-auto whitespace-nowrap">
              {inputValue}
            </div>
          ) : (
            <div className="w-full flex items-center">
              <Input
                type={inputType}
                name={inputName}
                id={inputName}
                placeholder={placeholder}
                maxLength={30}
                className="min-w-0 w-full md:w-75 flex-1 md:flex-none h-8 pl-2 border border-r-0 border-border rounded-tl-sm rounded-bl-sm font-regular-16 text-black placeholder:text-sub-text focus:outline-none"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
              />
              <Button
                type="button"
                className="w-15 md:w-17.5 h-8 shrink-0 bg-main text-black border border-transparent rounded-tr-sm rounded-br-sm font-regular-16 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                onClick={handleClickChange}
              >
                변경
              </Button>
            </div>
          )}
        </div>
        {!on ? (
          <Button
            type="button"
            className="w-9 h-8 shrink-0 text-main font-regular-18 underline hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            onClick={() => toggle(true)}
          >
            변경
          </Button>
        ) : (
          <Button
            type="button"
            className={buttonVariants({ icon: true })}
            onClick={() => toggle(false)}
          >
            <Icon name="close" size={28} />
          </Button>
        )}
      </div>
      <div className="font-regular-14 md:font-regular-18 text-sub-text">{explanation}</div>
    </div>
  );
};
