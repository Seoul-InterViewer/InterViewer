"use client";

import React, { useState } from "react";
import { IInputProps } from "./input.type";
import { inputVariants } from "./input.variants";

export const Input = ({
  type,
  name,
  id,
  placeholder,
  className = inputVariants(),
}: IInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type={type}
      className={className}
      name={name}
      id={id}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
    />
  );
};
